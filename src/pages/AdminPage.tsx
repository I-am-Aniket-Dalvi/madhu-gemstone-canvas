import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/data/products";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    highlights: "",
    images: [] as string[],
    videoUrl: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "madhumade2024") {
      setIsAuthenticated(true);
      toast.success("Successfully logged in!");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    toast.success("Product added successfully!");
    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      highlights: "",
      images: [],
      videoUrl: "",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(var(--pale-turquoise))] to-[hsl(var(--light-green))]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect rounded-2xl p-8 md:p-12 w-full max-w-md shadow-luxury"
        >
          <h1 className="text-3xl font-serif font-bold text-center mb-8">
            Admin <span className="text-gradient-gold">Login</span>
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-effect"
                placeholder="Enter admin password"
              />
            </div>
            <Button type="submit" className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))] text-white">
              Login
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 md:p-12 shadow-luxury"
        >
          <h1 className="text-4xl font-serif font-bold mb-8">
            Add New <span className="text-gradient-gold">Product</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Product Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="glass-effect"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="glass-effect min-h-32"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="glass-effect">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="glass-effect"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="highlights">Highlights (comma separated)</Label>
              <Textarea
                id="highlights"
                value={formData.highlights}
                onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                className="glass-effect"
                placeholder="Natural ingredients, Handcrafted, Premium quality"
              />
            </div>

            <div>
              <Label htmlFor="images">Product Images (URLs)</Label>
              <div className="space-y-2">
                <Input
                  type="url"
                  placeholder="Image URL"
                  className="glass-effect"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const input = e.target as HTMLInputElement;
                      if (input.value) {
                        setFormData({
                          ...formData,
                          images: [...formData.images, input.value],
                        });
                        input.value = "";
                      }
                    }
                  }}
                />
                <div className="flex flex-wrap gap-2">
                  {formData.images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={img}
                        alt={`Product ${idx + 1}`}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            images: formData.images.filter((_, i) => i !== idx),
                          })
                        }
                        className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="video">Product Video URL (optional)</Label>
              <Input
                id="video"
                type="url"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="glass-effect"
                placeholder="https://example.com/video.mp4"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))] text-white"
              size="lg"
            >
              <Upload className="mr-2" size={20} />
              Add Product
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;
