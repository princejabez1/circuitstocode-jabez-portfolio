import { Card } from './ui/card'
import { GraduationCap, Briefcase, Code, Zap } from 'lucide-react'

const Experience = () => {
  const timeline = [
    {
      type: "education",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "B.Tech in Electrical & Electronics Engineering",
      organization: "VelTech University",
      period: "2013 - 2017",
      description: "Specialized in Electrical and Electronics, control systems, and automation. Built strong analytical and problem-solving foundation.",
      gradient: "bg-gradient-primary",
      achievements: ["CGPA: 7.2/10", "Instrumentation Project", "Circuit Design"]
    },
    {
      type: "preparation",
      icon: <Briefcase className="h-6 w-6" />,
      title: "IES Preparation & Career Transition",
      organization: "Self-Directed Learning",
      period: "2017 - 2021",
      description: "Intensive preparation for Indian Engineering Services while exploring software development opportunities.",
      gradient: "bg-gradient-secondary",
      achievements: ["Engineering Services Prep", "Career Exploration", "Skill Assessment"]
    },
    {
      type: "training",
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Web Development",
      organization: "NxtWave Academy",
      period: "2022 - 2024",
      description: "Comprehensive training in modern web technologies, from frontend frameworks to backend development and database management.",
      gradient: "bg-gradient-accent",
      achievements: ["React.js Mastery", "Node.js Backend", "Database Design", "Project Portfolio"]
    },
    {
      type: "ai-learning",
      icon: <Zap className="h-6 w-6" />,
      title: "AI & GenAI Specialization",
      organization: "Self-Learning & Industry Courses",
      period: "2024 - Present",
      description: "Advanced learning in AI technologies, prompt engineering, and integration of AI tools in development workflows.",
      gradient: "bg-gradient-primary",
      achievements: ["OpenAI Integration", "Prompt Engineering", "AI-Powered Apps", "Automation Tools"]
    }
  ]

  const certifications = [
    {
      title: "Full-Stack Development Certification",
      issuer: "NxtWave Academy",
      year: "2024",
      badge: "🎓"
    },
    {
      title: "React.js Advanced Concepts",
      issuer: "Self-Learning",
      year: "2024", 
      badge: "⚛️"
    },
    {
      title: "AI & Machine Learning Fundamentals",
      issuer: "Industry Course",
      year: "2024",
      badge: "🤖"
    },
    {
      title: "Database Management & SQL",
      issuer: "Practical Projects",
      year: "2024",
      badge: "🗄️"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Journey & Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From electrical engineering fundamentals to cutting-edge AI development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30 rounded-full"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-4 lg:mr-8' : 'ml-4 lg:ml-8'} bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105 group`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${item.gradient} shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        
                        <p className="font-medium text-primary mb-3">
                          {item.organization}
                        </p>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <span 
                              key={achIndex}
                              className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:scale-105 transition-transform duration-200"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.gradient} rounded-full border-4 border-background shadow-glow animate-pulse`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Certifications & Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${1.2 + (index * 0.1)}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.badge}
                </div>
                <h4 className="font-bold text-foreground mb-2 text-sm">
                  {cert.title}
                </h4>
                <p className="text-muted-foreground text-xs mb-1">
                  {cert.issuer}
                </p>
                <p className="text-primary font-semibold text-xs">
                  {cert.year}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience