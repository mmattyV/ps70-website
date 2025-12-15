'use client';

import Image from 'next/image';

export default function Week15() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-full">
              Final Project
            </span>
            <span className="text-sm text-white/60">
              December 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Sentry: Autonomous Person-Tracking Laser Turret
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            An intelligent automated turret using YOLOv8 computer vision and a XIAO ESP32S3 Sense 
            to detect, track, and point a laser at moving targets in real-time.
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

        {/* Motivation */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Why This Project?</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This project excited me because it combines multiple disciplines I&apos;m passionate about: 
              computer vision, embedded systems, mechanical design, and real-time control systems. 
              The challenge of creating a system that can detect a person, calculate where to aim, 
              and smoothly track their movement pushed me to integrate everything I learned in PS70.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              Beyond the technical challenge, I was inspired by automated camera tracking systems used in 
              broadcasting and security. The laser pointer version serves as a safe, visible demonstration 
              of the core tracking algorithms that could be adapted for professional applications.
            </p>
          </div>
        </div>

        {/* System Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">System Architecture</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The AI Sentry uses a split architecture: the ESP32S3 handles camera capture and servo control, 
              while a MacBook runs the computationally intensive YOLOv8 person detection. Communication happens 
              via USB serial with a custom request-response protocol for minimal latency.
            </p>

            {/* Architecture Diagram */}
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

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Input</h4>
                <p className="text-white/70 text-sm">
                  OV2640 camera captures JPEG frames on-demand and streams via USB serial at 921600 baud
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Processing</h4>
                <p className="text-white/70 text-sm">
                  YOLOv8 runs on MacBook with Apple Silicon GPU (MPS) for real-time person detection at 15+ FPS
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Output</h4>
                <p className="text-white/70 text-sm">
                  PD controller calculates servo angles, ESP32 drives servos and laser via PWM and MOSFET
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model */}
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
            <p className="text-white/80 leading-relaxed text-center text-lg">
              Interactive 3D model of the complete AI Turret Platform. Rotate and zoom to explore the design.
            </p>
          </div>
        </div>

        {/* Hardware Images */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Hardware Build</h2>
            </div>
          </div>

          {/* Main turret photos */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week11/turret_front.jpg" 
                  alt="AI Sentry - Front View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Front View</h4>
              <p className="text-white/70">
                The XIAO ESP32S3 Sense with camera is mounted on the blue 3D-printed head. 
                The laser pointer sits just below the camera for parallel aim. The tilt servo 
                provides vertical movement while the pan servo rotates the entire platform.
              </p>
            </div>

            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week11/turret_side.jpg" 
                  alt="AI Sentry - Side View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Side View</h4>
              <p className="text-white/70">
                Side profile showing the mechanical structure: the tilt mechanism uses a servo 
                mounted to the U-frame, wiring runs cleanly through the structure, and the 
                base provides stable support with 3D-printed feet.
              </p>
            </div>
          </div>

          {/* Electronics photos */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="text-section rounded-2xl p-4">
              <div className="mb-4">
                <Image 
                  src="/ps70-website/week11/turret_circuit.jpg" 
                  alt="Protoboard wiring" 
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Protoboard Circuit</h4>
              <p className="text-white/60 text-sm">
                Soldered connections for servos, laser MOSFET, and power distribution
              </p>
            </div>

            <div className="text-section rounded-2xl p-4">
              <div className="mb-4">
                <Image 
                  src="/ps70-website/week11/soldering_1.jpg" 
                  alt="Soldering process" 
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Assembly Process</h4>
              <p className="text-white/60 text-sm">
                Working at the soldering station to create permanent connections
              </p>
            </div>

            <div className="text-section rounded-2xl p-4">
              <div className="mb-4">
                <Image 
                  src="/ps70-website/week11/soldering_2.jpg" 
                  alt="Protoboard soldering" 
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Protoboard Wiring</h4>
              <p className="text-white/60 text-sm">
                Soldering wires to the protoboard for permanent, reliable connections
              </p>
            </div>
          </div>

          {/* Breadboard migration */}
          <div className="text-section rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <Image 
                  src="/ps70-website/week11/migrating_to_protoboard.jpg" 
                  alt="Breadboard prototype" 
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-white mb-4">From Breadboard to Protoboard</h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  The initial prototype used a breadboard for rapid iteration. Once the circuit was finalized, 
                  I migrated to a soldered protoboard for reliability. Loose breadboard connections caused 
                  intermittent servo glitches that were eliminated with permanent solder joints.
                </p>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                  <p className="text-white/80 text-sm">
                    <strong className="text-green-300">Pro tip:</strong> Always prototype on breadboard first, 
                    then migrate to protoboard once you&apos;ve confirmed the circuit works correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bill of Materials */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Bill of Materials</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Electronics */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Electronics
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>XIAO ESP32S3 Sense + Camera</span>
                    <span className="text-green-400 font-semibold">$14</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Protoboard</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>IRLD024 N-Channel MOSFET</span>
                    <span className="text-green-400 font-semibold">$2</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Jumper Wires (assorted)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                </ul>
              </div>

              {/* Actuators */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Actuators
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Miuzei MG996R All-Metal Servo (2x)</span>
                    <span className="text-green-400 font-semibold">$20</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Pet Laser Pointer (5V)</span>
                    <span className="text-green-400 font-semibold">$8</span>
                  </li>
                  <li className="text-xs text-white/50 mt-2 pt-2 border-t border-white/10">
                    MG996R: 11kg·cm torque, 4.8-6.6V
                  </li>
                </ul>
              </div>

              {/* Power */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Power
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>5V DC Power Brick</span>
                    <span className="text-green-400 font-semibold">$10</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>USB-C Cable (data)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                </ul>
              </div>

              {/* 3D Printed */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  3D Printed Parts
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>Base platform</span>
                    <span className="text-white/50">PLA</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Pan turntable</span>
                    <span className="text-white/50">PLA</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>U-frame uprights</span>
                    <span className="text-white/50">PLA</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Camera/laser head</span>
                    <span className="text-white/50">PLA</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Feet (4x)</span>
                    <span className="text-white/50">PLA</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>PLA Filament (~200g)</span>
                    <span className="text-green-400 font-semibold">$5</span>
                  </li>
                </ul>
              </div>

              {/* Hardware */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Hardware
                </h5>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li className="flex justify-between items-center gap-2">
                    <span>M3 Screws & Nuts</span>
                    <span className="text-green-400 font-semibold">$4</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>M4 Screws & Nuts</span>
                    <span className="text-green-400 font-semibold">$3</span>
                  </li>
                  <li className="flex justify-between items-center gap-2">
                    <span>Zip Ties</span>
                    <span className="text-green-400 font-semibold">$2</span>
                  </li>
                </ul>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <h5 className="text-lg font-semibold text-white mb-4">Total Cost</h5>
                <div className="text-4xl font-bold text-green-400 mb-2">~$81</div>
                <p className="text-white/60 text-sm">
                  Excluding MacBook for inference
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wiring Diagram */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Wiring Diagram</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 font-mono text-sm overflow-x-auto mb-6">
              <pre className="text-white/80">
{`XIAO ESP32S3 Sense
        │
        ├── D0 (GPIO1) ──────────────────► Pan Servo Signal (orange)
        │
        ├── D1 (GPIO2) ──────────────────► Tilt Servo Signal (orange)
        │
        ├── D2 (GPIO3) ──► IRLD024 Gate ──► Laser Module (+)
        │                      │
        │                      └── Source ──► GND
        │                      └── Drain ──► Laser (-)
        │
        ├── 5V ──────────────────────────► Servo VCC (red) × 2
        │                                  Laser VCC (+)
        │
        └── GND ─────────────────────────► Servo GND (brown) × 2
                                           MOSFET Source
                                           Laser GND (-)`}
              </pre>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="text-xl mr-2">⚡</span>
                Why the MOSFET?
              </h4>
              <p className="text-white/70 text-sm">
                The laser module draws more current than the ESP32 GPIO can safely source directly. 
                The IRLD024 N-channel MOSFET acts as a switch: when D2 goes HIGH, the MOSFET conducts 
                and powers the laser from the 5V rail. This protects the GPIO pin while providing 
                sufficient current for the laser.
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
              <h2 className="text-2xl font-bold text-white">Download CAD Files</h2>
            </div>
            <p className="text-white/70 text-lg mb-6">
              Download the 3D model files to print your own AI Sentry turret platform.
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
                    <div className="text-white font-semibold">Fusion 360 Source</div>
                    <div className="text-white/60 text-sm">.f3d - Editable design</div>
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
                    <div className="text-white font-semibold">STL for Printing</div>
                    <div className="text-white/60 text-sm">.stl - Print-ready mesh</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Software / Code */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Software</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">GitHub Repository</h3>
              <a 
                href="https://github.com/mmattyV/ai-sentry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View on GitHub
              </a>
            </div>
            <p className="text-white/70 mb-6">
              The complete source code is available on GitHub with setup instructions, wiring diagrams, and documentation.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">ESP32 Firmware</h4>
                <p className="text-white/60 text-sm mb-4">PlatformIO / Arduino C++</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Camera frame capture on-demand</li>
                  <li>• JPEG streaming via USB serial</li>
                  <li>• Command parsing for servo angles</li>
                  <li>• PWM servo control</li>
                  <li>• Laser MOSFET control</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Python Controller</h4>
                <p className="text-white/60 text-sm mb-4">Python 3.9+ with YOLOv8</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• YOLOv8 person detection (MPS/GPU)</li>
                  <li>• PD control algorithm</li>
                  <li>• Multi-target cycling</li>
                  <li>• Serial protocol handler</li>
                  <li>• Live OpenCV visualization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ESP32 Code Sample */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">ESP32 Main Loop (Simplified)</h3>
            <div className="bg-gray-900/80 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-white/80">
{`void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('>');
    
    // Parse command: <P:pan,T:tilt,L:laser,F:1>
    int pan = parseValue(cmd, "P:");
    int tilt = parseValue(cmd, "T:");
    int laser = parseValue(cmd, "L:");
    int requestFrame = parseValue(cmd, "F:");
    
    // Update servos
    panServo.write(constrain(pan, 0, 180));
    tiltServo.write(constrain(tilt, 0, 180));
    
    // Control laser via MOSFET
    digitalWrite(LASER_PIN, laser ? HIGH : LOW);
    
    // Send frame if requested
    if (requestFrame) {
      captureAndSendFrame();
    }
  }
}

void captureAndSendFrame() {
  camera_fb_t *fb = esp_camera_fb_get();
  if (fb) {
    // Send header: 0xAA55AA55 + length
    uint32_t header = 0xAA55AA55;
    Serial.write((uint8_t*)&header, 4);
    Serial.write((uint8_t*)&fb->len, 4);
    Serial.write(fb->buf, fb->len);
    esp_camera_fb_return(fb);
  }
}`}
              </pre>
            </div>
          </div>

          {/* Python Code Sample */}
          <div className="text-section rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Python PD Controller (Simplified)</h3>
            <div className="bg-gray-900/80 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-white/80">
{`class PDController:
    def __init__(self, kp=0.2, kd=0.1):
        self.kp = kp
        self.kd = kd
        self.prev_error_x = 0
        self.prev_error_y = 0
    
    def update(self, target_x, target_y, frame_center_x, frame_center_y):
        # Calculate error (pixels from center)
        error_x = target_x - frame_center_x
        error_y = target_y - frame_center_y
        
        # PD control
        d_error_x = error_x - self.prev_error_x
        d_error_y = error_y - self.prev_error_y
        
        pan_delta = self.kp * error_x + self.kd * d_error_x
        tilt_delta = self.kp * error_y + self.kd * d_error_y
        
        self.prev_error_x = error_x
        self.prev_error_y = error_y
        
        return pan_delta, tilt_delta

def main_loop():
    while True:
        # Request frame and send current angles
        serial.write(f"<P:{pan},T:{tilt},L:{laser},F:1>")
        
        # Read JPEG frame
        frame = read_frame_from_serial()
        
        # Detect people with YOLOv8
        results = model(frame, classes=[0])  # class 0 = person
        
        if results:
            target = get_current_target(results)
            pan_delta, tilt_delta = controller.update(
                target.center_x, target.center_y,
                FRAME_WIDTH // 2, FRAME_HEIGHT // 2
            )
            pan += pan_delta
            tilt += tilt_delta
            
            # Fire laser if locked on
            error = sqrt(error_x**2 + error_y**2)
            laser = 1 if error < THRESHOLD else 0`}
              </pre>
            </div>
          </div>
        </div>

        {/* External Resources */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Resources & References</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <a href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                <span className="text-white/80">XIAO ESP32S3 Sense Wiki</span>
                <svg className="w-4 h-4 ml-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://docs.ultralytics.com/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                <span className="text-white/80">YOLOv8 Documentation</span>
                <svg className="w-4 h-4 ml-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://platformio.org/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                <span className="text-white/80">PlatformIO (ESP32 Development)</span>
                <svg className="w-4 h-4 ml-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="https://www.amazon.com/s?k=miuzei+996+servo&crid=M9ATVR9JXIU4&sprefix=miuzei+996+servo%2Caps%2C68&ref=nb_sb_noss" target="_blank" rel="noopener noreferrer"
                 className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                <span className="text-white/80">Miuzei MG996R Servo (Amazon)</span>
                <svg className="w-4 h-4 ml-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Reflection</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            Building the AI Sentry was the most challenging and rewarding project of the semester. 
            The biggest lesson was learning to pivot: my original plan for on-device inference simply 
            wasn&apos;t feasible with the ESP32&apos;s compute constraints. Switching to laptop-based inference 
            required redesigning the communication protocol but resulted in a much more capable system.
          </p>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            The integration of mechanical design, electronics, and software reinforced how interdependent 
            these disciplines are. A slightly loose servo connection or an incorrectly tuned PD gain could 
            make the difference between smooth tracking and chaotic oscillation.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            If I were to continue this project, I&apos;d explore using a more powerful edge device like a 
            Raspberry Pi 5 or Jetson Nano to bring inference back on-device, making the system truly 
            standalone. I&apos;d also add predictive tracking to anticipate target movement rather than 
            purely reactive control.
          </p>
        </div>
      </div>
    </div>
  );
}

