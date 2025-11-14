import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [showSplit, setShowSplit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplit(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(var(--pale-turquoise))] to-[hsl(var(--light-green))]">
      {!showSplit ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--bronze))] to-[hsl(var(--gold))] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--bronze)), hsl(var(--gold)), hsl(var(--bronze)), hsl(var(--gold)))",
            }}
          >
            MADHU MADE
          </h1>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="fixed inset-0 left-0 w-1/2 bg-gradient-to-r from-[hsl(var(--cream))] to-[hsl(var(--pale-turquoise))]"
            animate={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div
            className="fixed inset-0 right-0 left-1/2 w-1/2 bg-gradient-to-l from-[hsl(var(--cream))] to-[hsl(var(--light-green))]"
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </>
      )}
    </div>
  );
};
