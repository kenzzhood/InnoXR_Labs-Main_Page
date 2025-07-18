import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 5, className }: ShinyTextProps) => {
  return (
    <motion.div
      className={cn(
        "relative inline-block overflow-hidden",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{text}</span>
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
        />
      )}
    </motion.div>
  );
};

export default ShinyText;