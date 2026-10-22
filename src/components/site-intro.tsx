'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/icon';

export function SiteIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const dismiss = () => setVisible(false);
    const onMotionChange = () => { if (motion.matches) dismiss(); };
    const onPageShow = (event: PageTransitionEvent) => { if (event.persisted) dismiss(); };

    if (motion.matches) dismiss();
    // CSS also dismisses the intro if JavaScript is delayed or unavailable.
    const timeout = window.setTimeout(dismiss, 1600);
    window.addEventListener('pointerdown', dismiss, { once: true });
    window.addEventListener('keydown', dismiss, { once: true });
    window.addEventListener('pageshow', onPageShow);
    motion.addEventListener('change', onMotionChange);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('pointerdown', dismiss);
      window.removeEventListener('keydown', dismiss);
      window.removeEventListener('pageshow', onPageShow);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="site-intro" aria-hidden="true" onAnimationEnd={(event) => {
      if (event.target === event.currentTarget && event.animationName === 'intro-exit') setVisible(false);
    }}>
      <div className="site-intro-brand">
        <span className="site-intro-eyebrow">LE MINISTÈRE</span>
        <Image className="site-intro-logo" src="/images/logo-paulin-detoure.png" alt="" width={1986} height={792} sizes="240px" priority />
        <div className="site-intro-signature"><span /><Icon name="star" /><span /></div>
        <p>La Parole au cœur de la vie.</p>
      </div>
    </div>
  );
}
