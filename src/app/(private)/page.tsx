"use client";
import { useState } from "react";
import { Sentence } from "@/components/features/sentence";
import { SentenceActions } from "@/components/features/sentence-actions";
import { Button } from "@/components/ui/button";
import { motivationalSentences } from "@/lib/data";
import { getRandomInt } from "@/lib/get-random";

export default function Home() {
	const [indicator, setIndicator] = useState(1);
	const size = motivationalSentences.length;

	const sentence = motivationalSentences.find(
		(_, idx) => idx + 1 === indicator,
	);

	/* 1. clicar no botao - chamar funcao random 
		2. 
	*/
	return (
		<section className="flex w-full flex-col items-center justify-center gap-16">
			{sentence ? (
				<div className="flex flex-col items-center gap-8">
					<Sentence
						text={sentence.text}
						author={sentence.author}
						year={sentence.year}
					/>
					<SentenceActions
						title={`${sentence.text} \n - ${sentence.author}${sentence.year && ` • ${sentence.year}`}`}
						url={window.location.href}
					/>
				</div>
			) : (
				<div>Nenhuma frase encontrada.</div>
			)}

			<Button
				variant="default"
				size="lg"
				onClick={() =>
					setIndicator((prev) => getRandomInt(1, size) ?? prev)
				}
			>
				Nova frase
			</Button>
		</section>
	);
}
