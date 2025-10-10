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
              September 2025
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
          <div className="text-section rounded-2xl p-10 mb-8 bg-gradient-to-br from-red-500/20 to-orange-500/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">AI-Controlled Turret System</h3>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                An intelligent automated turret that uses computer vision and AI to detect, track, and engage moving targets 
                with a Nerf gun. Combining machine learning, servo control systems, and real-time image processing for precision targeting.
              </p>
              
              {/* 3D Model Viewer */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-gray-900/50">
                  <iframe 
                    src="https://college964.autodesk360.com/shares/public/SH28cd1QT2badd0ea72ba70184182d9b2286?mode=embed" 
                    width="100%" 
                    height="480" 
                    allowFullScreen 
                    className="w-full"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
                <p className="text-center text-white/60 mt-4">
                  Interactive 3D model of the turret pan-tilt base (Week 5 progress)
                </p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-blue-300">Current Status:</strong> The model shows the completed pan-tilt base with integrated 
                  lazy susan mechanism. The finalized system will include the vertical tilt unit and trigger pull mechanism for 
                  full 2-axis targeting control.
                </p>
              </div>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-8">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/1G1Z4vjy9rg"
                    title="AI Turret System Example"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-center text-white/60 mt-4 italic">
                Inspiration: Advanced AI turret system demonstration
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Real-time object detection & tracking</li>
                  <li>• AI-powered target identification</li>
                  <li>• Precision servo-controlled aiming</li>
                  <li>• Automated Nerf dart firing system</li>
                  <li>• Safety protocols & emergency stop</li>
                  <li>• Live video feed & control interface</li>
                  <li>• Target hit accuracy analytics</li>
                </ul>
              </div>
              <div className="text-section rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                  Applications
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Educational robotics demonstrations</li>
                  <li>• Computer vision research</li>
                  <li>• Target practice training systems</li>
                  <li>• Automated gaming platforms</li>
                  <li>• Security system prototypes</li>
                  <li>• STEM outreach programs</li>
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
                  Turret base & rotating platform
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  Nerf dart magazine & feed system
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Camera mounting gimbal
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>
                  Barrel & firing mechanism
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                  Safety shields & enclosures
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
                  ESP32 (main controller)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  High-resolution camera module
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Pan/tilt servo motors (2x)
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  Firing mechanism servo
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  Emergency stop button
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                  LED status indicators
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
                <h4 className="text-lg font-semibold text-white">AI & Programming</h4>
              </div>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  <a href="https://edgeimpulse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                    Edge Impulse
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  YOLO real-time tracking
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  PID control algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Web control interface
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                  Safety monitoring system
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                  Target analytics & logging
                </li>
              </ul>
            </div>
          </div>

          {/* Bill of Materials */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Bill of Materials</h4>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* 3D Printing Materials */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  3D Printing
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>PLA Filament (~500g)</span>
                    <span className="text-green-400 font-semibold">$12</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Support Material (~100g)</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                </ul>
              </div>

              {/* Electronics - Core */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Core Electronics
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>ESP32 Microcontroller (1x)</span>
                    <span className="text-green-400 font-semibold">$8</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>ESP32-CAM Module (1x)</span>
                    <span className="text-green-400 font-semibold">$12</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>USB Cable (1x)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Battery Pack (1x)</span>
                    <span className="text-green-400 font-semibold">$15</span>
                  </li>
                </ul>
              </div>

              {/* Servos */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Servo Motors
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Miuzei MG996R - Pan (1x)</span>
                    <span className="text-green-400 font-semibold">$10</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Miuzei MG996R - Tilt (1x)</span>
                    <span className="text-green-400 font-semibold">$10</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Miuzei MG996R - Trigger (1x)</span>
                    <span className="text-green-400 font-semibold">$10</span>
                  </li>
                  <li className="text-xs text-white/50 mt-2 pt-2 border-t border-white/10">
                    11kg·cm torque, 4.8-6.6V
                  </li>
                </ul>
              </div>

              {/* Wiring & Connectors */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Wiring & Cables
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Jumper Wires M-M (20x)</span>
                    <span className="text-green-400 font-semibold">$6</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Jumper Wires M-F (10x)</span>
                    <span className="text-green-400 font-semibold">$4</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Steel Wire - 1m</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Power Cable 5V (1x)</span>
                    <span className="text-green-400 font-semibold">$4</span>
                  </li>
                </ul>
              </div>

              {/* Hardware */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Hardware
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>M3 Screws & Nuts (20x)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>M4 Screws & Nuts (10x)</span>
                    <span className="text-green-400 font-semibold">$4</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Washers - assorted (30x)</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Small Springs (2-3x)</span>
                    <span className="text-green-400 font-semibold">$2</span>
                  </li>
                </ul>
              </div>

              {/* Weapon System */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Weapon System
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Small Nerf Gun (1x)</span>
                    <span className="text-green-400 font-semibold">$15</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Nerf Darts (50+)</span>
                    <span className="text-green-400 font-semibold">$8</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Trigger Mechanism Parts</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                </ul>
              </div>

              {/* Additional Components */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Additional
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Emergency Stop Button (1x)</span>
                    <span className="text-green-400 font-semibold">$6</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>LED Indicators (3-5x)</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Breadboard (1x)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Resistors (10x)</span>
                    <span className="text-green-400 font-semibold">$2</span>
                  </li>
                </ul>
              </div>

              {/* Optional/Future */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Optional/CNC
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Acrylic Sheet (1x)</span>
                    <span className="text-green-400 font-semibold">$12</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Aluminum Sheet (1x)</span>
                    <span className="text-green-400 font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Bearings (2-3x)</span>
                    <span className="text-green-400 font-semibold">$8</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center justify-between">
                  <h5 className="text-2xl font-bold text-white">Estimated Total Cost</h5>
                  <span className="text-4xl font-bold text-green-400">$217</span>
                </div>
                <p className="text-white/70 text-sm mt-2">
                  Based on estimated component costs. Actual pricing may vary by supplier and quantity.
                </p>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-blue-300">Note:</strong> Quantities are estimates and may vary based on design iterations. 
                  Additional fasteners, adhesives, and consumables may be needed during assembly and testing phases.
                </p>
              </div>
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
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-full">October</span>
                </div>
                <div className="flex-1">
                  <div className="text-white/90 text-lg font-semibold mb-2">Complete CAD Modeling Phase</div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Finish modeling pan-tilt base (completed in Week 5)</li>
                    <li>• Design vertical tilt mechanism and mounting</li>
                    <li>• Model trigger pull system and servo integration</li>
                    <li>• Create Nerf gun mounting bracket</li>
                    <li>• Finalize all component dimensions and tolerances</li>
                  </ul>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full">November</span>
                </div>
                <div className="flex-1">
                  <div className="text-white/90 text-lg font-semibold mb-2">Fabrication & Assembly</div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• 3D print all turret components with proper tolerances</li>
                    <li>• Use CNC milling for flat structural components if needed</li>
                    <li>• Iterate on prints based on fit and clearance testing</li>
                    <li>• Assemble mechanical systems with servos and hardware</li>
                    <li>• Test pan and tilt motion range and smoothness</li>
                    <li>• Integrate Nerf gun and trigger mechanism</li>
                    <li>• Complete physical assembly and initial testing</li>
                  </ul>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full">Late Nov</span>
                </div>
                <div className="flex-1">
                  <div className="text-white/90 text-lg font-semibold mb-2">Programming & AI Training</div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Program ESP32 for servo control and camera interface</li>
                    <li>• Train object recognition model on <a href="https://edgeimpulse.com/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline transition-colors">Edge Impulse</a></li>
                    <li>• Implement real-time target detection algorithm</li>
                    <li>• Develop tracking and aiming calculations</li>
                    <li>• Create safety protocols and emergency stop system</li>
                    <li>• Build basic control interface for testing</li>
                  </ul>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 text-section rounded-xl">
                <div className="flex-shrink-0">
                  <span className="text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">December</span>
                </div>
                <div className="flex-1">
                  <div className="text-white/90 text-lg font-semibold mb-2">Integration & Final Testing</div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Integrate AI system with mechanical platform</li>
                    <li>• Calibrate targeting accuracy and aim compensation</li>
                    <li>• Test full auto-targeting cycle repeatedly</li>
                    <li>• Refine detection confidence thresholds</li>
                    <li>• Conduct safety testing and failure mode analysis</li>
                    <li>• Final system optimization and demonstration prep</li>
                  </ul>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-purple-300">Manufacturing Note:</strong> Primary fabrication method will be 3D printing 
                due to design flexibility and rapid iteration capability. CNC milling may be used for select flat components 
                requiring extra rigidity or precision.
              </p>
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
                  <span className="text-white/90">Detect and track moving targets in real-time with &gt;90% accuracy</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Automatically aim and fire Nerf darts at detected targets</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Achieve target hit rate of &gt;70% within 10-foot range</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Respond to moving targets within 2-second detection window</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Implement robust safety protocols and emergency stop functionality</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Provide live video feed and remote control through web interface</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Log targeting data and analytics for performance analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-white/90">Operate continuously for 30+ minutes without mechanical failure</span>
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
            This project excites me because it pushes the boundaries of what&apos;s possible with digital fabrication, 
            combining cutting-edge AI technology with precision mechanical engineering. It will challenge me to integrate 
            3D design, advanced electronics, computer vision, and real-time control systems. The project&apos;s emphasis on 
            safety protocols and precision targeting will teach valuable lessons about responsible engineering and the 
            ethical considerations of autonomous systems.
          </p>
        </div>
      </div>
    </div>
  );
}
