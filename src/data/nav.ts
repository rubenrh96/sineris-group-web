export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Calidad', href: '/calidad' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const COMPANY = {
  name: 'Sineris Group SLU',
  shortName: 'Sineris',
  domain: 'sinerisgroup.com',
  email: 'info@sinerisgroup.com',
  salesEmail: 'ventas@sinerisgroup.com',
  addressLine: 'Corella, Navarra, España',
  hours: 'L–V · 9:00 a 18:00 CET',
} as const;
