import React from 'react'

const Edits = () => {
  return (
    <div>
        
        {/* Quick Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">5+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">20+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">10+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>

       {/* What I Do Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">What I Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Spatial Data Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing and implementing scalable geospatial data pipelines for agriculture,
                climate resilience, and environmental monitoring.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building modern web applications using MERN stack with focus on
                user experience and performance optimization.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">Data Visualization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating interactive dashboards and visualizations that make complex
                geospatial data accessible and actionable.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Edits
