import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Laptop } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group max-w-md mx-auto md:mx-0"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
              <img
                src="/profile.jpg"
                alt="Kevin Julu"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating skill badges */}
            {[
              { Icon: Code2, text: "Developer", position: "top-4 -right-8" },
              { Icon: Palette, text: "Designer", position: "-bottom-8 -left-8" },
              { Icon: Laptop, text: "Creator", position: "top-1/2 -left-12" }
            ].map(({ Icon, text, position }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`absolute ${position} hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg`}
              >
                <Icon className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">About Me</h2>
            <p className="text-gray-600 mb-6 text-lg">
              I'm a passionate developer and designer with a keen eye for detail and a love for creating
              intuitive, user-friendly experiences. With expertise in modern web technologies and design
              principles, I bring ideas to life through clean code and beautiful interfaces.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              My approach combines technical excellence with creative problem-solving, ensuring that
              every project not only functions flawlessly but also delivers meaningful value to users.
            </p>

            {/* Skills grid with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <h3 className="font-bold text-xl mb-4">Skills</h3>
                {['React & TypeScript', 'UI/UX Design', 'Responsive Design', 'Performance'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-xl mb-4">Tools</h3>
                {['Figma', 'VS Code', 'Git', 'Adobe Suite'].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;