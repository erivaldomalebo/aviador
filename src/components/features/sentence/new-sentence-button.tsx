"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getRandomInt } from "@/lib/get-random";

export function NewSentenceButton({ size }: { size: number }) {
	const router = useRouter();

	const handleNewSentence = () => {
		const nextId = getRandomInt(1, size);
		router.replace(`/${nextId}`);
	};

	return (
		<Button variant="default" size="lg" onClick={handleNewSentence}>
			Nova frase
		</Button>
	);
}
