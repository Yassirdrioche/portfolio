const ProjectFilter = ({ activeFilter, onChange }) => {
  const filters = ["All", "React", "Next.js", "Tailwind"];

  return (
    <div className="flex flex-wrap justify-center gap-3 z-50 relative">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === filter
              ? "bg-sky-500/80 text-white"
              : " bg-sky-600/50 hover:bg-sky-500/80 "
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
