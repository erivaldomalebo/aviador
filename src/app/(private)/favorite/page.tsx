import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FavoritePage() {
	const favorites = [];

	return (
		<main className="container mx-auto flex min-h-[calc(100vh-9rem)] px-4 py-8 sm:max-w-md">
			<section className="flex w-full flex-col gap-8">
				<header className="flex items-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
						<Heart className="size-5 text-primary" />
					</div>

					<div>
						<h1 className="text-xl font-bold">Favoritos</h1>
						<p className="text-sm text-muted-foreground">
							Suas frases guardadas
						</p>
					</div>
				</header>

				{favorites.length === 0 ? (
					<div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed p-8 text-center">
						<Heart className="size-10 text-muted-foreground/50" />

						<div>
							<h2 className="font-medium">
								Nenhuma frase favorita
							</h2>

							<p className="mt-1 text-sm text-muted-foreground">
								Guarde frases que você quer revisitar depois.
							</p>
						</div>

						<Button variant="outline">Explorar frases</Button>
					</div>
				) : (
					<div className="flex flex-col gap-6">
						{/* Lista de frases favoritas */}
					</div>
				)}
			</section>
		</main>
	);
}
