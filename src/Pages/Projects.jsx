import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Github, 
  Code, 
  Database, 
  Satellite, 
  Globe, 
  Map, 
  BarChart3, 
  Smartphone, 
  Server,
  Cloud,
  Layers
} from 'lucide-react'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software')

  const categories = [
    { id: 'software', label: 'Software Development', icon: <Code className="w-4 h-4" /> },
    { id: 'data', label: 'Data Science', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'gis', label: 'GIS & Remote Sensing', icon: <Satellite className="w-4 h-4" /> }
  ]

  const projects = {
    software: [
      {
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React, featuring dark mode, smooth scrolling, and modern UI components.",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
        icon: <Globe className="w-6 h-6" />,
        category: "Frontend",
        link: "#",
        github: "#"
      },
      {
        title: "Task Management API",
        description: "RESTful API for task management system with user authentication, role-based access, and real-time updates.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        icon: <Server className="w-6 h-6" />,
        category: "Backend",
        link: "#",
        github: "#"
      },
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce application with payment integration, inventory management, and admin dashboard.",
        technologies: ["Next.js", "PostgreSQL", "Stripe", "Prisma"],
        icon: <Smartphone className="w-6 h-6" />,
        category: "Full Stack",
        link: "#",
        github: "#"
      }
    ],
    data: [
      {
        title: "Sales Analytics Dashboard",
        description: "Interactive dashboard for sales performance analysis with real-time data visualization and predictive analytics.",
        technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
        icon: <BarChart3 className="w-6 h-6" />,
        category: "Analytics",
        link: "#",
        github: "#"
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Machine learning model for customer segmentation using clustering algorithms to improve marketing strategies.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        icon: <Database className="w-6 h-6" />,
        category: "ML/AI",
        link: "#",
        github: "#"
      },
      {
        title: "Weather Data Processing",
        description: "Pipeline for processing and analyzing weather data with automated reporting and trend visualization.",
        technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
        icon: <Cloud className="w-6 h-6" />,
        category: "Data Engineering",
        link: "#",
        github: "#"
      }
    ],
    gis: [
      {
        title: "Urban Growth Analysis",
        description: "Spatial analysis of urban expansion using satellite imagery and change detection techniques over a 10-year period.",
        technologies: ["ArcGIS", "Python", "GDAL", "PostGIS"],
        icon: <Map className="w-6 h-6" />,
        category: "Spatial Analysis",
        link: "#",
        github: "#"
      },
      {
        title: "Deforestation Monitoring",
        description: "Remote sensing project monitoring forest cover changes using NDVI analysis and Landsat satellite data.",
        technologies: ["QGIS", "Google Earth Engine", "R", "ERDAS"],
        icon: <Satellite className="w-6 h-6" />,
        category: "Remote Sensing",
        link: "#",
        github: "#"
      },
      {
        title: "Flood Risk Assessment",
        description: "Comprehensive flood risk mapping using DEM data, hydrological modeling, and vulnerability analysis.",
        technologies: ["ArcGIS Pro", "HEC-RAS", "Python", "PostGIS"],
        icon: <Layers className="w-6 h-6" />,
        category: "Risk Assessment",
        link: "#",
        github: "#"
      }
    ]
  }

  const getColorClasses = (categoryId) => {
    const colorMap = {
      software: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        active: "bg-blue-500 hover:bg-blue-600 text-white"
      },
      data: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        active: "bg-blue-500 hover:bg-blue-600 text-white"
      },
      gis: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        active: "bg-blue-500 hover:bg-blue-600 text-white"
      },
    }
    return colorMap[categoryId] || colorMap.software
  }

  return (
    <section id='projects' className='min-h-screen bg-gray-100 dark:bg-neutral-800 w-full mt-8 px-6 md:px-8 py-8'>
      {/* Header Section */}
      <div className='text-center mb-14'>
        <h1 className='text-5xl md:text-4xl font-bold text-black dark:text-white mb-4'>
          My Projects
        </h1>
        <div className='w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full mb-4'></div>
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          A showcase of projects I've worked on across software development, data science, and geospatial technologies
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className='max-w-4xl mx-auto mb-12'>
        <div className='flex flex-wrap gap-4 justify-center'>
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            const colors = getColorClasses(category.id)
            
            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2
                  ${isActive 
                    ? colors.active + ' shadow-lg transform scale-105' 
                    : 'bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800'
                  }
                `}
              >
                {category.icon}
                {category.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects[activeCategory].map((project, index) => {
            const colors = getColorClasses(activeCategory)
            
            return (
              <div
                key={index}
                className='group bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                {/* Project Header */}
                <div className='flex items-start justify-between mb-4'>
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.text}`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}>
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
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

                  {/* Action Buttons */}
                  <div className='flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
            
    </section>
  )
}

export default Projects
