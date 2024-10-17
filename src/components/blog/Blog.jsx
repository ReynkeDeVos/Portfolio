import Link from "next/link";
import AdjustingProgramsToUseWayland from "./entries/AdjustingProgramsToUseWayland";

const blogEntries = [
  {
    title: "Adjusting Programs to Use Wayland Instead of XWayland",
    date: "2024-10-17",
    component: <AdjustingProgramsToUseWayland />,
  },
  // Add more blog entries here
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Renke's Blog</h1>
      <ul>
        {blogEntries.map((entry, index) => (
          <li key={index} className="mb-12 p-6 bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-2 text-indigo-400">{entry.title}</h2>
            <p className="text-sm text-zinc-500 mb-4">{entry.date}</p>
            <div className="text-zinc-300">{entry.component}</div>
          </li>
        ))}
      </ul>
      <Link href="/" legacyBehavior>
        <a className="inline-block mt-8 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Return to Main Page
        </a>
      </Link>
    </div>
  );
};

export default Blog;
