import { motion } from "framer-motion";
import { ProductSlider } from "@/components/ProductSlider";
import { products } from "@/data/products";
import { Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(var(--pale-turquoise))] to-[hsl(var(--light-green))]">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--bronze)) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-[hsl(var(--gold))] animate-glow-pulse" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
              <span className="text-gradient-gold">Handcrafted</span>
              <br />
              <span className="text-foreground">Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 font-light">
              Experience the art of premium craftsmanship, where every piece tells a story of elegance and care
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="glass-effect hover:glow-gold text-foreground border border-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/20 smooth-transition"
                onClick={() => navigate("/products")}
              >
                Explore Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-effect hover:bg-[hsl(var(--pale-turquoise))]/30 smooth-transition"
                onClick={() => navigate("/hampers")}
              >
                View Hampers
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </section>

      {/* Featured Products Slider */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured <span className="text-gradient-gold">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium handcrafted products
            </p>
          </motion.div>

          <ProductSlider products={products} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--pale-turquoise))]/20 to-[hsl(var(--light-green))]/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every product is handcrafted with passion and attention to detail",
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "We use only the finest natural ingredients and materials",
              },
              {
                icon: Sparkles,
                title: "Unique Designs",
                description: "Each piece is thoughtfully designed to bring joy and luxury",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-effect p-8 rounded-2xl text-center hover:shadow-luxury smooth-transition"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--gold))]" />
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
