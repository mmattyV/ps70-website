export default function Week2() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 2
            </span>
            <span className="text-sm text-white/60">
              September 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            CAD Modeling & Laser Cutting
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Learning Fusion 360 to design a pentagonal prism box and fabricating it using laser cutting on 6mm cardboard.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Overview</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Pentagonal Prism Box Design</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This week I dove into CAD modeling using Fusion 360 to design a pentagonal prism box. As someone new to CAD software, 
              I found the initial learning curve challenging but rewarding. The goal was to create a functional box with proper 
              tolerances for laser cutting that would assemble correctly on the first try.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Design Challenges
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Learning Fusion 360 interface and tools</li>
                  <li>• Understanding pentagonal geometry</li>
                  <li>• Calculating proper joint tolerances</li>
                  <li>• Planning for 6mm cardboard thickness</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Success Factors
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Precise measurements and constraints</li>
                  <li>• Proper finger joint design</li>
                  <li>• First iteration fit perfectly</li>
                  <li>• Clean laser cutting results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CAD Design Process */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">CAD Design Process</h2>
            </div>
          </div>

          {/* CAD Images Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* CAD Sketch */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/cad_sketch.png" 
                  alt="CAD Sketch of Pentagonal Prism" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Initial Sketch Design
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Started with a basic pentagonal sketch in Fusion 360. Learning to use constraints and dimensions 
                  was initially challenging, but I focused on getting the pentagon geometry correct with equal 
                  sides and proper angles (72° internal angles).
                </p>
              </div>
            </div>

            {/* CAD Assembly */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/cad_assembly.png" 
                  alt="CAD Assembly View" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  3D Assembly Model
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The complete 3D model showing how all the pieces fit together. I designed finger joints 
                  for the sides and a separate bottom piece. The model helped visualize the final assembly 
                  and ensure all tolerances were correct for the 6mm cardboard material.
                </p>
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
              <h3 className="text-xl font-semibold text-white">Learning Fusion 360</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              As a newcomer to CAD software, Fusion 360 initially felt overwhelming with its numerous tools and features. 
              However, focusing on the basics of sketching, constraining, and extruding helped me create this functional design. 
              The parametric modeling approach allowed me to easily adjust dimensions and see how changes affected the entire model.
            </p>
          </div>
        </div>

        {/* Fabrication Results */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Laser Cutting & Assembly</h2>
            </div>
          </div>

          {/* Physical Results Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Box Standing */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/box_standing.jpeg" 
                  alt="Assembled Pentagonal Box Standing" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                  Assembled Box - Standing
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The completed pentagonal prism box standing upright, showing the successful assembly. 
                  All finger joints fit perfectly on the first iteration, demonstrating the accuracy of 
                  the CAD model and proper tolerance calculations for the laser cutting process.
                </p>
              </div>
            </div>

            {/* Box Open */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/box_open.jpeg" 
                  alt="Pentagonal Box Opened Showing Interior" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  Box Interior View
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Interior view showing the clean laser-cut edges and how the finger joints create 
                  a sturdy structure. The 6mm cardboard material provided good rigidity, and I added 
                  glue to the joints for extra security despite accounting for 0.2mm kerf in the design.
                </p>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Laser Cutting Success</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              The laser cutting process went smoothly with the 6mm cardboard material. I accounted for 0.2mm kerf 
              in my design, and the precision of the laser cutter perfectly matched the CAD model dimensions, 
              resulting in clean cuts and well-fitting joints. I added glue during assembly for extra security 
              and structural integrity, which was particularly satisfying as a beginner to both CAD and digital fabrication.
            </p>
          </div>
        </div>

        {/* Box Download Section */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Download 3D Model</h3>
                  <p className="text-white/60 text-sm">Pentagonal Prism Box Fusion 360 File</p>
                </div>
              </div>
              <a 
                href="/ps70-website/week2/Pentagonal Prism Box.f3d" 
                download="Pentagonal_Prism_Box.f3d"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download .f3d File
              </a>
            </div>
            <p className="text-white/80 leading-relaxed">
              Download the complete Fusion 360 file for the pentagonal prism box. This file includes all the 
              parametric sketches, extrusions, and finger joint features used to create the laser-cut design. 
              Perfect for studying the construction method and adapting the design for your own projects.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Technical Specifications</h4>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Material
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• 6mm corrugated cardboard</li>
                  <li>• Laser-cut precision</li>
                  <li>• Clean, sealed edges</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Geometry
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• Pentagonal base</li>
                  <li>• 72° internal angles</li>
                  <li>• Finger joint connections</li>
                  <li>• 0.2mm kerf compensation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Assembly
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• Press-fit finger joints</li>
                  <li>• Glue added for security</li>
                  <li>• First iteration success</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fusion 360 Tutorial */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Fusion 360 Tutorial</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Glass Soda Bottle Tutorial</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              To further develop my Fusion 360 skills, I followed a comprehensive tutorial on creating a glass soda bottle. 
              This tutorial helped me understand more advanced parametric modeling techniques, including revolve features, 
              fillets, and creating complex organic shapes that would be challenging for a beginner.
            </p>
            
            <div className="mb-6">
              <a 
                href="https://www.youtube.com/watch?v=DfAfxae8aRc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Tutorial: Glass Soda Bottle in Fusion 360
              </a>
            </div>
          </div>

          {/* Tutorial Results Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Bottle View 1 */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/bottle_1.png" 
                  alt="Glass Soda Bottle - Front View" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                  Bottle Design - Front View
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The completed glass soda bottle model showing the classic bottle shape with curved surfaces 
                  and proper proportions. This tutorial taught me how to use revolve features effectively 
                  and create smooth, organic curves using splines and constraints.
                </p>
              </div>
            </div>

            {/* Bottle View 2 */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <img 
                  src="/ps70-website/week2/bottle_2.png" 
                  alt="Glass Soda Bottle - Perspective View" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-pink-400 rounded-full mr-3"></span>
                  Bottle Design - Perspective View
                </h4>
                <p className="text-white/80 leading-relaxed">
                  A perspective view showcasing the 3D form and proportions of the bottle. Working through 
                  this tutorial helped me understand parametric relationships and how to modify designs 
                  efficiently by adjusting key dimensions and constraints.
                </p>
              </div>
            </div>
          </div>

          {/* Tutorial Learning Points */}
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Key Learning Points</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  New Techniques Learned
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Revolve feature for axially symmetric objects</li>
                  <li>• Advanced spline curve creation and editing</li>
                  <li>• Fillet operations for smooth transitions</li>
                  <li>• Parametric dimension relationships</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Skills Developed
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Creating complex organic shapes</li>
                  <li>• Understanding design intent and constraints</li>
                  <li>• Efficient workflow for iterative design</li>
                  <li>• 3D visualization and presentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Download 3D Model</h3>
                  <p className="text-white/60 text-sm">Glass Soda Bottle Fusion 360 File</p>
                </div>
              </div>
              <a 
                href="/ps70-website/week2/Day 2 - Glass Soda Bottle.f3d" 
                download="Glass_Soda_Bottle.f3d"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download .f3d File
              </a>
            </div>
            <p className="text-white/80 leading-relaxed">
              Download the complete Fusion 360 file to explore the parametric model, examine the construction 
              history, and see how the bottle was created step-by-step. This file includes all sketches, 
              features, and parameters used in the tutorial.
            </p>
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
            This project was an excellent introduction to the CAD-to-fabrication workflow. While Fusion 360 seemed 
            daunting at first, breaking down the design into simple geometric shapes and focusing on constraints made 
            it manageable. The most rewarding aspect was seeing the digital model translate perfectly into a physical 
            object that assembled correctly on the first try. This experience built confidence in both CAD modeling 
            and understanding material properties for digital fabrication.
          </p>
        </div>
      </div>
    </div>
  );
}
