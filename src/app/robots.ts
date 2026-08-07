import type { MetadataRoute } from "next";
import { env } from "@/lib/env.config";

export default function robots(): MetadataRoute.Robots {
	const baseURL = env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
			{
				userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "YandexBot"],
				allow: "/",
			},
			{
				userAgent: [
					"GPTBot",
					"ChatGPT-User",
					"ClaudeBot",
					"anthropic-ai",
					"Google-Extended",
					"PerplexityBot",
					"Applebot-Extended",
				],
				allow: "/",
			},
		],

		sitemap: `${baseURL}/sitemap.xml`,

		host: baseURL,
	};
}
