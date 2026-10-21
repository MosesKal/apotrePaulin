'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
const links = [['/a-propos', 'L’Apôtre'], ['/enseignements', 'Enseignements'], ['/livres', 'Livres'], ['/ecole-des-lecteurs', 'L’École biblique'], ['/conferences', 'Conférences']];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuRef.current?.focus(); }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <><div className="topbar"><div className="wrap"><span>LA PAROLE AU CŒUR DE LA VIE</span><a href="https://campdejesusbelairfizi.com/fr/a-propos" target="_blank" rel="noreferrer">Église Bel-Air Fizi <span aria-hidden>↗</span></a></div></div>
    <header className="header"><div className="nav-wrap"><Link href="/" aria-label="Paulin Mambwe — Accueil" onClick={() => setOpen(false)}><Image className="logo" src="/images/logo-paulin.png" alt="Apôtre Paulin Mambwe" width={952} height={380} priority/></Link>
      <button ref={menuRef} className="menu-button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}><span>{open ? 'Fermer' : 'Menu'}</span><span aria-hidden>{open ? '✕' : '☰'}</span></button>
      <nav id="navigation" className={open ? 'nav open' : 'nav'} aria-label="Navigation principale">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" className="nav-contact" aria-current={path === '/contact' ? 'page' : undefined} onClick={() => setOpen(false)}>Inviter l’Apôtre <span aria-hidden>↗</span></Link></nav>
    </div></header></>;
}

export function Footer() {
  return <footer><div className="footer-main wrap">
    <div className="footer-brand"><Link href="/" className="footer-logo-box"><Image className="footer-logo" src="/images/logo-paulin.png" alt="Apôtre Paulin Mambwe — Accueil" width={952} height={380}/></Link><p>Enseigner les Écritures.<br/>Former des disciples.<br/>Transmettre l’essentiel.</p></div>
    <div><span className="eyebrow">LE MINISTÈRE</span><Link href="/a-propos">L’homme & sa vocation</Link><Link href="/enseignements">Les enseignements</Link><Link href="/livres">Les ouvrages</Link></div>
    <div><span className="eyebrow">GRANDIR ENSEMBLE</span><Link href="/ecole-des-lecteurs">École des Lecteurs de la Bible</Link><Link href="/conferences">Conférences & rencontres</Link><Link href="/#en-images">Le ministère en images</Link></div>
    <div><span className="eyebrow">RESTONS EN LIEN</span><Link href="/contact">Contact & invitations ↗</Link><a href="https://campdejesusbelairfizi.com/fr/a-propos" target="_blank" rel="noreferrer">Église Bel-Air Fizi ↗</a><p>Une foi qui se nourrit.<br/>Une connaissance qui se partage.</p></div>
  </div><div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Paulin Mambwe</span><span>La Parole au cœur de la vie.</span><a href="#contenu">Retour en haut ↑</a></div></footer>;
}
