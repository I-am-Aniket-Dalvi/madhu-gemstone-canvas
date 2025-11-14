import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";
import { useNavigate } from "react-router-dom";

interface ProductSliderProps {
  products: Product[];
}

export const ProductSlider = ({ products }: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  if (products.length === 0) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto py-12">
      <div className="relative aspect-square rounded-full overflow-hidden glass-effect shadow-luxury p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => navigate(`/product/${currentProduct.id}`)}
          >
            <img
              src={currentProduct.images[0]}
              alt={currentProduct.title}
              className="w-3/4 h-3/4 object-cover rounded-2xl shadow-luxury mb-4"
            />
            <h3 className="text-2xl font-serif font-bold text-gradient-gold">
              {currentProduct.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 px-8">
              {currentProduct.description.substring(0, 80)}...
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-effect p-3 rounded-full hover:scale-110 transition-transform"
      >
        <ChevronLeft className="text-[hsl(var(--gold))]" size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-effect p-3 rounded-full hover:scale-110 transition-transform"
      >
        <ChevronRight className="text-[hsl(var(--gold))]" size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-[hsl(var(--gold))] w-8"
                : "bg-[hsl(var(--silver))]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
