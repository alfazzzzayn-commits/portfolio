import { motion, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

export function AnimatedLetter({ char, index, totalChars, progress }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  
  // Calculate range [charProgress - 0.1, charProgress + 0.05] clamped to [0, 1]
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  
  // Pad end slightly if start === end to prevent NaN issues in interpolation
  const safeEnd = end === start ? end + 0.001 : end;
  
  const opacity = useTransform(progress, [start, safeEnd], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre-wrap">
      {char}
    </motion.span>
  );
}
