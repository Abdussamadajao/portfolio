import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Download,
  Sparkles,
  Code2,
  Palette,
  Target,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Rocket,
} from "lucide-react";
import abdusImage from "../assets/Images/akinyemi.jpg";

const About = () => {
  const achievements = [
    { icon: Star, text: "5+ Projects Completed", color: "text-yellow-500" },
    { icon: Award, text: "100% Success Rate", color: "text-green-500" },
    { icon: Rocket, text: "3+ Years Experience", color: "text-blue-500" },
    { icon: Users, text: "Client Satisfaction", color: "text-purple-500" },
  ];

  const expertise = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Architecture",
    "Mobile Development",
    "Performance Optimization",
    "Accessibility",
    "Testing & Debugging",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            The Story Behind the Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From curiosity to passion, discover my journey in the world of
            frontend development
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src={abdusImage}
                    alt="Ajao Abdus-samad - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                {/* Floating Badge
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  Available for Work
                </motion.div> */}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className={`flex justify-center mb-2 ${achievement.color}`}
                  >
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Personal Introduction */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  Ajao Abdus-samad
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Frontend Developer & Code Enthusiast
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a passionate frontend developer who believes that
                  great code should not only work flawlessly but also look
                  beautiful and feel intuitive to users. My journey in
                  technology began with a simple curiosity that has grown into a
                  deep passion for creating exceptional digital experiences.
                </p>

                <p>
                  I specialize in building modern web applications using
                  cutting-edge technologies like React, Next.js, and TypeScript.
                  My expertise spans across healthcare platforms, e-commerce
                  solutions, and enterprise applications, where I've
                  consistently delivered projects that exceed expectations.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>What I Do</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <Code2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Frontend Development
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Building responsive, accessible web applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-xl border border-purple-500/20">
                  <Palette className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Frontend Architecture
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Building scalable and maintainable code structures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                  <Zap className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Performance
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Optimizing for speed and user experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl border border-green-500/20">
                  <Users className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground mb-1">
                      Collaboration
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Working closely with teams to deliver excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Key Skills</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/1-xvuwTis1VXMMyAnifxKnS6p3HBpyyuOD5r3GWd7uHk/edit?usp=sharing",
                    "_blank"
                  )
                }
                className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl"
              >
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                View Resume
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
