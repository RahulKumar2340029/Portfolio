import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../../style';
import { services } from '../../constants'; // Assuming services is an array of objects

// Importing motion utilities
import { fadeIn, textVariant } from '../../utils/motion';
import { Tilt } from 'react-tilt';
import { max } from 'three/examples/jsm/nodes/Nodes.js';
import { SectionWrapper } from '../../hoc';

// ServiceCard component
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
       </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a physics graduate with a profound passion for software and web development. My journey into programming began with languages like Java and C++, where I developed a strong foundation in algorithmic thinking and problem-solving. Through my academic pursuits in physics, I honed analytical skills that complement my technical abilities in software development. My goal is to merge my scientific background with cutting-edge technologies to create impactful solutions that push the boundaries of innovation.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
