/* eslint-disable no-unused-vars */
import React, { createRef, useState } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";

interface Props {
	id: number;
	value: string;
	isEditing: boolean;
	isInvalid: boolean;
	remove: (index: number) => void;
	edit: (index: number, edit: boolean) => void;
	update: (index: number, value: string) => void;
}

const PlaylistItem: React.FC<Props> = ({
	id,
	value,
	isEditing,
	isInvalid,
	remove,
	edit,
	update,
}) => {
	const [defaultValue] = useState(value);
	const ref = createRef<HTMLInputElement>();

	const before = () => {
		if (isEditing) update(id, ref.current?.value || value);
		edit(id, !isEditing);
	};

	return (
		<Draggable draggableId={id.toString()} index={id}>
			{(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={snapshot.isDragging ? "song-draggable dragging" : "song-draggable"}>
					{isEditing ? (
						<>
							<input ref={ref} className="song__draggable-input" type="text" placeholder={value} />
							{isInvalid && (
								<p className="form-error">Invalid YouTube/Spotify/SoundCloud/Deezer URL</p>
							)}
						</>
					) : (
						<>
							<p className="playlist__song-value link" onClick={() => window.open(value)}>
								{value}
							</p>
							{isInvalid && (
								<p className="form-error">Invalid YouTube/Spotify/SoundCloud/Deezer URL</p>
							)}
						</>
					)}
					<div className="song__draggable-buttons">
						<i className="fas fa-times" onClick={() => remove(id)} />
						<i className="fas fa-undo-alt" onClick={() => update(id, defaultValue)} />
						<i className={isEditing ? "fas fa-check" : "fas fa-edit"} onClick={before} />
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default PlaylistItem;
