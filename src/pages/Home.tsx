import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80"
            alt="Luxury perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div 
          className="relative text-center text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-playfair mb-6">
            Essence
          </h1>
          <p className="text-xl md:text-2xl font-cormorant mb-8">
            Discover your signature scent
          </p>
          <button className="bg-white/10 border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full text-white hover:bg-white/20 transition-colors duration-300">
            Explore Collection
          </button>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-playfair text-center mb-16">
          Featured Fragrances
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for product cards */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative aspect-square">
                <img
                  src={`https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600`}
                  alt="Luxury perfume"
                  className="product-image"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl mb-2">Midnight Rose</h3>
                <p className="text-gray-600 mb-4">A captivating blend of rose and jasmine</p>
                <p className="font-semibold">$120.00</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-neutral-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playfair text-center mb-16">
            Find Your Scent
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Floral', 'Woody', 'Oriental', 'Fresh'].map((category, i) => (
              <motion.div
                key={category}
                className="relative h-64 group cursor-pointer overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={`https://images.unsplash.com/photo-1557170334-a9086638de89?auto=format&fit=crop&q=80&w=400`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-playfair">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}