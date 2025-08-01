import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Hi Jabez,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    const mailtoLink = `mailto:jabez.kandavalli@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    
    toast.success('Email client opened! Thank you for reaching out.')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      detail: "kjabezofficial@gmail.com",
      link: "mailto:kjabezofficial@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn", 
      detail: "Connect with me",
      link: "https://linkedin.com/in/jabez-kandavalli",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      detail: "View my projects",
      link: "https://github.com/jabez-kandavalli",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      detail: "India",
      link: "#https://maps.app.goo.gl/6n5vmgU9uTf6p6Lt7",
      gradient: "bg-gradient-primary"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Build Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass hover:shadow-float transition-all duration-500 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input/50 border-glass-border backdrop-blur-xl focus:ring-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input/50 border-glass-border backdrop-blur-xl focus:ring-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-input/50 border-glass-border backdrop-blur-xl focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-gradient-glass border-glass-border backdrop-blur-xl shadow-glass">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
                Get in touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or simply connecting with fellow developers and innovators.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-full ${info.gradient} shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Hire CTA */}
            <Card className="p-8 text-center bg-gradient-primary shadow-glow border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Ready to Hire?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Let's discuss how I can help bring your vision to life.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="hover:scale-105 transition-all duration-300 font-semibold"
                onClick={() => window.location.href = 'mailto:jabez.kandavalli@example.com?subject=Hiring Inquiry'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me Now
              </Button>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Linkedin className="h-6 w-6" />, link: "https://linkedin.com/in/jabez-kandavalli", color: "hover:text-blue-600" },
              { icon: <Github className="h-6 w-6" />, link: "https://github.com/jabez-kandavalli", color: "hover:text-gray-800 dark:hover:text-gray-200" },
              { icon: <Mail className="h-6 w-6" />, link: "mailto:jabez.kandavalli@example.com", color: "hover:text-red-500" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={social.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gradient-glass border border-glass-border backdrop-blur-xl hover:scale-110 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact