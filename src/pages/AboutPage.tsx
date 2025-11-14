import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "MADHU MADE is born from a passion for creating beautiful, handcrafted luxury products. Every piece we create tells a story of dedication, artistry, and love. We believe in the power of natural ingredients, sustainable practices, and the timeless elegance of handmade craftsmanship. Our journey began with a simple vision: to bring joy and luxury into everyday moments through thoughtfully crafted products that nurture both body and soul.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
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
            "radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--pale-turquoise)) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl overflow-hidden shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1600857544200-f70d45a1b2f6?w=800"
                alt="Handcrafted products"
                className="w-full aspect-square object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 glass-effect rounded-2xl overflow-hidden shadow-luxury w-48 h-48"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400"
                alt="Product detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Section with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg leading-relaxed text-foreground/90 min-h-[400px]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-[hsl(var(--gold))] ml-1"
              />
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Quality",
              description:
                "We never compromise on the quality of our ingredients and materials",
            },
            {
              title: "Sustainability",
              description:
                "Eco-friendly practices are at the heart of everything we do",
            },
            {
              title: "Craftsmanship",
              description:
                "Every product is handmade with meticulous attention to detail",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-effect rounded-xl p-6 text-center hover:shadow-luxury smooth-transition"
            >
              <h3 className="text-2xl font-serif font-bold mb-3 text-gradient-gold">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
