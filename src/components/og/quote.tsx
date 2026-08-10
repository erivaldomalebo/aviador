export interface QuoteProps {
	quote: string;
	author: string;
	handle: string;
	avatar?: string;
}

// Cores base extraídas do globals.css do shadcn/ui (Tema Dark / Zinc)
const shadcnColors = {
	background: "#ffffff",
	foreground: "#09090b",
	primary: "#fec500",
	primaryForeground: "#733d0a",
	mutedForeground: "#71717e",
	border: "#e4e4e7",
};

const initials = (name: string) =>
	name
		.split(" ")
		.map((part) => part.charAt(0))
		.slice(0, 2)
		.join("")
		.toUpperCase();

export const Quote = ({ quote, author, handle, avatar }: QuoteProps) => (
	<div
		style={{
			backgroundColor: shadcnColors.background,
			color: shadcnColors.foreground,
			display: "flex",
			flexDirection: "column",
			height: "100%",
			justifyContent: "center",
			padding: "96px",
			width: "100%",
		}}
	>
		<div
			style={{
				color: shadcnColors.primary,
				display: "flex",
				fontSize: "140px",
				fontWeight: 800,
				lineHeight: 0.8,
				opacity: 0.8,
			}}
		>
			&ldquo;
		</div>

		<div
			style={{
				display: "flex",
				fontSize: quote.length > 90 ? 52 : 64,
				fontWeight: 600,
				letterSpacing: "-0.02em",
				lineHeight: 1.2,
				marginTop: "8px",
				maxWidth: "1000px",
			}}
		>
			{quote}
		</div>

		<div
			style={{
				alignItems: "center",
				display: "flex",
				gap: "20px",
				marginTop: "56px",
			}}
		>
			{avatar ? (
				<img
					alt={author}
					src={avatar}
					width={76}
					height={76}
					style={{
						borderRadius: "999px",
						border: `1px solid ${shadcnColors.border}`,
					}}
				/>
			) : (
				<div
					style={{
						alignItems: "center",
						backgroundColor: shadcnColors.primary,
						borderRadius: "999px",
						color: shadcnColors.primaryForeground,
						display: "flex",
						fontSize: "32px",
						fontWeight: 700,
						height: "76px",
						justifyContent: "center",
						width: "76px",
					}}
				>
					{initials(author)}
				</div>
			)}
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div
					style={{
						display: "flex",
						fontSize: "32px",
						fontWeight: 600,
					}}
				>
					{author}
				</div>
				<div
					style={{
						color: shadcnColors.mutedForeground,
						display: "flex",
						fontSize: "26px",
					}}
				>
					{handle}
				</div>
			</div>
		</div>
	</div>
);

/* export interface QuoteProps {
	quote: string;
	author: string;
	handle: string;
	avatar?: string;
}

const initials = (name: string) =>
	name
		.split(" ")
		.map((part) => part.charAt(0))
		.slice(0, 2)
		.join("")
		.toUpperCase();


export const shadcnColors = {
	background: "#ffffff",
	foreground: "#09090b",
	primary: "#fec500",
	primaryForeground: "#733d0a",
	mutedForeground: "#71717e",
	border: "#e4e4e7",
};

export const Quote = ({ quote, author, handle, avatar }: QuoteProps) => (
	<div
		style={{
			backgroundColor: "#18181b",
			color: "#fafafa",
			display: "flex",
			flexDirection: "column",
			height: "100%",
			justifyContent: "center",
			padding: "96px",
			width: "100%",
		}}
	>
		<div
			style={{
				color: shadcnColors.primary,
				display: "flex",
				fontSize: "140px",
				fontWeight: 800,
				lineHeight: 0.8,
			}}
		>
			&ldquo;
		</div>

		<div
			style={{
				display: "flex",
				fontSize: quote.length > 90 ? 52 : 64,
				fontWeight: 600,
				letterSpacing: "-0.02em",
				lineHeight: 1.2,
				marginTop: "8px",
				maxWidth: "1000px",
			}}
		>
			{quote}
		</div>

		<div
			style={{
				alignItems: "center",
				display: "flex",
				gap: "20px",
				marginTop: "56px",
			}}
		>
			{avatar ? (
				<img
					alt={author}
					src={avatar}
					width={76}
					height={76}
					style={{ borderRadius: "999px" }}
				/>
			) : (
				<div
					style={{
						alignItems: "center",
						backgroundColor: shadcnColors.primary,
						borderRadius: "999px",
						color: "#18181b",
						display: "flex",
						fontSize: "32px",
						fontWeight: 700,
						height: "76px",
						justifyContent: "center",
						width: "76px",
					}}
				>
					{initials(author)}
				</div>
			)}
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div
					style={{
						display: "flex",
						fontSize: "32px",
						fontWeight: 600,
					}}
				>
					{author}
				</div>
				<div
					style={{
						color: "#a1a1aa",
						display: "flex",
						fontSize: "26px",
					}}
				>
					{handle}
				</div>
			</div>
		</div>
	</div>
);
 */
