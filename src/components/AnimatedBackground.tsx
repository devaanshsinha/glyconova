'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-75" />

      {/* Animated Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-30" // Adjust styling as needed
          initial={{ 
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          transition={{
            duration: Math.random() * 5 + 5, // Duration between 5 and 10 seconds
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`, // Size between 50 and 150px
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}

      {/* Foreground Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/0" />
    </div>
  );
} 