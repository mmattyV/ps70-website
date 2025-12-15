'use client';

import Image from 'next/image';

export default function Week10() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 10
            </span>
            <span className="text-sm text-white/60">
              November 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Sriracha Drawing Machine
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            A 2+ DoF CNC-style drawing machine that uses sauce to plot AI-generated vector art onto food
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Group Project</span>
            <span>•</span>
            <span className="text-sm">Matthew Vu, Katie Le, Shyla Nguyen</span>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Concept</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Our goal was to build a 2-axis CNC drawing machine with a custom end-effector: a sauce pump 
              that could dispense sriracha, ketchup, or other condiments to draw AI-generated artwork 
              onto food like pancakes and tortillas. The system would use text-to-image AI to generate 
              SVG vector art, convert it to motor commands, and stream them over WiFi to an ESP32 controller.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Hardware Components
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>2-axis gantry with stepper motors (X/Y)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>XIAO ESP32C3 microcontroller</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Limit switches for homing/calibration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>PWM-controlled sauce pump end-effector</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Laser-cut wooden frame</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Software Pipeline
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>OpenAI GPT for SVG generation from prompts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>SSG compiler (SVG → motor commands)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Path optimization & simplification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>WiFi streaming to ESP32</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Simulation/visualization tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Build */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Hardware Build</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/closeup_our_rig.jpg" 
                  alt="Close-up of our drawing machine" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Our Drawing Machine - Close-up</h4>
              <p className="text-white/70">
                Close-up view of our 2-axis gantry system featuring stepper motors, linear rails, 
                belt drive mechanism, and laser-cut wooden mounting pieces. The carriage holds 
                the end-effector mount.
              </p>
            </div>

            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/zoomed_out_our_rig.jpg" 
                  alt="Full view of our drawing machine setup" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Full Machine Setup</h4>
              <p className="text-white/70">
                Wider view showing the complete machine setup with the gantry system, power supply, 
                and wiring. The sauce pump end-effector is visible at the top of the image.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/circuit.jpg" 
                  alt="Circuit and breadboard setup" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Electronics & Early Testing</h4>
              <p className="text-white/70">
                One of our test setups showing the breadboard with stepper motor drivers (A4988), 
                microcontroller, and wiring.
              </p>
            </div>

            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/deconstructed_rigs.jpg" 
                  alt="Deconstructed rigs for parts" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Troubleshooting Session</h4>
              <p className="text-white/70">
                Multiple rigs on the lab tables during one of our troubleshooting sessions. 
                Our machine is in the center. We had to disassemble other groups&apos; machines 
                to find working parts and test stepper motor wiring configurations.
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Challenges */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Hardware Challenges</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Project Status: Incomplete Due to Hardware Issues
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                Unfortunately, we were unable to complete a fully working demonstration due to 
                a series of hardware setbacks. While the software pipeline was fully functional, 
                we could not reliably integrate it with the physical machine.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Faulty Laser-Cut Parts</h5>
                <p className="text-white/70 text-sm">
                  Our wooden frame pieces were faulty and had to be re-laser-cut three times. 
                  This set the team back significantly in the timeline.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Repeated Rebuilds</h5>
                <p className="text-white/70 text-sm">
                  The machine had to be taken apart and rebuilt at least 8 times during debugging, 
                  each time requiring re-wiring and re-calibration.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Missing Circuit Board</h5>
                <p className="text-white/70 text-sm">
                  After getting the rig moving, our entire breadboard with all the circuitry went 
                  missing (stolen or misplaced). Since we had a fully built system, we couldn&apos;t 
                  easily identify the correct wiring pairs for the stepper motors to rebuild it.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Motor Issues</h5>
                <p className="text-white/70 text-sm">
                  The stepper motors were jiggling when powered, and we were unable to integrate 
                  the limit switches for proper homing. We attempted to use parts from other 
                  groups&apos; machines but ran out of time to get everything working together.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-white/80 text-sm mb-4">
                <strong className="text-green-300">What DID work:</strong> We had a working pump, 
                the motors did move at one point before the circuitry went missing, and the entire 
                software pipeline was fully functional and tested with the simulator.
              </p>
              
              {/* Pump Demo Video */}
              <div className="mt-4 flex flex-col items-center">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-green-400 mr-2">▶</span>
                  Working Pump Demo
                </h5>
                <video 
                  controls 
                  className="w-full max-w-md rounded-lg shadow-lg"
                  preload="metadata"
                >
                  <source src="/ps70-website/week10/pump.MOV" type="video/quicktime" />
                  <source src="/ps70-website/week10/pump.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-white/60 text-xs mt-2 text-center">
                  Video showing our PWM-controlled sauce pump successfully dispensing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Software Pipeline */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Software Pipeline (Working!)</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              While the hardware integration failed, we successfully built a complete software 
              pipeline from text prompt to motor commands. The code is available on{' '}
              <a 
                href="https://github.com/mmattyV/sriracha-drawing-machine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-200 underline"
              >
                GitHub
              </a>.
            </p>

            {/* Pipeline Diagram */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-6 font-mono text-xs sm:text-sm overflow-x-auto">
              <pre className="text-white/80">
{`TEXT PROMPT          "a frog in a pond"
      │
      ▼
┌──────────────────┐
│  1. AI GENERATOR │  OpenAI GPT → SVG vector art
└────────┬─────────┘
         ▼
┌──────────────────┐
│  2. SSG COMPILER │  SVG → Motor commands (.ssg)
│    - Tessellate  │  Bezier curves → line segments
│    - Simplify    │  Douglas-Peucker algorithm
│    - Optimize    │  Nearest-neighbor path order
└────────┬─────────┘
         │
    ┌────┴────┐
    ▼         ▼
SIMULATOR   HARDWARE
(preview)   (ESP32 + motors)`}
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4">
                <h5 className="text-white font-semibold mb-2">G0 - Rapid Move</h5>
                <p className="text-white/60 text-sm">Travel without dispensing sauce</p>
                <code className="text-cyan-300 text-xs">G0 X10 Y20</code>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4">
                <h5 className="text-white font-semibold mb-2">G1 - Draw Move</h5>
                <p className="text-white/60 text-sm">Move while dispensing sauce</p>
                <code className="text-green-300 text-xs">G1 X50 Y30 F600</code>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4">
                <h5 className="text-white font-semibold mb-2">M3/M5 - Sauce</h5>
                <p className="text-white/60 text-sm">Turn sauce pump on/off</p>
                <code className="text-orange-300 text-xs">M3 S75 / M5</code>
              </div>
            </div>
          </div>

          {/* AI Generation Demo */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🎨</span>
              AI Art Generation Demo
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Prompt Section */}
              <div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Text Prompt
                  </h4>
                  <div className="bg-black/30 rounded-lg p-4 font-mono">
                    <p className="text-purple-300 text-lg italic">&quot;a frog in a pond&quot;</p>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-4">
                  Using OpenAI GPT-5.1, we generate stroke-only SVG vector art optimized for 
                  single-line drawing. The AI is constrained to produce paths suitable for 
                  plotting within a 220×220mm area.
                </p>

                {/* Download Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="/ps70-website/week10/best_result.svg" 
                    download
                    className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-white">Download SVG</span>
                  </a>
                  <a 
                    href="/ps70-website/week10/frog_ai_generated.ssg" 
                    download
                    className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-white">Download SSG Commands</span>
                  </a>
                </div>
              </div>

              {/* SVG Display */}
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-4 shadow-2xl">
                  <Image 
                    src="/ps70-website/week10/best_result.svg" 
                    alt="AI-generated frog SVG" 
                    width={300}
                    height={300}
                    className="w-full max-w-[300px] h-auto"
                  />
                </div>
                <p className="text-white/60 text-sm mt-3 text-center">
                  Generated SVG: &quot;a frog in a pond&quot;
                </p>
              </div>
            </div>

            {/* SSG Code Sample */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Compiled SSG Commands (Sample)
              </h4>
              <p className="text-white/60 text-sm mb-4">
                The SVG is compiled into 221 sequential motor commands. Here&apos;s a sample showing the homing sequence 
                and the start of the first drawing path (the pond outline):
              </p>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-white/80">
{`N1 G28                      ; Home machine (calibrate position)
N2 M3 S60                   ; Prime pump at 60% flow
N3 M5                       ; Pump off
N4 G0 X80.00 Y17.00 F3000   ; Rapid move to start of pond outline
N5 M3 S60                   ; Sauce ON
N6 G1 X78.78 Y23.95 F600    ; Draw move (begin pond ellipse)
N7 G1 X75.18 Y30.68 F600    ; Continue drawing...
N8 G1 X69.28 Y37.00 F600
N9 G1 X61.28 Y42.71 F600
N10 G1 X51.42 Y47.64 F600
...
N41 G1 X80.00 Y17.00 F600   ; Complete the pond outline
N42 M5                      ; Sauce OFF
N43 M3 S60                  ; (prepare for next shape)
...
N221 M114                   ; Report final position`}
                </pre>
              </div>
              <p className="text-white/50 text-xs mt-2">
                Full file contains 221 commands that draw the complete frog design.
              </p>
            </div>
          </div>

          {/* Simulation Results */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/simulation_preview.png" 
                  alt="SSG Simulation - Path Preview" 
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl bg-white"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Simulation: Path Preview</h4>
              <p className="text-white/70 text-sm">
                AI-generated frog design compiled to SSG commands. <span className="text-red-400">Red lines</span> show 
                drawing moves (sauce ON), <span className="text-blue-400">blue dashed lines</span> show travel 
                moves (sauce OFF). The gray circle represents the plate boundary (220mm).
              </p>
            </div>

            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week10/simulation_sequence.png" 
                  alt="SSG Simulation - Drawing Sequence" 
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl bg-white"
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Simulation: Drawing Sequence</h4>
              <p className="text-white/70 text-sm">
                Same design but color-coded by time: <span className="text-cyan-400">cyan (start)</span> → 
                <span className="text-red-400"> red (end)</span>. This shows the optimized path order 
                that minimizes travel distance between strokes.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Source Code</h2>
            </div>
            <p className="text-white/70 mb-6">
              The complete software pipeline including AI image generation, SSG compiler, simulator, 
              and ESP32 firmware is available on GitHub.
            </p>
            <a 
              href="https://github.com/mmattyV/sriracha-drawing-machine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              mmattyV/sriracha-drawing-machine
            </a>
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
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            This project was a humbling lesson in the unpredictability of hardware development. 
            Despite having a solid concept, complete software pipeline, and many hours of work, 
            we couldn&apos;t overcome the cascade of hardware failures and lost components.
          </p>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            The biggest takeaway is the importance of documentation and redundancy. When our 
            breadboard went missing, we had no wiring diagram to rebuild from. In future projects, 
            I&apos;ll take photos of every circuit and document pin connections before moving on.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            Despite not achieving a working demo, I&apos;m proud of the software pipeline we built. 
            The AI-to-SVG-to-motor-commands system worked flawlessly in simulation, and the 
            codebase is well-documented for future iterations. Sometimes learning what NOT to 
            do is just as valuable.
          </p>
        </div>
      </div>
    </div>
  );
}
