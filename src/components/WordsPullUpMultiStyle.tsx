import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20px' });

  // Map segments into individual words, keeping the segment's class name
  const allWords = segments.flatMap((segment) => {
    return segment.text.split(' ').map((word) => ({
      word,
      className: segment.className || '',
    }));
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {allWords.map((item, index) => {
        if (!item.word) return null;
        
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] whitespace-nowrap ${item.className}`}
          >
            {item.word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
