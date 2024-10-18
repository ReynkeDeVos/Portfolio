import { Inter } from 'next/font/google';
import Blog from '../components/blog/Blog';

const inter = Inter({ subsets: ['latin'] });

const BlogPage = () => {
  return (
    <main className={inter.className}>
      <Blog />
    </main>
  );
};

export default BlogPage;
