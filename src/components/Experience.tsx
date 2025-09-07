import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      company: "PNEUMACARE",
      location: "Abuja, Nigeria",
      position: "Frontend Developer",
      duration: "August 2019 - Present",
      achievements: [
        "Architected and implemented complex healthcare dashboards with third-party API integrations using React, Redux, and modern state management patterns, resulting in 40% increased patient engagement.",
        "Developed scalable landing pages with advanced search functionality, appointment booking systems, and real-time test result displays using React hooks and context API.",
        "Built comprehensive patient management platforms with role-based access control, file upload systems, and automated follow-up workflows for hospital operations.",
        "Optimized application performance by implementing code splitting, lazy loading, and memoization techniques, reducing load times by 35%.",
        "Collaborated closely with cross-functional team members, including product owners and QA testers, to deliver high-quality software products within iterative development cycles.",
      ],
      technologies: [
        "React",
        "Redux",
        "Context API",
        "Performance Optimization",
        "Healthcare APIs",
      ],
      highlights: [
        {
          icon: TrendingUp,
          text: "40% Patient Engagement",
          color: "text-green-500",
        },
        { icon: Zap, text: "35% Performance Boost", color: "text-blue-500" },
        {
          icon: Users,
          text: "Cross-functional Team",
          color: "text-purple-500",
        },
      ],
    },
    {
      company: "GOCABY TECHNOLOGY LIMITED",
      location: "Abuja, Nigeria",
      position: "Frontend Developer",
      duration: "August 2022 - July 2024",
      achievements: [
        "Delivered a feature-rich dashboard with complex data visualization and real-time updates using React, NextJS, Redux Toolkit, and Firebase, driving 30% revenue growth.",
        "Built a high-converting landing page with advanced form validation, payment integration, and mobile-responsive design to streamline customer acquisition.",
        "Implemented automated delivery booking with real-time order tracking and notification systems, enhancing operational efficiency.",
        "Established component libraries, implemented TypeScript, and set up automated testing with Jest and React Testing Library to improve development workflow.",
      ],
      technologies: [
        "React",
        "NextJS",
        "Redux Toolkit",
        "Firebase",
        "TypeScript",
        "Jest",
        "Testing Library",
      ],
      highlights: [
        {
          icon: TrendingUp,
          text: "30% Revenue Growth",
          color: "text-green-500",
        },
        { icon: Star, text: "Component Libraries", color: "text-yellow-500" },
        { icon: Zap, text: "Automated Testing", color: "text-blue-500" },
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Engineering, Software Engineering",
    institution: "Al-Hikmah University",
    location: "Ilorin, Nigeria",
    duration: "November 2021 - September 2025",
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-50/10 to-teal-50/10 dark:from-background dark:via-emerald-950/10 dark:to-teal-950/10" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)]" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
            <Briefcase className="h-5 w-5" />
            <span>Experience & Education</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            My Professional{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            From healthcare platforms to e-commerce solutions, discover my path
            in software development
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-purple-500 hidden lg:block" />

          <div className="space-y-16">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />

              <div className="lg:ml-16">
                <div className="text-center lg:text-left mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 mb-4"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Work Experience</span>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <motion.div
                      key={job.company}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm hover:scale-[1.02]">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg">
                                  <Building className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {job.company}
                                  </CardTitle>
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="h-4 w-4" />
                                      <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>{job.duration}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-center lg:items-end space-y-2">
                              <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                                {job.position}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Highlights */}
                          <div className="flex flex-wrap gap-3">
                            {job.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-muted/50 to-muted/30 rounded-full border border-border/30"
                              >
                                <highlight.icon
                                  className={`h-4 w-4 ${highlight.color}`}
                                />
                                <span className="text-sm font-medium text-foreground">
                                  {highlight.text}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground flex items-center space-x-2">
                              <Award className="h-5 w-5 text-yellow-500" />
                              <span>Key Achievements</span>
                            </h4>
                            <ul className="space-y-3">
                              {job.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                  className="flex items-start space-x-3 text-muted-foreground"
                                >
                                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                  <span className="leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="pt-4">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                              <Zap className="h-5 w-5 text-blue-500" />
                              <span>Technologies Used</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, idx) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: idx * 0.05,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-muted/50 to-muted/30 border border-border/30 hover:border-primary/30 transition-colors duration-300"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg hidden lg:block" />

              <div className="lg:ml-16">
                <div className="text-center lg:text-left mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/20 mb-4"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Education</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm hover:scale-[1.02]">
                    <CardContent className="pt-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                              <BookOpen className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                                {education.degree}
                              </h3>
                              <p className="text-lg text-primary font-semibold">
                                {education.institution}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{education.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{education.duration}</span>
                            </div>
                          </div>
                        </div>
                        {/* 
                        <div className="flex flex-col items-center lg:items-end space-y-3">
                          <Badge className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                            Completed
                          </Badge>
                          <div className="text-center lg:text-right">
                            <div className="text-2xl font-bold text-foreground">
                              July 2024
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Final Exams Completed
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
