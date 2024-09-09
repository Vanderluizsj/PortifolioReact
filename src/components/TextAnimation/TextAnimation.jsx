import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
  const textArray = text.split("");

  return (
    <div >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: index * 0.1 }}
          style={{ display: "inline-block" }}
        >
          {/* Se o caractere for um espaço, renderize-o como tal */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimation;
