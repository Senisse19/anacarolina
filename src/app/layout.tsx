import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ana Carolina Tavares | Estrategista Digital",
  description: "Transforme seu Instagram em uma ferramenta de vendas com os serviços de gestão de redes sociais e tráfego pago da especialista Ana Carolina Tavares.",
  authors: [{ name: "Ana Carolina Tavares" }],
  openGraph: {
    title: "Ana Carolina Tavares | Estrategista Digital",
    description: "Transforme seu Instagram em uma ferramenta de vendas com os serviços de gestão de redes sociais e tráfego pago da especialista Ana Carolina Tavares.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Carolina Tavares | Estrategista Digital",
    description: "Transforme seu Instagram em uma ferramenta de vendas com os serviços de gestão de redes sociais e tráfego pago da especialista Ana Carolina Tavares.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  icons: {
    icon: "https://storage.googleapis.com/gpt-engineer-file-uploads/0MaRxYDcI9bYS3VIZioZVxL6jFx2/uploads/1758666789849-icons8-coração-marrom-48.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
