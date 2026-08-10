"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import {
	FaFacebook,
	FaLinkedin,
	FaWhatsapp,
	FaXTwitter,
} from "react-icons/fa6";
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	XShareButton,
} from "react-share";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface SentenceActionsProps {
	url: string;
	title: string;
	className?: string;
}

function ShareItem({
	children,
	label,
	className,
}: {
	children: React.ReactNode;
	label: string;
	className?: string;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					type="button"
					variant="outline"
					size="icon"
					className={cn(
						"rounded-full transition-all duration-200",
						"hover:scale-105 hover:shadow-md",
						className,
					)}
				>
					{children}
					<span className="sr-only">{label}</span>
				</Button>
			</TooltipTrigger>

			<TooltipContent>
				<p>{label}</p>
			</TooltipContent>
		</Tooltip>
	);
}

export function SentenceActions({
	url,
	title,
	className,
}: SentenceActionsProps) {
	const [copied, setCopied] = useState(false);

	async function handleCopy() {
		await navigator.clipboard.writeText(title);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<FacebookShareButton
				url={url}
				title={title}
				hashtag="#aviador #motivação"
				content={title}
			>
				<ShareItem label="Facebook">
					<FaFacebook className="size-4 text-[#1877F2]" />
				</ShareItem>
			</FacebookShareButton>

			<LinkedinShareButton url={url} title={title}>
				<ShareItem label="LinkedIn">
					<FaLinkedin className="size-4 text-[#0A66C2]" />
				</ShareItem>
			</LinkedinShareButton>

			<WhatsappShareButton url={url} title={title}>
				<ShareItem label="WhatsApp">
					<FaWhatsapp className="size-4 text-[#25D366]" />
				</ShareItem>
			</WhatsappShareButton>

			<XShareButton url={url} title={title}>
				<ShareItem label="X (Twitter)">
					<FaXTwitter className="size-4" />
				</ShareItem>
			</XShareButton>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						type="button"
						variant="outline"
						size="icon"
						onClick={handleCopy}
						className={cn(
							"rounded-full transition-all",
							"hover:scale-105 hover:shadow-md",
						)}
					>
						{copied ? (
							<Check className="size-4 text-green-500" />
						) : (
							<Copy className="size-4" />
						)}

						<span className="sr-only">Copiar link</span>
					</Button>
				</TooltipTrigger>

				<TooltipContent>
					<p>{copied ? "Copiado!" : "Copiar link"}</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
}
