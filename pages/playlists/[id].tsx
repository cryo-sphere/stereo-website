import { Playlist } from "../../types";
import React, { createRef, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import NotFound from "../404";
import { deletePlaylist, getPlaylist, updatePlaylist } from "../../utils/Playlists";
import Head from "next/head";
import { DragDropContext, Droppable, DroppableProvided, DropResult } from "react-beautiful-dnd";
import { useRouter } from "next/router";
import PlaylistSave from "../../components/saveNotification/PlaylistSave";
import PlaylistItem from "../../components/playlistItem";
import Link from "next/link";
import axios from "axios";

const PlaylistComponent: React.FC = () => {
	const [playlist, setPlaylist] = useState<Playlist | undefined | null>(undefined);
	const [edited, setEdited] = useState<Playlist | null>(null);

	const [isEditing, setIsEditing] = useState<number[]>([]);
	const [isInvalid, setIsInvalid] = useState<number[]>([]);

	const [titleEditing, setTitleEditing] = useState(false);
	const [isOwner, setIsOwner] = useState(false);
	const [submit, setSubmit] = useState(false);
	const [save, setSave] = useState(false);
	const [del, setDel] = useState(false);

	const titleInputRef = createRef<HTMLInputElement>();

	const { query } = useRouter();
	useEffect(() => {
		const id = Array.isArray(query.id) ? query.id[0] : query.id ?? "";
		const { token, cancel } = axios.CancelToken.source();
		if (id)
			getPlaylist(id, token).then((data) => {
				setIsOwner(data?.isOwner ?? false);
				setPlaylist(data?.playlist ?? null);
				if (data) setEdited(data.playlist);
			});

		return () => cancel("cancelled");
	}, [query]);

	useEffect(() => {
		if (
			JSON.stringify(edited?.songs) !== JSON.stringify(playlist?.songs) ||
			playlist?.name !== edited?.name
		)
			setSave(true);
		else setSave(false);
	}, [edited, playlist]);

	const onDragEnd = (res: DropResult) => {
		if (!res.destination || !edited) return;

		const items = [...edited.songs];
		const [removed] = items.splice(res.source.index, 1);
		items.splice(res.destination.index, 0, removed);
		setEdited({ ...edited, songs: items });

		if (isEditing.includes(res.source.index))
			setIsEditing([...isEditing.filter((x) => x !== res.source.index), res.destination.index]);
		if (isInvalid.includes(res.source.index))
			setIsInvalid([...isInvalid.filter((x) => x !== res.source.index), res.destination.index]);
	};

	const remove = (index: number) => {
		if (!edited) return;
		const items = [...edited.songs];
		items.splice(index, 1);

		setEdited({ ...edited, songs: items });
		if (isEditing.includes(index)) setIsEditing(isEditing.filter((x) => x !== index));
		if (isInvalid.includes(index)) setIsInvalid(isInvalid.filter((x) => x !== index));
	};

	const edit = (index: number, edit: boolean) => {
		if (!edit) {
			setIsEditing(isEditing.filter((x) => x !== index));
		} else setIsEditing([...isEditing, index]);
	};

	const update = (index: number, value: string) => {
		if (!edited || !playlist) return;

		if (!value.startsWith("https://") && !value.startsWith("http://"))
			setIsInvalid([...isInvalid, index]);
		else setIsInvalid(isInvalid.filter((x) => x !== index));

		const items = [...edited.songs];
		items.splice(index, 1);

		const old = playlist.songs[index];
		items.splice(index, 0, value ? value : old);
		setEdited({ ...edited, songs: items });
	};

	const add = () => {
		if (!edited || !playlist) return;
		setEdited({ ...edited, songs: [...edited.songs, ""] });

		const index = edited.songs.length;
		update(index, "New song");
		edit(index, true);
	};

	const resetForm = () => {
		if (!playlist) return;
		setEdited(playlist);
	};

	const submitForm = async () => {
		if (!edited || !playlist) return;

		const left = edited.songs.filter(
			(str) => !str.startsWith("https://") && !str.startsWith("http://")
		);
		if (left.length) return;

		setSubmit(true);

		const songs = edited.songs.slice(0, 100);
		const name = edited.name.slice(0, 32);
		const playlistId = playlist.id;

		await updatePlaylist({
			playlistId,
			songs,
			name,
		});
		setPlaylist({ ...playlist, songs, name });
		setEdited({ ...playlist, songs, name });

		setIsEditing([]);
		setIsInvalid([]);

		setSubmit(false);
	};

	const titleEditingFunction = () => {
		if (!edited) return;

		if (titleEditing)
			setEdited({ ...edited, name: (titleInputRef.current?.value || edited.name).slice(0, 32) });

		setTitleEditing(!titleEditing);
	};

	const deletePl = async () => {
		if (!playlist || del) return;
		setDel(true);
		await deletePlaylist(playlist.id);

		window.location.href = "/playlists";
	};

	return playlist && edited ? (
		<>
			<Head>
				<title>Playlist - {playlist.name}</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Playlist" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/playlists" />
				<meta
					property="og:description"
					content="Stereo has custom playlists, you can have up to 100 playlists with 100 songs each. It doesn't matter which link you provide, as long as it's playable!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<main className="background-full" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
				<div className="playlist-info">
					{isOwner ? (
						<div className="playlist__info-edit">
							{titleEditing ? (
								<input
									ref={titleInputRef}
									type="text"
									placeholder={edited.name}
									className="playlist__title-input song__draggable-input"
								/>
							) : (
								<h1 className="playlist-title">{edited.name}</h1>
							)}
							<i
								className={
									titleEditing
										? "playlist__title-edit fas fa-check"
										: "playlist__title-edit fas fa-edit"
								}
								onClick={titleEditingFunction}
							/>
						</div>
					) : (
						<h1 className="playlist-title">{playlist.name}</h1>
					)}
					<p className="playlist-count">
						{edited.songs.length}
						{edited.songs.length === 1 ? " song" : " songs"}
					</p>
				</div>
				<Link href="/playlists">
					<a className="playlist-back-button">
						<i className="fas fa-long-arrow-alt-left" /> Back to playlists
					</a>
				</Link>
				<div className="playlist-songs">
					{isOwner ? (
						<>
							<div className="playlist__songs-buttons">
								{edited.songs.length < 100 ? (
									<p className="playlist-add-song" onClick={add}>
										Add a song
									</p>
								) : (
									<p className="playlist-add-song placeholder">Add a song</p>
								)}
								{!del ? (
									<p className="playlist-delete" onClick={deletePl}>
										Delete Playlist
									</p>
								) : (
									<p className="playlist-delete placeholder">Delete Playlist</p>
								)}
							</div>
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId="main">
									{(provided: DroppableProvided) => (
										<>
											<div
												{...provided.droppableProps}
												className="playlist-droppable"
												ref={provided.innerRef}>
												{edited.songs.map((str, i) => (
													<PlaylistItem
														key={i}
														id={i}
														edit={edit}
														remove={remove}
														update={update}
														value={str}
														isInvalid={isInvalid.includes(i)}
														isEditing={isEditing.includes(i)}
													/>
												))}
											</div>
											{provided.placeholder}
										</>
									)}
								</Droppable>
							</DragDropContext>
						</>
					) : (
						playlist.songs.map((str, i) => (
							<div key={i} className="playlist-song">
								<p className="playlist__song-link link" onClick={() => window.open(str)}>
									{str}
								</p>
							</div>
						))
					)}
				</div>
				<PlaylistSave
					isSubmitting={submit}
					popUp={save && !isInvalid.length}
					functions={{ resetForm, submitForm }}
				/>
			</main>
		</>
	) : playlist === undefined ? (
		<div style={{ minHeight: "100vh", minWidth: "100vw", display: "grid", placeItems: "center" }}>
			<Loader type="ThreeDots" color="#fff" height={80} width={80} />
		</div>
	) : (
		<NotFound />
	);
};

export default PlaylistComponent;
