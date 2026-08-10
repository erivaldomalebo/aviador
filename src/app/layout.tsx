import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { env } from "@/lib/env.config";
import { cn } from "@/lib/utils";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),

	title: {
		default: "Aviador - Plataforma de Aviação",
		template: "%s | Aviador",
	},

	description:
		"Aviador é uma plataforma moderna para acompanhar informações, serviços e soluções relacionadas à aviação.",

	keywords: ["aviador", "aviação", "aeronaves", "voos", "companhias aéreas"],

	authors: [
		{
			name: "Aviador",
		},
	],

	creator: "Aviador",

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},

	openGraph: {
		type: "website",
		locale: "pt_PT",
		url: env.NEXT_PUBLIC_BASE_URL,
		title: "Aviador - Plataforma de Aviação",
		description:
			"Acompanhe informações e soluções inteligentes para o mundo da aviação.",
		siteName: "Aviador",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Aviador",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Aviador - Plataforma de Aviação",
		description:
			"Acompanhe informações e soluções inteligentes para o mundo da aviação.",
		images: ["/og-image.png"],
	},

	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},

	category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="pt"
			suppressHydrationWarning
			className={cn("font-sans", geist.variable)}
		>
			<body suppressHydrationWarning>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
