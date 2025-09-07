import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Code,
  Globe,
  Zap,
  Calendar,
  Eye,
  Heart,
  Tag,
  ArrowRight,
} from "lucide-react";
import { projects } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [_, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.flatMap((p) => p.category))),
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

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
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200/50 dark:border-emerald-800/50 mb-6 backdrop-blur-sm"
          >
            <Code className="h-4 w-4" />
            <span>Portfolio Showcase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            All{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A comprehensive collection of my work showcasing modern web
            development, innovative solutions, and creative problem-solving
          </motion.p>
        </motion.div>
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`${
                filter === category ? "bg-primary text-white" : "hover:bg-muted"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="pt-0 h-full overflow-hidden border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
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
                    } items-center justify-center w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30`}
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
                      <Link to={`/projects/${project.id}`}>
                        <Button
                          size="sm"
                          className="bg-white/90 hover:bg-white text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      {project.deployed_url && (
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open(project.deployed_url, "_blank")
                          }
                          className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
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
                </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 max-w-[390px] truncate">
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
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.key_techs.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground border border-border"
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

                    {/* View Details Link */}
                    <div className="pt-2">
                      <Link to={`/projects/${project.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full group-hover:bg-muted/50 transition-colors"
                        >
                          View Full Details
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>More exciting projects in development!</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
