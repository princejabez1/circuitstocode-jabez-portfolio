import { Heart, ArrowUp } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-t from-background to-muted/20 border-t border-glass-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Jabez Kandavalli
            </h3>
            <p className="text-muted-foreground">
              AI & Full-Stack Developer
            </p>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-muted-foreground italic">
              "From Circuits to Code, Building the Future"
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-gradient-glass border-glass-border hover:scale-105 transition-all duration-300 backdrop-blur-xl"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-primary opacity-30 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2024 Jabez Kandavalli. Built with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            using React, TypeScript & Tailwind CSS
          </p>
          <p className="mt-2 text-xs opacity-75">
            Designed for innovation, crafted for performance
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer