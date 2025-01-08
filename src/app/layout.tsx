import { LanguageProvider } from '@/contexts/LanguageContext';
import { getMetadata } from '@/lib/metadata';
import localFont from "next/font/local";
import './globals.css';

const anjoman = localFont({
  src: [
    {
      path: '../../public/fonts/DanaFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DanaFaNum-ExtraBlack.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-anjoman',
});

const clash = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
});

export const generateMetadata = async ({
  params: { lang = 'en' }
}: {
  params: { lang?: 'en' | 'fa' }
}) => {
  return getMetadata(lang);
};

export default function RootLayout({
  children,
  params: { lang = 'en' }
}: {
  children: React.ReactNode;
  params: { lang?: 'en' | 'fa' }
}) {
  return (
    <html lang={lang} className={`scroll-smooth ${anjoman.variable} ${clash.variable}`}>
      <body className={`${lang === 'fa' ? 'font-anjoman' : 'font-clash'}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
