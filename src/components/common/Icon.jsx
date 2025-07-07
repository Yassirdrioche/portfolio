import { Icon as Iconify } from "@iconify/react";

const Icon = ({ icon, className, ...props }) => {
  return (
    <Iconify
      icon={icon}
      className={`inline-block ${className || ""}`}
      {...props}
    />
  );
};

export default Icon;
