import { Button } from './ui/button'
import { ArrowDown, Download } from 'lucide-react'
import profileImage from '@/assets/profile-image.jpg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent rounded-full opacity-10 blur-3xl animate-glow"></div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-glass border border-glass-border backdrop-blur-xl mb-6">
              <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
                Available for Hire
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                From Circuits
              </span>
              <br />
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                to Code
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Jabez Kandavalli</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              AI & Full-Stack Developer
            </p>
            
            <div className="text-lg text-muted-foreground mb-8 max-w-2xl">
              <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Transforming complex problems into elegant digital solutions with the power of 
                <span className="text-primary font-semibold"> Artificial Intelligence</span> and 
                <span className="text-secondary font-semibold"> Modern Web Technologies</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold text-lg px-8 py-6"
              >
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToAbout}
                className="bg-gradient-glass border-glass-border hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-6 backdrop-blur-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-30 blur-2xl scale-110 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-secondary rounded-full opacity-20 blur-3xl scale-125 animate-glow"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-glass-border shadow-float animate-float">
                <div className="absolute inset-0 bg-gradient-glass backdrop-blur-xl"></div>
                <img
                  src={profileImage}
                  alt="Jabez Kandavalli - AI & Full-Stack Developer"
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Centered horizontally within hero section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm mb-2 font-medium group-hover:text-primary">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border-2 border-muted-foreground group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
              <ArrowDown className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero