const GridBg = () => {
  return (
    <div
      className="absolute inset-0 opacity-25 transition-opacity duration-600 z-[-1]"
      style={{
        backgroundImage: `
            linear-gradient(rgba(2, 133, 199, 0.493) 1px, transparent 1px),
            linear-gradient(90deg,rgba(2, 133, 199, 0.493) 1px, transparent 1px)
          `,
        backgroundSize: "24px 24px",
        backgroundAttachment: "fixed",
      }}
    />
  );
};

export default GridBg;
