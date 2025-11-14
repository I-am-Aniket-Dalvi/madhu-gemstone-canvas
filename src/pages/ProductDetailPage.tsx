import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/products")}
          className="mb-8 hover:text-[hsl(var(--gold))]"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="glass-effect rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-1 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-[hsl(var(--gold))] scale-105"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {product.title}
              </h1>
              {product.price && (
                <p className="text-3xl font-bold text-gradient-gold mb-6">
                  ${product.price}
                </p>
              )}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Product Highlights
                </h3>
                <ul className="space-y-3">
                  {product.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-[hsl(var(--gold))] mt-1 flex-shrink-0" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Video Section (placeholder) */}
            {product.videoUrl && (
              <div className="glass-effect rounded-xl overflow-hidden">
                <video
                  controls
                  className="w-full"
                  poster={product.images[0]}
                >
                  <source src={product.videoUrl} type="video/mp4" />
                </video>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))] text-white smooth-transition"
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 glass-effect hover:bg-[hsl(var(--pale-turquoise))]/30"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
