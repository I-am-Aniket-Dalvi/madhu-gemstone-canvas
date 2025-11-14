import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { hampers } from "@/data/products";
import { Gift } from "lucide-react";

const HampersPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {!showContent ? (
        // Hamper Opening Animation
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(var(--pale-turquoise))] to-[hsl(var(--light-green))]">
          <motion.div
            initial={{ scale: 0.8, rotateX: 0 }}
            animate={{
              scale: [0.8, 1, 1],
              rotateX: [0, 0, -15],
              y: [0, 0, -20],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: 3,
                repeatDelay: 0.3,
              }}
            >
              <Gift className="w-full h-full text-[hsl(var(--gold))]" strokeWidth={1.5} />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-[hsl(var(--gold))]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Opening Light */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
              transition={{ delay: 1.8, duration: 0.7 }}
              className="absolute inset-0 bg-gradient-radial from-[hsl(var(--gold))]/40 to-transparent rounded-full"
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Luxury <span className="text-gradient-gold">Hampers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated gift collections crafted with elegance and thoughtfulness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hampers.map((hamper, idx) => (
              <motion.div
                key={hamper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="glass-effect rounded-2xl overflow-hidden shadow-luxury hover:shadow-2xl smooth-transition group"
              >
                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-2 p-4">
                  {hamper.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`${
                        imgIdx === 0 ? "col-span-2" : ""
                      } aspect-square rounded-xl overflow-hidden`}
                    >
                      <img
                        src={img}
                        alt={`${hamper.title} ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                      />
                    </div>
                  ))}
                </div>

                {/* Video (if available) */}
                {hamper.videoUrl && (
                  <div className="px-4 pb-4">
                    <video
                      controls
                      className="w-full rounded-xl"
                      poster={hamper.images[0]}
                    >
                      <source src={hamper.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[hsl(var(--gold))] smooth-transition">
                    {hamper.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {hamper.description}
                  </p>
                  {hamper.price && (
                    <p className="text-2xl font-bold text-gradient-gold">
                      ${hamper.price}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HampersPage;
