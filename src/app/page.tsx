import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import { MinistryGallery } from '@/components/ministry-gallery';

const pathways = [
  { number: '01', label: 'Découvrir le ministère', subtitle: 'L’homme & sa vocation', href: '/a-propos' },
  { number: '02', label: 'Approfondir la Parole', subtitle: 'Les enseignements', href: '/enseignements' },
  { number: '03', label: 'Grandir dans la foi', subtitle: 'L’École des Lecteurs', href: '/ecole-des-lecteurs' },
];

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo"><Image src="/images/paulin-mambwe.jpg" alt="Portrait de l’Apôtre Paulin Mambwe" fill sizes="(max-width: 760px) 100vw, 60vw" priority /></div>
      <div className="hero-shade" aria-hidden="true" />
      <svg className="hero-bible-mark" width="420" height="300" viewBox="0 0 420 300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M210 246C164 222 113 219 45 235V65C114 50 167 59 210 86V246Z" />
        <path d="M210 246C256 222 307 219 375 235V65C306 50 253 59 210 86V246Z" />
        <path d="M210 86V246M27 53V250C101 232 160 239 210 266C260 239 319 232 393 250V53" />
        <path d="M75 102C120 96 157 104 184 119M75 134C120 128 157 136 184 151M75 166C120 160 157 168 184 183" />
        <path d="M345 102C300 96 263 104 236 119M345 134C300 128 263 136 236 151M345 166C300 160 263 168 236 183" />
        <path d="M290 176V210M274 191H306" />
      </svg>
      <div className="hero-stars" aria-hidden="true">
        <Icon name="star" className="hero-star hero-star-one" />
        <Icon name="star" className="hero-star hero-star-two" />
        <Icon name="star" className="hero-star hero-star-three" />
        <Icon name="star" className="hero-star hero-star-four" />
        <Icon name="star" className="hero-star hero-star-five" />
        <Icon name="star" className="hero-star hero-star-six" />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow light"><span className="accent-line" /> LE MINISTÈRE DE L’APÔTRE PAULIN MAMBWE</p>
          <h1 id="hero-title">Ancré dans <em>la Bible.</em><br/>Tourné vers Jésus.</h1>
          <blockquote className="hero-slogan">Sans la croix il n’y a pas de salut,<br/>Et sans la connaissance de Jésus,<br/>il n’y a pas de vie chrétienne prospère<br/>ni même l’entrée au ciel</blockquote>
          <div className="actions"><Link className="button primary" href="/enseignements">Découvrir les enseignements <Icon name="arrow-up-right" /></Link><a href="#le-ministere" className="hero-secondary"><span className="circle-arrow" aria-hidden><Icon name="arrow-down" /></span> Explorer le ministère</a></div>
        </div>
        <div className="hero-bottom"><span>APÔTRE. PASTEUR. AUTEUR. CONFÉRENCIER.</span><a href="#en-images">Le ministère en images <Icon name="arrow-up-right" /></a></div>
      </div>
      <div className="hero-photo-note"><span className="tiny-cross" aria-hidden><Icon name="star" /></span><span>La Parole au cœur<br/><strong>de chaque rencontre.</strong></span></div>
    </section>
    <section className="pathways wrap" aria-label="Explorer le site">
      {pathways.map(item => <Link href={item.href} key={item.number}><span className="path-number">{item.number}</span><div><span>{item.subtitle}</span><h2>{item.label}</h2></div><span className="path-arrow" aria-hidden><Icon name="arrow-up-right" /></span></Link>)}
    </section>
    <section className="section wrap biography" id="le-ministere">
      <div className="bio-composition"><div className="bio-image"><Image src="/images/ministry/portrait-ministere.jpg" alt="Paulin Mambwe enseignant au pupitre" fill sizes="(max-width: 760px) 90vw, 40vw" /></div><div className="bio-label"><span>UNE VIE CONSACRÉE À</span><p>l’essentiel.</p><span className="bio-label-star" aria-hidden><Icon name="star" /></span></div><div className="photo-index">PAULIN MAMBWE / L’HOMME & LE MINISTÈRE</div></div>
      <div className="bio-copy"><p className="eyebrow"><span className="accent-line"/> UNE VOCATION, PLUSIEURS CHEMINS</p><h2>Connaître Dieu.<br/>Et le faire <em>connaître.</em></h2><p className="intro-text">Au cœur de son ministère, une conviction : la connaissance des Écritures nourrit une foi vécue au quotidien.</p><p>Apôtre, pasteur de Bel-Air Fizi, auteur et conférencier, Paulin Mambwe consacre son ministère à l’enseignement de la Parole et à la formation des enfants de Dieu.</p><div className="role-list"><span>Ministère pastoral</span><span>Enseignement biblique</span><span>Écriture & transmission</span></div><Link className="text-link" href="/a-propos">Découvrir l’homme et son parcours <Icon name="arrow-up-right" /></Link></div>
    </section>
    <section className="section wrap teaching-preview" aria-labelledby="teaching-preview-title"><div><p className="eyebrow"><span className="accent-line"/> ENSEIGNEMENTS</p><h2 id="teaching-preview-title">La Parole à <em>approfondir.</em></h2><p>Les enseignements seront réunis ici dès que leurs vidéos, références bibliques et informations de publication seront validées.</p></div><Link className="text-link" href="/enseignements">Explorer les enseignements <Icon name="arrow-up-right" /></Link></section>
    <section className="explore-section"><div className="section wrap"><div className="section-heading"><div><p className="eyebrow"><span className="accent-line"/> DES RESSOURCES POUR GRANDIR</p><h2>À chaque pas,<br/><em>aller plus loin.</em></h2></div><p>Écouter, lire, se retrouver.<br/>Autant de façons d’approfondir la Parole.</p></div><div className="editorial-grid">
      <Link href="/enseignements" className="editorial-card editorial-feature"><Image src="/images/ministry/enseignement.jpg" alt="L’Apôtre Paulin Mambwe pendant un enseignement" fill sizes="(max-width:760px) 90vw, 45vw"/><div className="editorial-overlay"/><span className="card-kicker">01 — ÉCOUTER & MÉDITER</span><div className="editorial-content"><span className="card-circle" aria-hidden><Icon name="arrow-up-right" /></span><h3>Une Parole<br/>qui nous construit.</h3><p>Découvrir les enseignements</p></div></Link>
      <Link href="/conferences" className="editorial-card editorial-event"><Image src="/images/ministry/predication.jpg" alt="Paulin Mambwe, micro à la main, sur une scène" fill sizes="(max-width:760px) 90vw, 30vw"/><div className="editorial-overlay"/><span className="card-kicker">02 — SE RETROUVER</span><div className="editorial-content"><span className="card-circle" aria-hidden><Icon name="arrow-up-right" /></span><h3>Des rencontres.<br/>Une même foi.</h3><p>Conférences & rencontres</p></div></Link>
      <Link href="/livres" className="editorial-card editorial-books"><span className="card-kicker">03 — LIRE & APPROFONDIR</span><div className="book-mark" aria-hidden><svg width="160" height="140" viewBox="0 0 160 140" aria-hidden="true" focusable="false" fill="none"><path d="M80 117V31C59 15 33 14 12 20v86c24-6 48-2 68 11Zm0 0V31c21-16 47-17 68-11v86c-24-6-48-2-68 11Z" stroke="currentColor" strokeWidth="1.4"/><path d="M24 36c17-2 31 1 43 7M24 49c17-2 31 1 43 7M24 62c17-2 31 1 43 7M136 36c-17-2-31 1-43 7M136 49c-17-2-31 1-43 7M136 62c-17-2-31 1-43 7" stroke="currentColor" strokeWidth="1"/></svg></div><div className="editorial-content"><span className="card-circle" aria-hidden><Icon name="arrow-up-right" /></span><h3>Les mots restent.<br/>La foi grandit.</h3><p>Explorer les ouvrages</p></div></Link>
    </div></div></section>
    <section className="school-feature section wrap"><div className="school-photo"><Image src="/images/ministry/lecture.jpg" alt="Paulin Mambwe penché sur les Écritures au pupitre" fill sizes="(max-width:760px) 90vw, 45vw"/><div className="school-stamp"><span>ELB</span><small>ÉCOLE DES LECTEURS<br/>DE LA BIBLE</small></div></div><div className="school-copy"><p className="eyebrow"><span className="accent-line"/> L’ÉCOLE DES LECTEURS DE LA BIBLE</p><h2>Plus qu’une lecture.<br/>Un chemin <em>de vie.</em></h2><p>Lire la Bible entièrement. La lire régulièrement. Apprendre à connaître Dieu, à vivre Sa Parole et à Le servir selon Sa volonté.</p><div className="school-steps"><div><span>01</span><h3>Lire</h3><p>Faire des Écritures un rendez-vous régulier.</p></div><div><span>02</span><h3>Comprendre</h3><p>Grandir dans la connaissance de Dieu.</p></div><div><span>03</span><h3>Vivre</h3><p>Mettre la Parole au cœur du quotidien.</p></div></div><Link className="button dark" href="/ecole-des-lecteurs">Découvrir l’École <Icon name="arrow-up-right" /></Link></div></section>
    <section className="section wrap agenda-preview" aria-labelledby="agenda-preview-title"><div><p className="eyebrow"><span className="accent-line"/> AGENDA DU MINISTÈRE</p><h2 id="agenda-preview-title">Se retrouver <em>autour de la Parole.</em></h2><p>Les prochaines rencontres confirmées seront annoncées dans l’agenda, avec leurs dates, lieux et informations pratiques.</p></div><Link className="text-link" href="/agenda">Consulter l’agenda <Icon name="arrow-up-right" /></Link></section>
    <section className="conviction"><div className="wrap"><span className="conviction-star" aria-hidden><Icon name="star" /></span><p className="eyebrow">LE CŒUR DU MINISTÈRE</p><h2>Connaître Dieu.<br/>Vivre Sa Parole.<br/><em>Transmettre l’essentiel.</em></h2><div className="conviction-rule"/><p>Une même mission, au fil des enseignements,<br/>des ouvrages et des rencontres.</p></div></section>
    <MinistryGallery/>
    <section className="contact-banner"><div className="wrap"><div><p className="eyebrow">UN ÉCHANGE PEUT TOUT COMMENCER</p><h2>Et si nous poursuivions<br/><em>le chemin ensemble ?</em></h2></div><div><Link className="button dark" href="/contact">Inviter l’Apôtre <Icon name="arrow-up-right" /></Link><p>Conférence, enseignement ou rencontre biblique.</p></div></div></section>
  </>;
}
