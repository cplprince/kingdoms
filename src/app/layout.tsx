import { Providers } from '../../lib/providers';
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
	return (
		<Providers>
			<html lang="en">
				<body className={`bg-black ${roboto.className}`}>{children}</body>
			</html>
		</Providers>
	);
}
