import { motion, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeUpProps extends HTMLMotionProps<'div'> {}

const FadeUp: React.FC<FadeUpProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.0,
        delay: 0.2
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
