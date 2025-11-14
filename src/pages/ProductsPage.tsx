import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-gradient-gold">Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium handcrafted products, each made with love and excellence
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge
            variant={selectedCategory === "All" ? "default" : "outline"}
            className="cursor-pointer px-6 py-2 text-sm smooth-transition hover:scale-105"
            onClick={() => setSelectedCategory("All")}
          >
            All Products
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-6 py-2 text-sm smooth-transition hover:scale-105"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-2xl overflow-hidden cursor-pointer group shadow-luxury hover:shadow-2xl smooth-transition"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
              <div className="p-6">
                <Badge className="mb-3">{product.category}</Badge>
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[hsl(var(--gold))] smooth-transition">
                  {product.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-xl font-bold text-gradient-gold">
                    ${product.price}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
