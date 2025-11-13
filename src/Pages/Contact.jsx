import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RiTwitterXLine, RiMailLine, RiLinkedinBoxFill, RiGithubFill} from "react-icons/ri";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  User, 
  MessageSquare, 
} from 'lucide-react'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! I will get back to you soon.')
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <RiMailLine className="w-6 h-6" />,
      value: "immafukwo@gmal.com",
      link: "mailto:immafukwo@gmal.com",
      color: "blue"
    },
    {
      icon: <RiTwitterXLine className="w-6 h-6" />,
      value: "@imma_khaoma",
      link: "https://x.com/imma_khaoma",
      color: "blue"
    },
    {
      icon: <RiLinkedinBoxFill className="w-6 h-6" />,
      value: "Immaculate Khaoma",
      link: "https://www.linkedin.com/in/immaculate-khaoma-1934342b2/",
      color: "blue"
    },
    {
      icon: <RiLinkedinBoxFill className="w-6 h-6" />,
      value: "@khaif-dev",
      link: "https://github.com/khaif-dev",
      color: "blue"
    }
  ]

  
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        hover: "hover:bg-blue-50 dark:hover:bg-blue-900/50"
      },     
      gray: {
        bg: "bg-gray-100 dark:bg-gray-700",
        text: "text-gray-600 dark:text-gray-400",
        border: "border-gray-200 dark:border-gray-600",
        hover: "hover:bg-gray-50 dark:hover:bg-gray-600"
      },
      sky: {
        bg: "bg-sky-100 dark:bg-sky-900/30",
        text: "text-sky-600 dark:text-sky-400",
        border: "border-sky-200 dark:border-sky-800",
        hover: "hover:bg-sky-50 dark:hover:bg-sky-900/50"
      }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="contact" className="min-h-screen bg-gray-100 dark:bg-neutral-800 w-full px-6 md:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Get In Touch
        </h1>
        <div className="w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'ld love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">

            {/* Contact Details */}
            <div className="flex justify-center gap-4">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color)
                const content = (
                  <div className={`group bg-white dark:bg-neutral-900 rounded-lg p-4 border ${colors.border} ${colors.hover} transition-all duration-200 hover:shadow-md`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors.bg} ${colors.text}`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact