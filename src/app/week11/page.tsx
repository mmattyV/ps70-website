'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Week11() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 11
            </span>
            <span className="text-sm text-white/60">
              December 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Sentry: Project Integration
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Assembling, wiring, and integrating the autonomous person-tracking laser turret with YOLOv8 computer vision
          </p>
        </div>

        {/* Demo Video */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-red-500/20 to-orange-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Demo Video</h2>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/tmFhfnLnxg4"
                  title="AI Sentry Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-center text-white/60 mt-4 italic">
              AI Sentry autonomously detecting and tracking a person with the laser pointer
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Overview</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This week I completed the integration of the AI Sentry - an autonomous person-tracking laser turret. 
              The system uses a XIAO ESP32S3 Sense with an OV2640 camera that streams video to a MacBook running 
              YOLOv8 for real-time person detection. The laptop calculates aiming adjustments and sends servo 
              control commands back to the ESP32 to track detected targets with a laser pointer.
            </p>

            {/* System Architecture */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-6 font-mono text-sm overflow-x-auto">
              <pre className="text-white/80">
{`┌─────────────────────┐        USB Serial         ┌─────────────────────┐
│   XIAO ESP32S3      │◄─────────────────────────►│      MacBook        │
│   Sense             │                           │                     │
│                     │   Request + Commands ───► │  - YOLOv8 (MPS/GPU) │
│   - OV2640 Camera   │                           │  - PD Control       │
│   - Pan/Tilt Servos │   ◄─── JPEG Frame         │  - Target Cycling   │
│   - Laser Module    │                           │  - Live Viz Window  │
└─────────────────────┘                           └─────────────────────┘`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Real-time person detection with YOLOv8</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Low-latency request-response frame protocol</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>PD control to prevent servo overshoot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Multi-target cycling (tracks multiple people)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Apple Silicon GPU acceleration (MPS)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Hardware Components
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>XIAO ESP32S3 Sense with OV2640 camera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>2x Miuzei MG996R all-metal servos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>5V laser pointer module</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>3D printed pan-tilt platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Custom protoboard wiring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Pivot */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Architecture Pivot: Edge to Laptop Inference</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Original Approach: Native ESP32 Object Recognition
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                My original plan (documented in <Link href="/week1" className="text-orange-300 hover:text-orange-200 underline">Week 1</Link>) 
                was to run object detection directly on the ESP32 using{' '}
                <a href="https://edgeimpulse.com/" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:text-orange-200 underline">
                  Edge Impulse
                </a>{' '}
                for on-device inference. This would have made the system fully self-contained.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Performance Issues</h5>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• ~1 second per frame processing time</li>
                    <li>• Only ~45% detection accuracy</li>
                    <li>• Unusable for real-time tracking</li>
                    <li>• Targets moved faster than detection</li>
                  </ul>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Hardware Limitations</h5>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• ESP32 limited compute power</li>
                    <li>• Memory constraints for ML models</li>
                    <li>• No GPU acceleration available</li>
                    <li>• Model quantization hurt accuracy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                New Approach: Laptop-Based YOLOv8 Inference
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                I pivoted to streaming video from the ESP32 to my MacBook via USB serial, running YOLOv8 inference 
                on the laptop with Apple Silicon GPU (MPS) acceleration, then sending control commands back.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Performance Gains</h5>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• 15+ FPS processing speed</li>
                    <li>• Much higher detection accuracy</li>
                    <li>• Real-time tracking capability</li>
                    <li>• Smooth servo movement</li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Additional Benefits</h5>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Full YOLOv8 model (no quantization)</li>
                    <li>• MPS GPU acceleration on M-series</li>
                    <li>• Live visualization window</li>
                    <li>• Easy debugging and tuning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model Viewer */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">3D Model</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <div className="mb-6">
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
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Complete AI Turret Platform
              </h4>
              <p className="text-white/80 leading-relaxed text-lg">
                The fully integrated turret design featuring the pan-tilt mechanism, camera mount, and laser holder. 
                Explore the 3D model to see how all components fit together.
              </p>
            </div>
          </div>
        </div>

        {/* Assembly Process */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Assembly Process</h2>
            </div>
          </div>

          {/* Finished Turret Photos */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week11/turret_front.jpg" 
                  alt="AI Sentry Turret - Front View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Assembled Turret - Front View
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The completed AI Sentry turret featuring the XIAO ESP32S3 Sense with camera mounted on the 
                  blue 3D-printed head, the laser pointer module, and pan-tilt servo mechanism on the rotating platform.
                </p>
              </div>
            </div>

            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week11/turret_side.jpg" 
                  alt="AI Sentry Turret - Side View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                  Assembled Turret - Side View
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Side perspective showing the tilt servo mechanism that controls vertical aiming, 
                  the wiring running through the structure, and the stable base with blue 3D-printed feet.
                </p>
              </div>
            </div>
          </div>

          {/* Protoboard Migration */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Breadboard to Protoboard Migration</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              A critical part of this week was migrating from the temporary breadboard setup to a permanent 
              soldered protoboard. This ensures reliable connections during operation and makes the system 
              more robust and compact.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week11/migrating_to_protoboard.jpg" 
                    alt="Original breadboard setup" 
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Original breadboard prototype</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week11/soldering_2.jpg" 
                    alt="Soldering the protoboard" 
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Soldering wires to protoboard</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week11/turret_circuit.jpg" 
                    alt="Completed protoboard mounted" 
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Protoboard mounted on turret</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Wiring Connections</h4>
              <div className="font-mono text-sm bg-gray-800/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-white/80">
{`XIAO ESP32S3 Sense
        │
        ├── D0 (GPIO1) ──► Pan Servo Signal (orange/yellow)
        ├── D1 (GPIO2) ──► Tilt Servo Signal (orange/yellow)
        ├── D2 (GPIO3) ──► Laser Signal
        ├── 5V ──────────► Servo VCC (red) + Laser VCC
        └── GND ─────────► Servo GND (brown) + Laser GND`}
                </pre>
              </div>
            </div>
          </div>

          {/* Soldering Process */}
          <div className="text-section rounded-2xl p-6">
            <div className="mb-6 flex justify-center">
              <div className="max-w-2xl w-full">
                <Image 
                  src="/ps70-website/week11/soldering_1.jpg" 
                  alt="Soldering station work" 
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-3 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-white flex items-center justify-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                Soldering Station Work
              </h4>
              <p className="text-white/80 leading-relaxed text-center">
                Working at the soldering station to create permanent connections. The protoboard is mounted 
                behind the turret head and secured with zip ties for a clean installation.
              </p>
            </div>
          </div>
        </div>

        {/* Download Files */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Download 3D Model Files</h4>
            </div>
            <p className="text-white/70 text-lg mb-6">
              Download the complete turret platform design files for 3D printing or modification.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <a 
                href="/ps70-website/week11/AI Turret Platform.f3d" 
                download="AI_Turret_Platform.f3d"
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Fusion 360</div>
                    <div className="text-white/60 text-sm">.f3d file</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <a 
                href="/ps70-website/week11/AI Turret Platform.stl" 
                download="AI_Turret_Platform.stl"
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">STL Model</div>
                    <div className="text-white/60 text-sm">.stl file</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Code Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Software Architecture</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The software is split between the ESP32 firmware (C++/Arduino) and the Python controller running on the laptop.
              Full code and documentation is available on{' '}
              <a 
                href="https://github.com/mmattyV/ai-sentry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline"
              >
                GitHub
              </a>.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">ESP32 Firmware</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Camera frame capture on-demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>JPEG compression and serial streaming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Servo PWM control (pan/tilt)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Laser on/off control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Command parsing from serial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Python Controller</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>YOLOv8 person detection (MPS/GPU)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>PD control algorithm for smooth tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Multi-target cycling logic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Serial communication protocol</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Live visualization with OpenCV</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-blue-300">Note:</strong> Full code, wiring diagrams, and detailed documentation 
                will be available on the <Link href="/week15" className="text-blue-300 hover:text-blue-200 underline">Final Project</Link> page.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Next Steps</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            The core system is now functional. For the final project, I plan to:
          </p>
          <ul className="space-y-3 text-white/80 text-lg">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
              <span>Fine-tune PD control parameters for smoother, faster tracking</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></span>
              <span>Add safety features (emergency stop, laser timeout)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>
              <span>Improve target locking logic and lock-on threshold tuning</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></span>
              <span>Create polished demo video and comprehensive documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

