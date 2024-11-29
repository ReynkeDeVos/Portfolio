import Link from 'next/link';
import AdjustingProgramsToUseWayland from './entries/AdjustingProgramsToUseWayland';

import { useRef, useState } from 'react';
import { FiLink } from 'react-icons/fi'; // Importing the link icon
import BlogBanner from './BlogBanner';
import SideNavigation from './SideNavigation';

const tags = ['Tech', 'Linux', 'Frontend', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Backend'];

const blogEntries = [
  {
    title: 'Fractional Scaling, GNOME and XWayland',
    date: '2024-10-17',
    component: <AdjustingProgramsToUseWayland />,
    tags: ['Tech', 'Linux', 'Frontend'],
    id: 'post-1',
  },

  // Add more blog entries here with unique IDs
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const filteredEntries = blogEntries.filter((entry) => (selectedTag ? entry.tags.includes(selectedTag) : true));

  const postRefs = useRef({});

  const handleNavigate = (id) => {
    postRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, null, `#${id}`);
  };

  return (
    <div className="relative">
      {/* Side Navigation */}
      <div className="hidden lg:block">
        <SideNavigation blogEntries={filteredEntries} onNavigate={handleNavigate} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-8 text-zinc-100">
        {/* Return to main page button at the top with OutlineButton styles */}
        <div className="mb-6">
          <Link
            href="/"
            aria-label="Return to Main Page"
            className="relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-white px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:text-zinc-950">
            Return to Main Page
          </Link>
        </div>

        {/* Banner */}
        <BlogBanner />

        {/* Tag filters */}
        <div className="mb-6 mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isSelected = selectedTag === tag;
            const baseClasses =
              'px-3 py-1 relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-white font-medium text-sm transition-all duration-300';
            const selectedClasses = 'bg-zinc-700 text-zinc-950';
            const unselectedClasses = 'bg-zinc-800 text-zinc-200 lg:hover:bg-zinc-700 lg:hover:text-zinc-950';
            return (
              <button
                key={tag}
                className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
                onClick={() => setSelectedTag(isSelected ? '' : tag)}>
                {tag}
              </button>
            );
          })}
        </div>

        {/* Blog entries */}
        <div>
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <div key={entry.id} ref={(el) => (postRefs.current[entry.id] = el)} className="mb-6" id={entry.id}>
                <div className="group flex items-center gap-2">
                  <h2 className="text-4xl font-semibold text-blue-500">{entry.title}</h2>
                  {/* Add the subtle link icon */}
                  <a
                    href={`#${entry.id}`}
                    aria-label="Link to this post"
                    className="text-blue-500 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                    <FiLink size={20} />
                  </a>
                </div>
                <p className="text-gray-500">{entry.date}</p>
                <div className="mt-4">{entry.component}</div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No blog posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
