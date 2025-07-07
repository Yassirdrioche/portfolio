import Timeline from "./Timeline";
import { experience } from "../../../constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="  mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work <span className="text-primary-500">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Timeline experiences={experience} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
