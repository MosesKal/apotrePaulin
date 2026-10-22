import type { Metadata } from 'next';
import { Header, Footer } from '@/components/shell';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Apôtre Paulin Mambwe | La Parole au cœur de la vie', template: '%s | Paulin Mambwe' },
  description: 'Découvrez le ministère de l’Apôtre Paulin Mambwe, ses enseignements, ses ouvrages et l’École des Lecteurs de la Bible.',
  icons: {
    icon: [{ url: '/favicon.png?v=2', type: 'image/png', sizes: '256x256' }],
    shortcut: '/favicon.png?v=2',
    apple: [{ url: '/favicon.png?v=2', sizes: '256x256' }],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="fr"><body><a className="skip" href="#contenu">Aller au contenu</a><Header/><main id="contenu">{children}</main><Footer/></body></html>}
