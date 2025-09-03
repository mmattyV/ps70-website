export default function Week1() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 1
            </span>
            <span className="text-sm text-white/60">
              January 2024
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Website & Final Project Proposal
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Setting up my documentation website and proposing ideas for the semester final project.
          </p>
        </div>

        {/* Website Documentation */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Website Development</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Technology Stack</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Frontend
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Next.js 15 (React framework)</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Responsive design principles</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Apple liquid glass aesthetic</li>
                  <li>• Glassmorphism effects</li>
                  <li>• Mobile-responsive layout</li>
                  <li>• Fast page navigation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Design Philosophy</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              The website embraces Apple&apos;s liquid glass aesthetic with glassmorphism effects, creating a modern and immersive experience. 
              The design emphasizes visual hierarchy through blur effects, transparency, and gradient overlays while maintaining 
              excellent readability and user experience across all devices.
            </p>
          </div>
        </div>

        {/* Final Project Proposal */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Final Project Proposal</h2>
            </div>
          </div>
          
          {/* Project Overview */}
          <div className="text-section rounded-2xl p-10 mb-8 bg-gradient-to-br from-blue-500/20 to-green-500/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">Smart Plant Monitoring System</h3>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                An intelligent plant care system that monitors environmental conditions and provides automated 
                care for indoor plants, combining IoT sensors, data visualization, and automated watering mechanisms.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Soil moisture monitoring</li>
                  <li>• Light level detection</li>
                  <li>• Temperature & humidity tracking</li>
                  <li>• Automated watering system</li>
                  <li>• Mobile app interface</li>
                  <li>• Data logging & analytics</li>
                </ul>
              </div>
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                  Target Users
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Busy plant enthusiasts</li>
                  <li>• Frequent travelers</li>
                  <li>• Beginner gardeners</li>
                  <li>• Office environments</li>
                  <li>• Educational settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">3D Design & Fabrication</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Custom sensor housing
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  Water reservoir design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Mounting brackets
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  Protective enclosures
                </li>
              </ul>
            </div>
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Electronics</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  ESP32 microcontroller
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Soil moisture sensors
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Light sensors (LDR)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  DHT22 temp/humidity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Water pump & relay
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  LCD display
                </li>
              </ul>
            </div>
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Programming</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  Sensor data collection
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  WiFi connectivity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  Web dashboard
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Mobile app (React Native)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  Database integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Alert notifications
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline & Milestones */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Development Timeline</h4>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full">Weeks 2-4</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Design and 3D print sensor housings and mounting system</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full">Weeks 5-7</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Build and test sensor circuits, implement basic data collection</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full">Weeks 8-10</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Develop web interface and mobile app, integrate automated watering</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">Weeks 11-12</span>
                </div>
                <div className="flex-1">
                  <span className="text-white/90 text-lg">Final assembly, testing, documentation, and presentation preparation</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Success Metrics</h4>
            </div>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              The project will be considered successful if it can:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Accurately monitor soil moisture, light, and environmental conditions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Automatically water plants when soil moisture drops below threshold</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Provide real-time data through a user-friendly web interface</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Send notifications when manual intervention is needed</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Operate reliably for extended periods without maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Demonstrate measurable improvement in plant health</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Reflection</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed">
            This project excites me because it combines multiple aspects of digital fabrication while solving 
            a real-world problem. It will challenge me to integrate 3D design, electronics, programming, and 
            user interface design. The iterative nature of the project aligns well with the course structure, 
            allowing me to build complexity week by week while applying newly learned skills.
          </p>
        </div>
      </div>
    </div>
  );
}
