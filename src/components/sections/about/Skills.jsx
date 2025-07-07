// src/components/sections/About/Skills.jsx
import { skills } from "../../../constants/skills";
import Icon from "../../common/Icon";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8 text-primary-300 font-mono">
        &gt; My Skills
      </h3>

      {Object.entries(skills).map(([category, skillsList]) => (
        <div key={category} className="mb-8">
          <h4 className="text-lg font-medium mb-4 capitalize text-zinc-300">
            {category}
          </h4>
          <div className="flex flex-wrap gap-3">
            {skillsList.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-primary-500 transition-all"
              >
                <Icon icon={skill.icon} className="text-xl text-primary-300" />
                <span className="text-zinc-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
