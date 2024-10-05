import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
                    <nav className="text-white container mx-auto flex justify-around">
                        <Link href={`/`}>홈</Link>
                        <Link href={`/champions`}>챔피언 목록</Link>
                        <Link href={`/items`}>아이템 목록</Link>
                        <Link href={`/rotation`}>챔피언 로테이션</Link>
                    </nav>
                </header>
                <div className="mt-24">{children}</div>
                <footer className="bg-gray-800 p-4 mt-8 fixed bottom-0 w-full ">
                    [Your Product Name] is not endorsed by Riot Games and does
                    not reflect the views or opinions of Riot Games or anyone
                    officially involved in producing or managing Riot Games
                    properties. Riot Games and all associated properties are
                    trademarks or registered trademarks of Riot Games, Inc.
                </footer>
            </body>
        </html>
    );
}
