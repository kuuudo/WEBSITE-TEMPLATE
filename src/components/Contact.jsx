import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden`}>
      {/* 3D Earth on Top */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:h-[600px] md:h-[500px] h-[400px]">
        <EarthCanvas />
      </motion.div>

      {/* Call to Action and Calendly Link Below */}
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        {/* Call to Action */}
        <p className="text-white mb-6">
          I’m here to help you grow your business. Let’s discuss how we can work together. Simply select a time below to book a call with me!
        </p>

        {/* Calendly Embedded iFrame */}
        <div className="calendly-container mb-6">
          <iframe
            src="https://calendly.com/buzinessgrowth/sam-s-meeting"
            width="100%"
            height="600px"
            frameBorder="0"
            style={{ border: 'none', maxWidth: '800px', margin: '0 auto' }} // Adjusted maxWidth for better layout
            title="Calendly Booking"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");