import { SocialLinks } from '../social-links/social-links';

export function Footer() {
  return (
    <footer className='mt-20 border-t border-border pt-8 text-sm text-muted-foreground'>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
        <SocialLinks variant='footer' />
        <p>© {new Date().getFullYear()} Renke Brixel</p>
      </div>
    </footer>
  );
}
