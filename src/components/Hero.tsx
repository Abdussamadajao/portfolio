import { Button } from "./ui/button";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Code2, text: "Clean Code", color: "text-blue-500" },
    { icon: Palette, text: "Modern Design", color: "text-purple-500" },
    { icon: Zap, text: "Fast Performance", color: "text-yellow-500" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden mt-20 md:mt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-50/20 to-teal-50/20 dark:from-background dark:via-emerald-950/20 dark:to-teal-950/20" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)]" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 rounded-full text-sm font-medium border border-green-500/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Ajao Abdus-samad
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80">
                Frontend Developer
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              I craft beautiful, responsive web experiences with modern frontend
              technologies. Passionate about clean code, performance, and
              building intuitive interfaces.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-muted/50 to-muted/30 rounded-full border border-border/50 backdrop-blur-sm"
                >
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl"
              >
                View Projects
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl backdrop-blur-sm"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/1-xvuwTis1VXMMyAnifxKnS6p3HBpyyuOD5r3GWd7uHk/edit?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="mr-3 h-5 w-5" />
                View Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center space-x-6 pt-4"
            >
              <span className="text-sm text-muted-foreground font-medium">
                Follow me:
              </span>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Abdussamadajao"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FiGithub className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ajaoabdussamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FiLinkedin className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/abdussamadajao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FiInstagram className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://web.facebook.com/abdussamad.ajao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FiFacebook className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://x.com/AbdussamadAjao"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <FaXTwitter className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Visual Container */}
            <div className="relative w-96 h-96">
              {/* Central Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              />

              {/* Floating Code Elements */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg"
              >
                <Code2 className="h-8 w-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20 shadow-lg"
              >
                <Palette className="h-8 w-8 text-purple-500" />
              </motion.div>

              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-accent/30 to-green-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20 shadow-lg"
              >
                <Zap className="h-6 w-6 text-accent" />
              </motion.div>

              {/* Central Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-12 border-2 border-primary/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
