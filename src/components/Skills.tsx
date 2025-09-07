import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Code2,
  Zap,
  Database,
  Smartphone,
  Wrench,
  Layers,
  Monitor,
  Server,
  Cloud,
} from "lucide-react";

const Skills = () => {
  // Organized skill categories based on your tech stack
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "95", color: "bg-cyan-500" },
        { name: "Next.js", level: "90", color: "bg-foreground" },
        { name: "TypeScript", level: "92", color: "bg-blue-600" },
        { name: "JavaScript", level: "95", color: "bg-yellow-500" },
        { name: "HTML5", level: "98", color: "bg-orange-500" },
        { name: "CSS3", level: "95", color: "bg-blue-500" },
        { name: "Tailwind CSS", level: "90", color: "bg-teal-500" },
        { name: "SASS", level: "85", color: "bg-pink-500" },
        { name: "Styled Components", level: "88", color: "bg-pink-500" },
        { name: "Bootstrap", level: "85", color: "bg-purple-500" },
        { name: "Chakra UI", level: "80", color: "bg-teal-500" },
        { name: "Shadcn UI", level: "75", color: "bg-foreground" },
      ],
    },
    {
      title: "Mobile & PWA",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React Native", level: "85", color: "bg-cyan-500" },
        { name: "Expo", level: "80", color: "bg-foreground" },
      ],
    },
    {
      title: "State Management & Data",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Redux", level: "88", color: "bg-purple-500" },
        { name: "Context API", level: "90", color: "bg-teal-500" },
        { name: "React Query", level: "85", color: "bg-red-500" },
        { name: "Zustand", level: "80", color: "bg-orange-500" },
      ],
    },
    {
      title: "Backend & Database",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Firebase", level: "90", color: "bg-red-500" },
        { name: "MongoDB", level: "85", color: "bg-green-500" },
        { name: "Supabase", level: "80", color: "bg-green-500" },
        { name: "Prisma", level: "75", color: "bg-blue-500" },
        { name: "Appwrite", level: "70", color: "bg-red-500" },
        { name: "Socket.io", level: "75", color: "bg-foreground" },
      ],
    },
    {
      title: "Build Tools & Development",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Vite", level: "90", color: "bg-purple-500" },
        { name: "Webpack", level: "80", color: "bg-blue-500" },
        { name: "Yarn", level: "85", color: "bg-purple-500" },
        { name: "NPM", level: "90", color: "bg-red-500" },
        { name: "Git", level: "92", color: "bg-red-500" },
        { name: "GitHub", level: "95", color: "bg-foreground" },
        { name: "GitLab", level: "85", color: "bg-foreground" },
        { name: "GitHub Actions", level: "80", color: "bg-green-500" },
        { name: "GitLab CI", level: "75", color: "bg-foreground" },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Vercel", level: "95", color: "bg-foreground" },
        { name: "Netlify", level: "90", color: "bg-green-500" },
        { name: "Render", level: "85", color: "bg-green-500" },
        { name: "Railway", level: "80", color: "bg-blue-500" },
      ],
    },
    {
      title: "Libraries & Utilities",
      icon: Layers,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "React Hook Form", level: "88", color: "bg-pink-500" },
        { name: "Chart.js", level: "75", color: "bg-pink-500" },
        { name: "Three.js", level: "70", color: "bg-foreground" },
        { name: "Framer Motion", level: "85", color: "bg-purple-500" },
        { name: "React Router", level: "90", color: "bg-red-500" },
      ],
    },
    // {
    //   title: "Design & Prototyping",
    //   icon: Palette,
    //   color: "from-amber-500 to-orange-500",
    //   skills: [
    //     { name: "Figma", level: "80", color: "bg-orange-500" },
    //     { name: "Adobe XD", level: "75", color: "bg-pink-500" },
    //     { name: "Sketch", level: "70", color: "bg-yellow-500" },
    //   ],
    // },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-50/10 to-teal-50/10 dark:from-background dark:via-emerald-950/10 dark:to-purple-950/10" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:120px_120px] dark:bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)]" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 70, 0],
            rotate: [0, -25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-32 w-56 h-56 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Code2 className="h-5 w-5" />
            <span>Skills & Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            My Technical{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive collection of technologies and tools I use to bring
            ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm overflow-hidden hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full ${skill.color} shadow-sm`}
                            />
                            <span className="font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className={`h-full ${skill.color} rounded-full shadow-sm`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>Continuously learning and expanding my skill set</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
