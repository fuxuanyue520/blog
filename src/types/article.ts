export interface ArticleFrontMatter {
	title: string;
	description: string;
	publishedAt: Date;
	updatedAt?: Date;
	tags: string[];
	category: "tech" | "essay" | "project";
	coverImage?: string;
	readingTime?: number;
	draft?: boolean;
}

export interface Article {
	id: string;
	slug: string;
	body: string;
	collection: "posts";
	data: ArticleFrontMatter;
}
