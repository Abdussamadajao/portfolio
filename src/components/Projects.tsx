import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Eye,
  Star,
  Calendar,
  Users,
  ArrowUpRight,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import { projects } from "../data";

const Projects = () => {
  const getProjectSize = (index: number) => {
    // Create varied card sizes for masonry effect
    if (index === 0) return "lg:col-span-2 lg:row-span-2"; // Featured project
    if (index === 1) return "lg:col-span-1 lg:row-span-2"; // Tall project
    if (index === 2) return "lg:col-span-1 lg:row-span-1"; // Regular project
    if (index === 3) return "lg:col-span-2 lg:row-span-1"; // Wide project
    if (index === 4) return "lg:col-span-1 lg:row-span-1"; // Regular project
    if (index === 5) return "lg:col-span-1 lg:row-span-1"; // Regular project
    return "lg:col-span-1 lg:row-span-1"; // Default size
  };

  const getProjectDelay = (index: number) => {
    // Staggered animation delays
    return index * 0.15;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-50/10 to-teal-50/10 dark:from-background dark:via-emerald-950/10 dark:to-purple-950/10" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px] dark:bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)]" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 60, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
            <Code className="h-5 w-5" />
            <span>Featured Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            My Creative{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore my latest projects that showcase innovation, creativity, and
            technical excellence
          </motion.p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[100px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: getProjectDelay(index) }}
              viewport={{ once: true }}
              className={`group ${getProjectSize(index)}`}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm overflow-hidden group-hover:-translate-y-3 group-hover:scale-[1.02] relative">
                {/* Project Image Container */}
                <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  {project.image_path ? (
                    <img
                      src={project.image_path}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback Placeholder */}
                  <div
                    className={`text-4xl text-muted-foreground ${
                      project.image_path ? "hidden" : "flex"
                    } items-center justify-center w-full h-full`}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-2">🚀</div>
                      <div className="text-sm font-medium">{project.name}</div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-4">
                      {/* Project Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-white drop-shadow-lg group-hover:text-emerald-300 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-white text-base leading-relaxed line-clamp-3 drop-shadow-md font-medium">
                          {project.description}
                        </p>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.key_techs
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: techIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                            >
                              <Badge
                                variant="secondary"
                                className="px-3 py-2 text-sm font-semibold bg-white/90 text-black border-2 border-white shadow-lg hover:bg-white transition-colors duration-300 backdrop-blur-sm"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        {project.key_techs.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="px-3 py-2 text-sm font-semibold bg-white/90 text-black border-2 border-white shadow-lg"
                          >
                            +{project.key_techs.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 pt-2">
                        {project.deployed_url && (
                          <Button
                            size="sm"
                            onClick={() =>
                              window.open(project.deployed_url, "_blank")
                            }
                            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          >
                            <Globe className="h-4 w-4 mr-2" />
                            Live Demo
                            <ArrowUpRight className="h-4 w-4 ml-2" />
                          </Button>
                        )}

                        {project.github_url ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              window.open(project.github_url, "_blank")
                            }
                            className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-white/30 text-white/70 bg-white/10"
                          >
                            Private
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-lg">
                      {project.category[0]}
                    </Badge>
                  </div>

                  {/* Featured Badge for first project */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Featured</span>
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>More projects coming soon!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
