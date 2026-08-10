import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SentenceContent } from "@/components/features/sentence/sentence-content";
import type { PageProps } from "@/core/types/next";
import { getRandomInt } from "@/lib/get-random";

type HomeParams = {
	id?: string[];
};

export const metadata: Metadata = {
	openGraph: {
		images: ["/og?title=Hello%20world"],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/og?title=Hello%20world"],
	},
};

export default async function Home({ params }: PageProps<HomeParams>) {
	const resolvedParams = await params;

	const currentId = resolvedParams.id?.[0];

	if (!currentId) {
		const randomId = getRandomInt(1, 100);
		redirect(`/${randomId}`);
	}

	return <SentenceContent id={+currentId} />;
}
