import Link from 'next/link';
export default function NotFound(){return <div className="not-found"><p className="eyebrow">ERREUR 404</p><h1>Page introuvable.</h1><p>Cette page n’existe pas ou a été déplacée.</p><Link href="/" className="button primary">Revenir à l’accueil →</Link></div>}
