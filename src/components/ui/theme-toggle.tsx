import { useTheme } from '@/lib/theme';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='bg-surface/80 text-muted-foreground hover:bg-surface hover:text-foreground absolute top-0 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300'
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${
          theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
        }`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${
          theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
        }`}
      />
    </button>
  );
}
