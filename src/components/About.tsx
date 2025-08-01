import { Card } from './ui/card'
import { Lightbulb, Code, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Growth Mindset",
      description: "Continuously learning and adapting to new technologies and methodologies"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Expertise", 
      description: "From frontend React to backend Node.js, database design to AI integration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Innovation",
      description: "Leveraging cutting-edge AI tools and frameworks to build intelligent solutions"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Transforming complex engineering challenges into elegant digital solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
                My Journey: From Circuits to Code
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  My career began in <span className="text-primary font-semibold">Electrical & Electronics Engineering</span>, 
                  where I developed a strong foundation in <span className="text-secondary font-semibold">problem-solving and analytical thinking</span>. 
                  Working with instrumentation and control systems taught me the importance of precision and systematic approaches.
                </p>
                
                <p>
                  The transition to <span className="text-accent font-semibold">software development</span> felt natural as I discovered 
                  the power of code to solve complex problems more efficiently than traditional methods. What started as curiosity 
                  about automation evolved into a passion for <span className="text-primary font-semibold">full-stack development</span>.
                </p>
                
                <p>
                  Today, I combine my <span className="text-secondary font-semibold">engineering mindset</span> with modern 
                  <span className="text-accent font-semibold"> AI technologies</span> to build scalable, intelligent applications 
                  that make a real difference. I believe in continuous learning and staying at the forefront of technological innovation.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block p-8 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
              "Every problem is an opportunity to innovate, and every challenge is a chance to grow."
            </blockquote>
            <cite className="text-muted-foreground font-semibold">- My Development Philosophy</cite>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About