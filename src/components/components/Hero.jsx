import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../style';
import { ComputersCanvas } from './canvas/index';

const Hero = () => {
  const [name, setName] = useState('Rahul Kumar'); // Default name
  const [displayedFirstName, setDisplayedFirstName] = useState(''); // First name to display gradually
  const [displayKumar, setDisplayKumar] = useState(false); // Flag to display 'Kumar' in purple
  const [lineAnimationComplete, setLineAnimationComplete] = useState(false); // Flag to control line animation completion

  useEffect(() => {
    const firstName = name.split(' ')[0];
    const firstNameLength = firstName.length;
    let timeout;

    // Typing animation effect for the first name
    if (displayedFirstName.length < firstNameLength) {
      timeout = setTimeout(() => {
        setDisplayedFirstName(firstName.slice(0, displayedFirstName.length + 1));
      }, 100); // Adjust typing speed here (in milliseconds)
    } else {
      // Once the first name is fully displayed, set flag to display 'Kumar'
      setDisplayKumar(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedFirstName, name]);

  useEffect(() => {
    // Trigger line animation after a delay (adjust as needed)
    const lineAnimationTimeout = setTimeout(() => {
      setLineAnimationComplete(true);
    }, 1000); // Delay in milliseconds

    return () => clearTimeout(lineAnimationTimeout);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex items-center justify-center relative'>
          {/* Animated circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-[#915eff] h-8 w-8 rounded-full flex items-center justify-center'
          >
            {/* Animated purple line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: lineAnimationComplete ? '80px' : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-1 bg-[#915eff] absolute top-8 left-1/2 transform -translate-x-1/2'
            />
          </motion.div>
        </div>
      </div>

      {/* Ensure the text is positioned correctly */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='ml-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {displayedFirstName}
            {displayKumar && (
              <motion.span
                animate={{
                  color: ['#ffffff', '#915eff', '#ffffff'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className='inline-block'
              >
                Kumar
              </motion.span>
            )}
          </h1>
          <p className={`text-sm text-white mt-2`}>
            I am particularly interested in web development.
            <br className='sm:block hidden' />
            My goal is to leverage my technical skills
            <br className='sm:block hidden' />
            and creative problem-solving abilities to contribute
            <br className='sm:block hidden' />
            to innovative projects and grow as a professional
            <br className='sm:block hidden' />
            in the tech industry.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
