import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, TrendingUp, Award } from "lucide-react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Sparkles, label: "Premium Products", value: products.length },
            { icon: TrendingUp, label: "Categories", value: categories.length },
            { icon: Award, label: "Quality Guaranteed", value: "100%" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center hover:shadow-luxury smooth-transition"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--gold))]" />
              <p className="text-3xl font-bold text-gradient-gold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={selectedCategory === "All" ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm smooth-transition hover:scale-105 ${
                selectedCategory === "All"
                  ? "bg-[hsl(var(--gold))] text-white hover:bg-[hsl(var(--bronze))]"
                  : "hover:bg-[hsl(var(--gold))]/10 hover:border-[hsl(var(--gold))]"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All Products
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm smooth-transition hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-[hsl(var(--gold))] text-white hover:bg-[hsl(var(--bronze))]"
                    : "hover:bg-[hsl(var(--gold))]/10 hover:border-[hsl(var(--gold))]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We create custom products tailored to your preferences. Contact us to discuss your unique needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
