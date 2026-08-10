import { motivationalSentences } from "@/lib/data";
import { env } from "@/lib/env.config";
import { Sentence } from ".";
import { NewSentenceButton } from "./new-sentence-button";
import { SentenceActions } from "./sentence-actions";

export function SentenceContent({ id = 1 }: { id: number }) {
	const size = motivationalSentences.length;
	const sentence = motivationalSentences.find((_, idx) => idx + 1 === id);

	return (
		<section className="flex w-full flex-col items-center justify-center gap-12">
			<div className="flex min-h-70 w-full max-w-2xl flex-col items-center justify-center gap-8 text-center">
				{sentence ? (
					<>
						<Sentence
							text={sentence.text}
							author={sentence.author}
							year={sentence.year}
						/>
						<SentenceActions
							id={id}
							title={`${sentence.text} \n - ${sentence.author}${sentence.year && ` • ${sentence.year}`}`}
							url={env.NEXT_PUBLIC_BASE_URL}
						/>
					</>
				) : (
					<div>Nenhuma frase encontrada.</div>
				)}
			</div>

			<NewSentenceButton size={size} />
		</section>
	);
}
