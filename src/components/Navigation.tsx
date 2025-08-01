import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ThemeToggle } from './ui/theme-toggle'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-glass backdrop-blur-xl border-b border-glass-border shadow-glass' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Jabez K
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gradient-glass border-glass-border"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gradient-glass backdrop-blur-xl rounded-glass border border-glass-border">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold mt-4"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation