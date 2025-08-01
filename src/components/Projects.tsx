import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Wikipedia Search",
      description: "Intelligent search application using OpenAI's GPT models to provide contextual and semantic search results from Wikipedia, with natural language processing for better user queries.",
      image: "🔍",
      technologies: ["Python", "OpenAI API", "React", "Flask", "NLP"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "E-Commerce Food Munch",
      description: "Full-stack e-commerce platform for food delivery with user authentication, cart management, payment integration, and real-time order tracking.",
      image: "🍔",
      technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#", 
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Intelligent Task Manager",
      description: "Smart to-do application with AI-powered task prioritization, natural language task creation, deadline reminders, and productivity analytics.",
      image: "✅",
      technologies: ["React", "TypeScript", "AI/ML", "Local Storage", "PWA"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "bg-gradient-accent"
    },
    {
      title: "SQL Data Analytics Dashboard",
      description: "Business intelligence dashboard with complex SQL queries, data visualization, and automated reporting for sales and performance metrics.",
      image: "📊",
      technologies: ["SQL", "Python", "Pandas", "Plotly", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Python Automation Suite",
      description: "Collection of automation scripts for data processing, web scraping, file management, and system monitoring with scheduled task execution.",
      image: "🐍",
      technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Cron"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Real-Time Chat Application",
      description: "Modern chat application with WebSocket integration, user authentication, message encryption, file sharing, and emoji support.",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "JWT", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "bg-gradient-accent"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, full-stack development, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-48 ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-xl"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-xl"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="bg-gradient-glass border-glass-border hover:scale-105 transition-all duration-300"
                  >
                    <Code className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg"
            variant="outline"
            className="bg-gradient-glass border-glass-border hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 backdrop-blur-xl"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects