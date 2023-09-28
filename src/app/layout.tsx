import { Providers } from '../../lib/providers';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang="en">
				<body className={'bg-black '}>{children}</body>
			</html>
		</Providers>
	);
}
