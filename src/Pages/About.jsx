import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import profile from '@/assets/profile.jpg'

const About = () => {
  return (
    <section id='about' className='min-h-screen bg-gray-100 dark:bg-neutral-800 w-full mt-14 px-6 md:px-8 py-8'>
      {/* Header Section */}
      <div className='text-center mb-14'>
        <h1 className='text-5xl md:text-4xl font-bold text-black dark:text-white mb-4'>
          About Me
        </h1>
        <div className='w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full'></div>
      </div>

      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        {/* Image Section */}
        <div className='order-2 lg:order-1'>
          <div className='relative'>
            <div className='rounded-2xl transform rotate-3'></div>
            <img
              src={profile}
              alt="Immaculate Khaoma"
              className='relative rounded-2xl w-full object-cover shadow-2xl'
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='order-1 lg:order-2 space-y-6'>
         
          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            Immaculate Khaoma is a passionate Spatial Data Engineer who bridges the gap between
            <span className="font-semibold text-black dark:text-white"> remote sensing</span>,
            <span className="font-semibold text-black dark:text-white"> GIS</span>, and
            <span className="font-semibold text-black dark:text-white"> software development</span> to transform
            geospatial data into actionable insights.
          </p>

          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            She specializes in building comprehensive analytical systems that handle everything from
            data collection and processing to modeling, visualization, and deployment. Her mission is
            to help organizations make smarter, evidence-based decisions using geospatial intelligence.
          </p>

          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            She specializes in building comprehensive analytical systems that handle everything from
            data collection and processing to modeling, visualization, and deployment. Her mission is
            to help organizations make smarter, evidence-based decisions using geospatial intelligence.
          </p>

          <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
            Outside her professional work, she enjoys hiking, visual and perfoming arts, and cycling.
          </p>

          
          {/* Action Buttons */}
          <div className='flex flex-wrap gap-4 pt-4'>
             <Button variant="outline" className='border-gray-300 hover:border-gray-400 px-6 py-2'>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
