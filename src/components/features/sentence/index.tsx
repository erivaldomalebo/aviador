import { Quote } from "lucide-react";
import type { Sentence as SentenceType } from "@/core/types/sentence";

export type SentenceProps = Omit<SentenceType, "id">;

export function Sentence({ text, author, year }: SentenceProps) {
	return (
		<article className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
			<Quote className="size-8 text-primary opacity-60" />

			<blockquote className="text-lg leading-8 tracking-wide text-balance sm:text-xl">
				"{text}"
			</blockquote>

			<footer className="text-sm italic text-muted-foreground">
				—{" "}
				<span className="font-medium not-italic first-letter:uppercase">
					{author}
				</span>
				<span>{year && ` • ${year}`}</span>
			</footer>
		</article>
	);
}
