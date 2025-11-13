import React from 'react'
import { Link } from 'react-scroll'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Heart, 
  ArrowUp,
  Globe,
  Code,
  Database,
  Satellite
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/immaculate-khaoma"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/immaculate-khaoma"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com/immaculate_k"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      url: "https://immaculatekhaoma.dev"
    }
  ]

  const skills = [
    { icon: <Code className="w-4 h-4" />, label: "Software Development" },
    { icon: <Database className="w-4 h-4" />, label: "Data Science" },
    { icon: <Satellite className="w-4 h-4" />, label: "GIS & Remote Sensing" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="w-full flex justify-center  px-6 md:px-8 py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Immaculate Khaoma
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Spatial Data Scientist & Full-Stack Developer
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming geospatial data into actionable insights through 
                innovative software solutions and data science.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  className="block text-gray-300 hover:text-blue-400 transition-colors cursor-pointer text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:scale-110 group"
                  title={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} Immaculate Khaoma</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
