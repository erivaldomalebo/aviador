export type PageProps<
	TParams = Record<string, string>,
	TSearch = Record<string, string | string[] | undefined>,
> = {
	params: Promise<TParams>;
	searchParams: Promise<TSearch>;
};

export type LayoutProps<TParams = Record<string, string>> = {
	children: React.ReactNode;
	params: Promise<TParams>;
};
