import { SocialLinks } from '../social-links/social-links';

export function Footer() {
  return (
    <footer className='border-border text-muted-foreground mt-20 border-t pt-8 text-sm'>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
        <SocialLinks variant='footer' />
        <p>© {new Date().getFullYear()} Renke Brixel</p>
      </div>
    </footer>
  );
}
