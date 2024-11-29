import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4 shadow-lg backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 leading-tight"
          >
            Creative Developer & Designer
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            I craft beautiful digital experiences that inspire and engage
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Code, title: "Clean Code", desc: "Writing maintainable, efficient code" },
              { icon: Palette, title: "Creative Design", desc: "Crafting beautiful user interfaces" },
              { icon: Zap, title: "Performance", desc: "Building fast, optimized applications" }
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;