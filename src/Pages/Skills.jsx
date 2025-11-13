import React from 'react'
import { SiArcgis, SiGoogleearthengine, SiQgis} from "react-icons/si";
import { SiHtml5, SiTailwindcss, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";
import { SiNodedotjs,  SiExpress, SiMongodb, SiGithub } from "react-icons/si";
import { SiPostgresql, SiPython,  SiCheckmarx, SiRstudioide, SiLooker  } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { PiChartBarBold } from "react-icons/pi";
import { Code, Database, Satellite, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Software Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="w-5 h-5" /> },
        { name: "CSS3", icon: <SiCss3 className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
        { name: "React.js", icon: <SiReact className="w-5 h-5" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5" /> },      
        
      ]
    },
    {
      title: "Data",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "KoBoToolbox", icon: <SiCheckmarx  className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
        { name: "Excel", icon: <RiFileExcel2Fill className="w-5 h-5" /> },
        { name: "R", icon: <SiRstudioide className="w-5 h-5" /> },
        { name: "Python", icon: <SiPython className="w-5 h-5" /> },
        { name: "PowerBI", icon: <PiChartBarBold className="w-5 h-5" /> },
        { name: "Looker Studio", icon: <SiLooker className="w-5 h-5" /> }
      ]
    },
    {
      title: "GIS & Remote Sensing",
      icon: <Satellite className="w-8 h-8" />,
      skills: [
        { name: "ArcGIS", icon: <SiArcgis className="w-5 h-5" /> },
        { name: "QGIS", icon: <SiQgis className="w-5 h-5" /> },
        { name: "Google Earth Engine", icon: <SiGoogleearthengine className="w-5 h-5" /> }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        hover: "hover:bg-blue-50 dark:hover:bg-blue-900/50"
      }
     }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id='skills' className='min-h-screen bg-white/90 text-slate-950 dark:bg-neutral-900 dark:text-white px-6 md:px-8 py-8'>
      {/* Header Section */}
      <div className='text-center mb-14'>
        <h1 className='text-5xl md:text-4xl font-bold text-black dark:text-white mb-4'>
          Skills & Expertise
        </h1>
        <div className='w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full mb-4'></div>
        <p className='text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          Technical skills and tools I work with across software development, data analysis, and geospatial technologies
        </p>
      </div>

      {/* Skills Categories */}
      <div className='max-w-7xl mx-auto space-y-12'>
        {skillCategories.map((category, categoryIndex) => {
          const colors = getColorClasses(category.color)
          
          return (
            <div key={categoryIndex} className='space-y-6'>
              {/* Category Header */}
              <div className='text-center'>
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl ${colors.bg} border ${colors.border} mb-4`}>
                  <div className={colors.text}>
                    {category.icon}
                  </div>
                  <h2 className='text-2xl md:text-3xl font-bold text-black dark:text-white'>
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
                {category.skills.map((skill, skillIndex) => {
                  const skillColors = getColorClasses(category.color)
                  
                  return (
                    <div
                      key={skillIndex}
                      className={`
                        group bg-white dark:bg-neutral-900 rounded-lg p-4 shadow-sm border ${skillColors.border}
                        ${skillColors.hover} transition-all duration-200 hover:shadow-md hover:scale-105
                        text-center cursor-pointer
                      `}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${skillColors.bg} ${skillColors.text} mb-3 group-hover:scale-110 transition-transform duration-200`}>
                        {skill.icon}
                      </div>
                      <h3 className='text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight'>
                        {skill.name}
                      </h3>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div> 

    </section>
  )
}

export default Skills
