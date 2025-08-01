import { Card } from './ui/card'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "bg-gradient-primary",
      skills: [
        { name: "React.js", icon: "⚛️", level: 90 },
        { name: "JavaScript", icon: "🟨", level: 95 },
        { name: "HTML/CSS", icon: "🌐", level: 95 },
        { name: "Bootstrap", icon: "🅱️", level: 85 }
      ]
    },
    {
      title: "Backend Development", 
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express.js", icon: "🚀", level: 80 },
        { name: "Python", icon: "🐍", level: 90 },
        { name: "PostgreSQL", icon: "🐘", level: 75 }
      ]
    },
    {
      title: "AI & Data Tools",
      gradient: "bg-gradient-accent", 
      skills: [
        { name: "OpenAI", icon: "🤖", level: 85 },
        { name: "Gemini", icon: "💎", level: 80 },
        { name: "GitHub Copilot", icon: "🧑‍💻", level: 90 },
        { name: "SQL Analysis", icon: "📊", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      gradient: "bg-gradient-primary",
      skills: [
        { name: "Git/GitHub", icon: "📝", level: 90 },
        { name: "Lovable AI", icon: "💝", level: 95 },
        { name: "Cursor", icon: "👆", level: 85 },
        { name: "Replit", icon: "🔄", level: 80 }
      ]
    },
    {
      title: "Engineering Tools",
      gradient: "bg-gradient-secondary",
      skills: [
        { name: "MATLAB", icon: "📐", level: 80 },
        { name: "LabVIEW", icon: "🔬", level: 75 },
        { name: "PLC CoDeSys", icon: "⚙️", level: 70 },
        { name: "Instrumentation", icon: "📏", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning from traditional engineering to cutting-edge AI development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="p-6 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className={`w-full h-1 ${category.gradient} rounded-full`}></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Special highlight for GenAI tools */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Card className="p-8 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-float text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ⭐ GenAI Specialist
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient with leading GenAI tools including <span className="text-primary font-semibold">OpenAI GPT models</span>, 
              <span className="text-secondary font-semibold"> Google Gemini</span>, <span className="text-accent font-semibold">Lovable AI</span>, 
              <span className="text-primary font-semibold"> Cursor IDE</span>, <span className="text-secondary font-semibold">Replit</span>, 
              and <span className="text-accent font-semibold">GitHub Copilot</span> for accelerated development and intelligent automation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills