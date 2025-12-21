import { getCollection } from "astro:content";

export async function getAllArticles(options: { ignorePinned?: boolean } = {}) {
	const articles = await getCollection("posts");
	return articles
		.filter((article) => !article.data.draft)
		.sort((a, b) => {
			if (!options.ignorePinned) {
				if (a.data.isPinned && !b.data.isPinned) return -1;
				if (!a.data.isPinned && b.data.isPinned) return 1;
			}
			return (
				new Date(b.data.publishedAt).getTime() -
				new Date(a.data.publishedAt).getTime()
			);
		});
}

export function getArticlesByTag(articles: any[], tag: string) {
	return articles.filter((article) => article.data.tags?.includes(tag));
}

export function getWordCount(content: string) {
	// Simple word count: remove whitespace and count characters for CJK, or words for Latin
	// This is a rough estimate suitable for mixed content
	const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // strip HTML tags if any
	return cleanContent.length;
}
