import type { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from "next";
import { getTranslations, LandingTranslations } from "../lib";

const Landing: NextPage<{ t: LandingTranslations }> = ({ t }) => {
	return <div>{t.test}</div>;
};

export function getServerSideProps(ctx: GetServerSidePropsContext): GetServerSidePropsResult<{ t: LandingTranslations }> {
	return {
		props: {
			t: getTranslations<LandingTranslations>(ctx.locale, "landing")
		}
	};
}

export default Landing;
