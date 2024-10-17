import Link from "next/link";
import AdjustingProgramsToUseWayland from "./entries/AdjustingProgramsToUseWayland";
import { useState, useRef } from "react";
import SideNavigation from "./SideNavigation"; // Import the new SideNavigation component

// More tags for categorization, styled to match the portfolio style
const tags = ["Tech", "Linux", "Frontend", "TypeScript", "React", "Next.js", "Tailwind", "Backend"];

const blogEntries = [
  {
    title: "Adjusting Programs to Use Wayland Instead of XWayland",
    date: "2024-10-17",
    component: <AdjustingProgramsToUseWayland />,
    tags: ["Tech", "Linux", "Frontend"],
    id: "post-1", // Add an ID for navigation
  },
  // Add more blog entries here with unique IDs
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const filteredEntries = blogEntries.filter((entry) => (selectedTag ? entry.tags.includes(selectedTag) : true));

  // Create refs for each blog post to allow scrolling
  const postRefs = useRef({});

  // Function to handle navigation click
  const handleNavigate = (id) => {
    postRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Side Navigation */}
      <SideNavigation blogEntries={filteredEntries} onNavigate={handleNavigate} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl text-zinc-100">
        {/* Return to main page button at the top with OutlineButton styles */}
        <div className="mb-6">
          <Link
            href="/"
            className="relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-white px-4 py-2 font-medium text-sm transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[''] hover:text-zinc-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 text-white">
            Return to Main Page
          </Link>
        </div>

        <h1 className="text-4xl font-black mb-8 text-blue-500">Renke's Blog</h1>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-white font-medium text-sm transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[''] hover:text-zinc-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 ${
                selectedTag === tag ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              }`}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}>
              {tag}
            </button>
          ))}
        </div>

        {/* Blog entries */}
        <div>
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <div key={entry.id} ref={(el) => (postRefs.current[entry.id] = el)} className="mb-6" id={entry.id}>
                <h2 className="text-2xl font-semibold text-blue-500">{entry.title}</h2>
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
