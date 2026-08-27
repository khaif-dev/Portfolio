import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import hikingSpots from '@/assets/hikingspots.png'
import walkability from '@/assets/accessibility.png'
import nairobiLC from '@/assets/NairobiLC.png'

const Projects = () => {
  const projects = [
    {
      title: "Webscrapping and Geocoding",
      description: "A jupyter notebook that scraps data from a web page and geocodes the data using OSM data.",
      technologies: ["Python", "OSMNX", "Excel"],
      image: hikingSpots,
      github: "https://github.com/khaif-dev/Python-Spatial-Analysis/tree/main/Hiking%20Spot"
    },
    {
      title: "Urban accessibility analysis",
      description: "Comparative network-distance connectivity mapping across Mombasa, Kisumu and Nakuru using road-network graphs to assess urban accessibility and walkability.",
      technologies: ["Python", "OSMNX", "City2Graph"],
      image: walkability,
      github: "https://github.com/khaif-dev/Python-Spatial-Analysis/tree/main/walkability"
    },
    {
      title: "Nairobi Land Cover Assessment",
      description: "Interactive Land cover app fearuring NDVI, NDBI, MNDWI and BSI in Nairobi County, supporting sustainable urban planning and land management decisions.",
      technologies: ["GEE", "Earth Observation", "Land Cover"],
      image: nairobiLC,
      link: "https://immakhaoma.projects.earthengine.app/view/nairobi-land-cover-assessment"
    }
    
  ]

  return (
    <section id='projects' className='min-h-screen bg-gray-100 dark:bg-neutral-800 w-full mt-8 px-6 md:px-8 py-8'>
      <div className='text-center mb-14'>
        <h1 className='text-5xl md:text-4xl font-bold text-black dark:text-white mb-4'>
          My Projects
        </h1>
        <div className='w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full mb-4'></div>
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          A showcase of projects I've worked on across, data, GIS and remote sensing.
        </p>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col'
            >
              {project.image && project.image !== "/path-to-image.jpg" && (
                <div className='w-full h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              )}
              <div className='p-6 flex flex-col flex-1 space-y-4'>
                <div>
                  <h3 className='text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3 pt-2'>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 text-sm font-medium transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                      View App
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 text-sm font-medium transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                      View on Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
