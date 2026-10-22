const paths = {
  'arrow-up-right': 'M6 18 18 6M6 6h12v12',
  'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
  'arrow-up': 'M12 20V4m-6 6 6-6 6 6',
  'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M18 6 6 18',
  'chevron-left': 'm15 6-6 6 6 6',
  'chevron-right': 'm9 6 6 6-6 6',
  'chevron-down': 'm6 9 6 6 6-6',
  expand: 'M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4',
  book: 'M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1m0-15c3-2 7-2 10-1v15c-3-1-7-1-10 1V5',
  clock: 'M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
  play: 'm10 8 6 4-6 4V8M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
  star: 'm12 0 2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4Z',
} as const;

type IconProps = { name: keyof typeof paths; className?: string };

// Geometry and currentColor keep decorative icons independent of system fonts.
export function Icon({ name, className = '' }: IconProps) {
  return (
    <svg className={`icon ${className}`.trim()} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} {...(name === 'star' ? { fill: 'currentColor', stroke: 'none' } : {})} />
    </svg>
  );
}
