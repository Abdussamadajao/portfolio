import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Abdussamadajao",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/ajaoabdussamad",
      color: "hover:text-emerald-400",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      url: "https://www.instagram.com/abdussamadajao/",
      color: "hover:text-emerald-400",
    },
    {
      name: "Facebook",
      icon: FiFacebook,
      url: "https://web.facebook.com/abdussamad.ajao/",
      color: "hover:text-emerald-400",
    },
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/AbdussamadAjao",
      color: "hover:text-emerald-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary via-emerald-600 to-teal-600 rounded-2xl blur opacity-30"></div>
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Ajao Abdus-samad
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Frontend developer passionate about creating beautiful,
                functional, and user-friendly web applications. Let's build
                something amazing together!
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>abdussamadajao@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+2348125745960</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-2xl glass hover:bg-white/20 transition-all duration-300 border border-white/20 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Ajao Abdus-samad.
                {/* <Heart className="inline h-4 w-4 text-red-500 animate-pulse" />{" "}
                using React, TypeScript, and Tailwind CSS. */}
              </p>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full glass hover:bg-white/20 transition-all duration-300"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
