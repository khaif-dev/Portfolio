import React from 'react'
import profile from '@/assets/profile.jpg'
import TextType from '@/components/ui/TextType'
import { Button } from '@/components/ui/button'
import { Mail, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id='home' className="min-h-screen w-full pt-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center space-y-8 mb-16">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full transform -rotate-6"></div>
            <img
              src={profile}
              alt="Immaculate Khaoma"
              className="relative rounded-full h-40 w-40 md:h-48 md:w-48 object-cover shadow-2xl mx-auto border-4 border-white dark:border-gray-800"
            />
          </div>
          
          {/* Greeting & Name */}
          <div className="space-y-2">
            <p className="text-2xl md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
              Immaculate Khaoma
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="h-20 flex items-center justify-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-blue-600">
              <TextType
                text={["Spatial Data Scientist", "MERN Stack Developer", "Cartographer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button className="bg-black text-white dark:bg-white/90 dark:text-black p-6 text-lg shadow-lg hover:bg-white/60 transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-2 border-gray-300 dark:border-white hover:border-gray-400 dark:hover:border-gray-500 p-6 text-lg transition-all duration-300">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </Link>
            
          </div>
        </div>
      </div>    

     
    </section>
  )
}

export default Home
