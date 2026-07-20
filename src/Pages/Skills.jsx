import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "ToolBox",
      skills: [
        "KoBoToolbox",
        "PostgreSQL",
        "Excel",
        "R",
        "Python",
        "PowerBI",
        "Looker Studio",
        "ArcGIS",
        "QGIS",
        "Google Earth Engine",
        "HTML5",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
      ]
    }
  ]

  return (
    <section id='skills' className='min-h-screen bg-white/90 text-slate-950 dark:bg-neutral-900 dark:text-white px-6 md:px-8 py-8'>
      <div className='text-center mb-14'>
        <h1 className='text-5xl md:text-4xl font-bold text-black dark:text-white mb-4'>
          Skills & Expertise
        </h1>
        <div className='w-24 h-1 bg-blue-500 to-purple-600 mx-auto rounded-full mb-4'></div>
        <p className='text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          Technical Tools I work with across GIS analysis, data analysis, and M&E
        </p>
      </div>

      <div className='max-w-7xl mx-auto space-y-12'>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className='space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl md:text-3xl font-bold text-black dark:text-white'>
                {category.title}
              </h2>
            </div>

            <div className='grid grid-cols-5 gap-3'>
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className='w-fit justify-self-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200 whitespace-nowrap'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
