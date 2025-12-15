'use client';

export default function Week9() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 9
            </span>
            <span className="text-sm text-white/60">
              November 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Radio, WiFi, Bluetooth (IoT)
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Group project: Integrating multiple IoT systems using ESP-NOW and wireless communication
          </p>
        </div>

        {/* Group Project Notice */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">Collaborative Project</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  This week&apos;s assignment was completed as a group project with my teammates 
                  <strong className="text-white"> Shyla Nguyen</strong> and <strong className="text-white">Victor Lee</strong>. 
                  We collaborated to integrate multiple IoT systems, combining Victor&apos;s camera project, my turret system, 
                  and Shyla&apos;s moving table platform using ESP-NOW wireless communication.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">Gyroscope Control:</strong> Used MPU-6050 gyroscope to control turret head movement in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">ESP-NOW Communication:</strong> Implemented wireless communication between multiple ESP32 boards</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">ESP32-CAM Integration:</strong> Added live video streaming via web server for first-person perspective</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">System Integration:</strong> Combined three separate projects into a cohesive IoT system</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Full Documentation
              </h3>
              <p className="text-white/80 mb-4">
                Complete project documentation, including detailed implementation, code, schematics, and photos 
                can be found on Shyla&apos;s project website:
              </p>
              <a 
                href="https://shylangit.github.io/PS70/09_networking/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>View Full Project Documentation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Key Contributions */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">My Contributions</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              For this collaborative project, I contributed the turret system that I had developed in previous weeks. 
              The turret served as the receiver in our IoT communication setup, responding to gyroscope inputs and 
              hosting the ESP32-CAM for live video feedback.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Hardware Integration
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Turret platform with servo control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>ESP32 receiver board setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>Camera mounting and positioning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Software Development
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>ESP-NOW receiver code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Servo control algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>System integration and testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reflections */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Reflections</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This collaborative project was an excellent opportunity to integrate multiple systems and explore 
              wireless communication protocols. Working with ESP-NOW provided reliable, low-latency communication 
              between our devices, which was crucial for responsive turret control.
            </p>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Key Learnings</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">ESP-NOW Protocol:</strong> Learned to implement peer-to-peer communication between ESP32 devices for real-time control</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">System Integration:</strong> Successfully combined three separate projects into a unified IoT system</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">Wireless Communication:</strong> Gained experience with WiFi-based video streaming alongside radio communication</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-blue-300">Team Collaboration:</strong> Worked effectively with teammates to integrate hardware and software components</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



