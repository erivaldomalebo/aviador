interface PrivateLayoutProps {
	children: React.ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto flex min-h-[calc(100vh-4rem)] px-4 py-8 sm:max-w-md">
				{children}
			</main>
		</div>
	);
}
