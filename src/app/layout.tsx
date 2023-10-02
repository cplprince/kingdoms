import { Providers } from '../../lib/providers';
import { cn } from '../../lib/utils';
import './globals.css';
import { Roboto, Roboto_Mono } from 'next/font/google';

export const roboto = Roboto_Mono({
	subsets: ['latin'],
});

export const typography = Roboto({
	subsets: ['latin'],
	weight: ['700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const bodyContent = cn(`bg-black ${roboto.className}`);

	return (
		<Providers>
			<html lang="en">
				<body className={bodyContent}>{children}</body>
			</html>
		</Providers>
	);
}
