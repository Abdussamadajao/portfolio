import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Star,
  Code,
  Globe,
  Zap,
  Calendar,
  Eye,
  Heart,
  Tag,
} from "lucide-react";
import { projects } from "../data";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const [_, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/30" />

        {/* Animated geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 mb-6 backdrop-blur-sm"
          >
            <Code className="h-4 w-4" />
            <span>Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
          >
            A collection of my recent work showcasing modern web development,
            innovative solutions, and creative problem-solving
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-full overflow-hidden border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image_path ? (
                    <img
                      src={project.image_path}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback Image */}
                  <div
                    className={`${
                      project.image_path ? "hidden" : "flex"
                    } items-center justify-center w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {project.name}
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      {project.deployed_url && (
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open(project.deployed_url, "_blank")
                          }
                          className="bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open(project.github_url, "_blank")
                          }
                          className="bg-black text-white hover:bg-black/80"
                        >
                          <div className="flex items-center justify-center group-hover:text-blue-500 transition-colors duration-300">
                            <FiGithub className="h-4 w-4 mr-2" />
                          </div>
                          Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="px-2 py-1 text-xs font-medium bg-white/90 text-gray-900 shadow-md">
                      {project.category[0]}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Featured</span>
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-medium text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.key_techs.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.key_techs.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-0"
                          >
                            +{project.key_techs.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>View</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>Like</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>2024</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>More exciting projects in development!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
