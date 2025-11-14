import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-effect rounded-2xl overflow-hidden cursor-pointer group shadow-luxury hover:shadow-2xl smooth-transition relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Image with hover effect */}
        <motion.img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Navigation Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}

        {/* Quick Action Buttons */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            variant="secondary"
            className="glass-effect hover:bg-white/90 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="glass-effect hover:bg-white/90 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Price Tag */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {product.price && (
            <div className="glass-effect px-4 py-2 rounded-full">
              <p className="text-lg font-bold text-gradient-gold">
                ${product.price}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <div className="p-6" onClick={() => navigate(`/product/${product.id}`)}>
        <Badge className="mb-3 bg-[hsl(var(--gold))]/20 text-[hsl(var(--gold))] border-[hsl(var(--gold))]/30">
          {product.category}
        </Badge>
        
        <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[hsl(var(--gold))] smooth-transition">
          {product.title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))] text-white smooth-transition"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{
          translateX: isHovered ? "200%" : "-100%",
        }}
        transition={{ duration: 0.6 }}
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
};
