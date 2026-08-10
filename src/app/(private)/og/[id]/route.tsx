import { ImageResponse } from "next/og";
import { Quote } from "@/components/og/quote";
import { motivationalSentences } from "@/lib/data";

type Context = {
	params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: Context) {
	const { id: idParam } = await params;

	const id = Number.parseInt(idParam, 10);
	const sentence =
		motivationalSentences.find((_, idx) => idx + 1 === id) ??
		motivationalSentences[0];

	return new ImageResponse(
		<Quote
			author={sentence.author}
			handle={sentence.year ? `@${sentence.year}` : "@autor"}
			quote={sentence.text}
		/>,
		{ width: 1200, height: 630 },
	);
}
