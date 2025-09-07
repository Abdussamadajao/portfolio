import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Globe,
  Code,
  Calendar,
  Tag,
  ExternalLink,
  Github,
} from "lucide-react";
import { projects } from "../data";
import { FiGithub } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
          <Link to="/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex items-center space-x-4">
            {project.deployed_url && (
              <Button
                size="sm"
                onClick={() => window.open(project.deployed_url, "_blank")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Globe className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
            {project.github_url && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.github_url, "_blank")}
              >
                <FiGithub className="h-4 w-4 mr-2" />
                View Code
              </Button>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.category.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="bg-primary/10 text-primary border border-primary/20"
                >
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 rounded-lg overflow-hidden shadow-2xl"
          >
            {project.image_path ? (
              <img
                src={project.image_path}
                alt={project.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
            ) : null}

            {/* Fallback Image */}
            <div
              className={`${
                project.image_path ? "hidden" : "flex"
              } items-center justify-center w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-2xl font-medium text-muted-foreground">
                  {project.name}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border/50"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.key_techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-lg p-6 border border-border/50"
              >
                <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.deployed_url && (
                    <a
                      href={project.deployed_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <Globe className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">Live Demo</div>
                        <div className="text-sm text-muted-foreground">
                          {project.deployed_url}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">Source Code</div>
                        <div className="text-sm text-muted-foreground">
                          {project.github_url}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card rounded-lg p-6 border border-border/50"
              >
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Year:</span>
                    <span>2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Category:</span>
                    <span>{project.category[0]}</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-card rounded-lg p-6 border border-border/50"
              >
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {project.deployed_url && (
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() =>
                        window.open(project.deployed_url, "_blank")
                      }
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Live Site
                    </Button>
                  )}
                  {project.github_url && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(project.github_url, "_blank")}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      View Source
                    </Button>
                  )}
                  <Link to="/projects" className="block">
                    <Button variant="ghost" className="w-full">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      All Projects
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
