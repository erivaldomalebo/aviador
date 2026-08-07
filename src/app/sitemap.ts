import type { MetadataRoute } from "next";
import { env } from "@/lib/env.config";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL = env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: `${baseURL}/favorite`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
	];
}
