import { Heart } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:max-w-md">
				<Link
					href="/"
					className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
				>
					Aviador
				</Link>

				<nav className="flex items-center gap-2">
					<Link
						href="/favorite"
						title="Favoritos"
						aria-label="Favoritos"
						className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
					>
						<Heart className="size-5" />
					</Link>

					<Link
						href="/profile"
						aria-label="Perfil"
						className="rounded-full transition-opacity hover:opacity-80"
					>
						<Avatar className="h-9 w-9 border">
							<AvatarImage
								src="/avatar.png"
								alt="Foto do usuário"
							/>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
					</Link>
				</nav>
			</div>
		</header>
	);
}
