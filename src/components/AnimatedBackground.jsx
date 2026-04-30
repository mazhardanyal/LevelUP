import { motion } from "framer-motion";

const float = (duration = 10) => ({
  y: [0, -30, 0, 30, 0],
  x: [0, 20, -20, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

const slowRotate = {
  rotate: [0, 10, -10, 0],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* SHAPE 1 */}
      <motion.div
        animate={float(14)}
        className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl top-[-120px] left-[-120px]"
      />

      {/* SHAPE 2 */}
      <motion.div
        animate={float(18)}
        className="absolute w-[400px] h-[400px] bg-orange-400 opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"
      />

      {/* SHAPE 3 (CENTER DEPTH LAYER) */}
      <motion.div
        animate={{
          ...float(16),
          ...slowRotate,
        }}
        className="absolute w-[320px] h-[320px] bg-purple-500 opacity-10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* EXTRA MICRO FLOAT (gives “alive” feeling) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[200px] h-[200px] bg-blue-500 opacity-10 rounded-full blur-2xl top-[20%] left-[60%]"
      />

    </div>
  );
};

export default AnimatedBackground;