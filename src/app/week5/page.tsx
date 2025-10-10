import Image from 'next/image';

export default function Week5() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 5
            </span>
            <span className="text-sm text-white/60">
              October 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            3D Printed Pan-Tilt Base for AI Turret
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Designing and 3D printing the foundational base component for my final project AI turret, featuring 
            integrated gear system and servo mounting for precise pan control.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Design Overview</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Pan-Tilt Turret Base</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This week marks a significant milestone in my final project: creating the first physical component of the 
              AI-controlled turret system. The pan-tilt base serves as the foundation for the entire turret, providing 
              stable mounting and precise rotational control through an integrated gear system driven by a high-torque servo.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Design Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Integrated gear system for pan rotation</li>
                  <li>• Servo drives the larger gear for greater range of rotation</li>
                  <li>• Servo mounting cavity with precise tolerances</li>
                  <li>• Stable base with four mounting legs</li>
                  <li>• Optimized for 3D printing without supports</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Technical Specifications
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Material: PLA filament</li>
                  <li>• Layer height: 0.2mm</li>
                  <li>• Printer: Prusa i3 MK3S</li>
                  <li>• Assembly: M3 and M4 screws</li>
                </ul>
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
              <h2 className="text-3xl font-bold text-white">Interactive 3D Model</h2>
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
                Fusion 360 CAD Model
              </h4>
              <p className="text-white/80 leading-relaxed text-lg">
                Explore the complete 3D model of the turret base. The design features a gear-driven pan mechanism 
                where the servo drives the larger gear for greater range of rotation of the platform, a servo mounting cavity, 
                and four stable legs. This interactive viewer allows you to rotate, zoom, and examine the intricate details of the component before fabrication.
              </p>
            </div>
          </div>
        </div>

        {/* Printed Results */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">3D Printed Results</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Base View 1 */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week5/base_1.jpg" 
                  alt="3D Printed Turret Base - Top View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Top View - Gear System
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The top view showcases the larger circular gear integrated into the base design. The gear teeth 
                  are precisely modeled to mesh with the smaller gear, providing greater range of rotation 
                  and enabling smooth 360-degree pan rotation for the turret platform.
                </p>
              </div>
            </div>

            {/* Base View 2 */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week5/base_2.jpg" 
                  alt="3D Printed Turret Base - Angle View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                  Angle View - Structural Design
                </h4>
                <p className="text-white/80 leading-relaxed">
                  An angled perspective reveals the four-leg support structure and the central servo mounting 
                  cavity. The legs provide stable support while the elevated design allows for full range of 
                  motion without obstruction.
                </p>
              </div>
            </div>

            {/* Base View 3 */}
            <div className="text-section rounded-2xl p-6 lg:col-span-2">
              <div className="mb-6 flex justify-center">
                <div className="max-w-2xl w-full">
                  <Image 
                    src="/ps70-website/week5/base3.jpg" 
                    alt="3D Printed Turret Base - Assembly View" 
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold text-white flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Complete Assembly View
                </h4>
                <p className="text-white/80 leading-relaxed text-center">
                  The fully assembled base with the Miuzei MG996R servo motor installed and secured with M3 and M4 screws. 
                  The servo drives the larger gear to provide greater range of rotation and precise rotational control for the pan axis of the turret platform.
                </p>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Print Settings & Assembly</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-white font-semibold mb-3">3D Printing Parameters</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Material:</strong> PLA filament for dimensional accuracy and ease of printing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Layer Height:</strong> 0.2mm for balance between quality and print time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Printer:</strong> Prusa i3 MK3S with reliable bed adhesion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Infill:</strong> Standard settings optimized for structural strength</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Hardware Components</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Servo Motor:</strong> Miuzei MG996R high-torque digital servo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Leg Mounting:</strong> M4 screws for secure leg attachment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Gear Assembly:</strong> M3 screws for gear mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Servo Specs:</strong> 11kg·cm torque, 4.8-6.6V operating voltage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                Dimensional Accuracy Issues
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The primary challenge encountered was that the printed dimensions were smaller than the CAD model 
                specifications. This is a common issue with 3D printing due to material shrinkage during cooling 
                and printer calibration variations.
              </p>
              <p className="text-white/70 text-sm italic">
                The servo mounting cavity printed too tight, preventing the MG996R servo from sliding into the 
                base smoothly, which would have caused stress on both the print and the servo housing.
              </p>
            </div>

            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                Post-Processing Solution
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The solution involved careful filing of the servo mounting cavity to achieve the proper fit. 
                Using hand files, material was gradually removed until the servo could slide smoothly into 
                position while maintaining a snug, secure fit.
              </p>
              <ul className="text-white/70 space-y-2 text-sm ml-5">
                <li>• Filed interior walls of servo cavity</li>
                <li>• Test-fit servo repeatedly during filing process</li>
                <li>• Achieved smooth sliding fit without play</li>
                <li>• Maintained structural integrity of mount</li>
              </ul>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Design Iteration Lessons</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              This challenge reinforced an important lesson in digital fabrication: always account for material 
              properties and manufacturing tolerances in your CAD designs. For future iterations, I will add 
              0.2-0.3mm clearance to critical fit dimensions in the CAD model to account for PLA shrinkage and 
              printer variations, reducing the need for post-processing. This experience demonstrates that physical 
              prototyping is essential - even with precise CAD models, real-world manufacturing requires iteration 
              and adjustment.
            </p>
          </div>
        </div>

        {/* Download Files Section */}
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
              Access the complete set of files for this project, including the parametric CAD model, 
              printable STL file, and pre-sliced G-code ready for Prusa printers.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <a 
                href="/ps70-website/week5/ai_turret_platform.f3d" 
                download="AI_Turret_Base.f3d"
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
                href="/ps70-website/week5/ai_turret_platform.stl" 
                download="AI_Turret_Base.stl"
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

              <a 
                href="/ps70-website/week5/matthewvu_turret_platform.gcode" 
                download="Turret_Base.gcode"
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">G-Code</div>
                    <div className="text-white/60 text-sm">.gcode file</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3D Scanning */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">3D Scanning with Revopoint</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Scanning Setup & Process</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Using the Revopoint 3D scanner with Revoscan software, I captured detailed 3D scans of two objects: 
              a velvet tomato plushie and my Megumin anime character keychain. The Revopoint scanner uses structured 
              light technology to capture accurate geometry and surface details, generating both point cloud data and 
              mesh models from real-world objects.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Scanning Equipment
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Revopoint 3D scanner</li>
                  <li>• Revoscan software for processing</li>
                  <li>• Structured light scanning technology</li>
                  <li>• Point cloud and mesh generation</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Scan Outputs
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Point cloud (.ply format)</li>
                  <li>• Mesh model (.ply format)</li>
                  <li>• High-resolution texture capture</li>
                  <li>• Accurate surface geometry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scanned Objects */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Megumin Keychain */}
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week5/megumin.png" 
                  alt="3D Scan of Megumin Anime Keychain" 
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></span>
                  Megumin Keychain
                </h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  A detailed 3D scan of my Megumin anime character keychain. The Revopoint scanner successfully 
                  captured the intricate details of the character&apos;s hat, facial features, and textured surfaces. 
                  The scan demonstrates the scanner&apos;s ability to handle complex geometry and small details.
                </p>
                
                <div className="grid gap-3 mt-4">
                  <a 
                    href="/ps70-website/week5/meg_pc.ply" 
                    download="megumin_pointcloud.ply"
                    className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Point Cloud</div>
                        <div className="text-white/60 text-xs">meg_pc.ply</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>

                  <a 
                    href="/ps70-website/week5/meg_mesh.ply" 
                    download="megumin_mesh.ply"
                    className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Mesh Model</div>
                        <div className="text-white/60 text-xs">meg_mesh.ply</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Velvet Tomato */}
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week5/tomato.png" 
                  alt="3D Scan of Velvet Tomato Plushie" 
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                  Velvet Tomato Plushie
                </h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  A 3D scan of a soft velvet tomato plushie. This scan presented an interesting challenge for the 
                  Revopoint scanner, as soft, fuzzy materials can be difficult to capture with structured light 
                  scanning. The resulting model shows the scanner&apos;s capability to handle varied surface textures.
                </p>

                <div className="grid gap-3 mt-4">
                  <a 
                    href="/ps70-website/week5/tomato_pc.ply" 
                    download="tomato_pointcloud.ply"
                    className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Point Cloud</div>
                        <div className="text-white/60 text-xs">tomato_pc.ply</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>

                  <a 
                    href="/ps70-website/week5/tomato_mesh.ply" 
                    download="tomato_mesh.ply"
                    className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">Mesh Model</div>
                        <div className="text-white/60 text-xs">tomato_mesh.ply</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">3D Scanning Insights</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg mb-4">
              The Revopoint scanner with Revoscan software provided an accessible way to digitize real-world objects. 
              The structured light scanning technology captures geometry by projecting patterns onto objects and analyzing 
              their deformation. The software automatically generates both point cloud data (raw scan points) and mesh models 
              (connected surfaces), making the scans ready for use in 3D modeling applications.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Scanning Challenges
                </h4>
                <ul className="text-white/70 text-sm space-y-1 ml-5">
                  <li>• Soft, fuzzy materials (like the velvet tomato) can be difficult for structured light</li>
                  <li>• Requires adequate lighting and stable scanning environment</li>
                  <li>• Small objects need careful positioning for complete coverage</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Applications
                </h4>
                <ul className="text-white/70 text-sm space-y-1 ml-5">
                  <li>• Reverse engineering existing objects</li>
                  <li>• Creating digital archives of physical items</li>
                  <li>• Reference models for 3D modeling and design</li>
                  <li>• Quality control and measurement verification</li>
                </ul>
              </div>
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
            Creating the first physical component of my final project was an exciting milestone that transformed 
            abstract CAD designs into tangible reality. The 3D printing process revealed important lessons about 
            manufacturing tolerances and the gap between digital precision and physical fabrication. While the 
            dimensional accuracy issue required manual post-processing, it taught me to design with real-world 
            manufacturing constraints in mind.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            This pan-tilt base establishes the foundation for the complete AI turret system. The successful 
            integration of the gear system and servo motor demonstrates that the mechanical design is sound and 
            ready for the next phase: building the tilt mechanism and trigger assembly. The experience reinforced 
            that iterative prototyping and hands-on problem-solving are essential skills in digital fabrication, 
            complementing CAD design expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

