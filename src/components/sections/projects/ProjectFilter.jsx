const ProjectFilter = ({ activeFilter, onChange }) => {
  const filters = ["All", "React", "Vue.js", "Next.js", "Node.js", "Tailwind"];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === filter
              ? "bg-primary-500 text-white"
              : "bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
