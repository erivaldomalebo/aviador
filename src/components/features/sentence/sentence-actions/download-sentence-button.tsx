"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function DownloadSentenceButton({ id }: { id: number }) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline" size="icon" asChild>
					<Link
						href={`/og/${id}`}
						download={`aviador-${id.toString().padStart(3, "0")}.png`}
						aria-label="Baixar Imagem"
					>
						<Download className="h-4 w-4" />
					</Link>
				</Button>
			</TooltipTrigger>

			<TooltipContent>
				<p>Baixar Imagem</p>
			</TooltipContent>
		</Tooltip>
	);
}
