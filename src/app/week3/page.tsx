import Image from 'next/image';

export default function Week3() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 3
            </span>
            <span className="text-sm text-white/60">
              September 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Kinetic Sculpture: Resurrection
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Creating a motorized kinetic sculpture using a scotch yoke mechanism to symbolize the resurrection of Jesus through vertical movement on the cross.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Concept</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Resurrection Kinetic Sculpture</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This kinetic sculpture explores the powerful symbolism of resurrection through mechanical movement. 
              Using a scotch yoke mechanism driven by a DC motor, the sculpture creates a continuous vertical motion 
              that raises and lowers a figure of Jesus on the cross, symbolizing the resurrection - the central belief 
              in Christianity that Jesus died to save us from sin and rose again, demonstrating victory over death.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Design Concept
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Scotch yoke mechanism for linear motion</li>
                  <li>• DC motor for continuous rotation</li>
                  <li>• Vertical movement symbolizing resurrection</li>
                  <li>• 6mm cardboard construction with finger joints</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Technical Requirements
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• Motorized movement with power source</li>
                  <li>• Laser-cut precision components</li>
                  <li>• Soldered structural connections</li>
                  <li>• Secure mechanical attachments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Working Sculpture */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Working Sculpture</h2>
            </div>
          </div>

          {/* Movement GIF */}
          <div className="text-section rounded-2xl p-8 mb-8 bg-gradient-to-br from-green-500/20 to-blue-500/20">
            <div className="mb-6 text-center">
              <Image 
                src="/ps70-website/week3/movement.gif" 
                alt="Kinetic Sculpture in Motion - Resurrection Movement" 
                width={800}
                height={600}
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
                <span className="w-4 h-4 bg-green-400 rounded-full mr-3"></span>
                Resurrection in Motion
              </h4>
              <p className="text-white/80 leading-relaxed text-lg">
                The completed kinetic sculpture demonstrates smooth vertical movement through the scotch yoke mechanism. 
                The continuous motion creates a mesmerizing effect that draws viewers into contemplating the 
                significance of Jesus&apos;s resurrection and victory over death. The motorized system operates reliably with proper mechanical connections.
              </p>
            </div>
          </div>

          {/* Multiple View Photos */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Front View */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week3/front.jpg" 
                  alt="Kinetic Sculpture - Front View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Front View - Complete Assembly
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The front view shows the complete kinetic sculpture with the cross and figure positioned 
                  for optimal visibility. The clean lines of the laser-cut cardboard create an elegant 
                  silhouette that emphasizes the spiritual symbolism while showcasing the mechanical precision.
                </p>
              </div>
            </div>

            {/* Diagonal View */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week3/front_diag.jpg" 
                  alt="Kinetic Sculpture - Front Diagonal View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Front Diagonal Perspective
                </h4>
                <p className="text-white/80 leading-relaxed">
                  This diagonal view reveals the three-dimensional nature of the sculpture and shows how 
                  the mechanism housing integrates with the cross structure. The perspective demonstrates 
                  the careful consideration of proportions and visual balance in the overall design.
                </p>
              </div>
            </div>

            {/* Top Angle View */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week3/top_angle.jpg" 
                  alt="Kinetic Sculpture - Top Angle View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Top Angle - Housing Construction
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The top angle view shows the back of the sculpture housing, revealing the clean 
                  construction and how the cardboard components fit together. This perspective demonstrates 
                  the structural design while maintaining the artistic integrity of the piece.
                </p>
              </div>
            </div>

            {/* Back Angle View */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week3/back_angle.jpg" 
                  alt="Kinetic Sculpture - Back Angle View" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Back Angle - Construction Details
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The rear perspective shows the finger joint construction method inherited from Week 2&apos;s 
                  box project, demonstrating how previous learning was applied to create the housing for 
                  this more complex kinetic mechanism.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Design & Fabrication Process */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">CAD Design & Mechanism</h2>
            </div>
          </div>

          {/* CAD Model Image */}
          <div className="text-section rounded-2xl p-8 mb-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <div className="mb-6">
              <Image 
                src="/ps70-website/week3/fusion.png" 
                alt="Fusion 360 CAD Model of Kinetic Sculpture Mechanism" 
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white flex items-center">
                <span className="w-4 h-4 bg-cyan-400 rounded-full mr-3"></span>
                Fusion 360 CAD Model
              </h4>
              <p className="text-white/80 leading-relaxed text-lg">
                The complete CAD model designed in Fusion 360 shows the scotch yoke mechanism integrated with the 
                cross structure and housing. This digital model was essential for planning the laser cutting layout, 
                calculating proper tolerances, and visualizing how all components would fit together before fabrication. 
                The parametric design allowed for easy adjustments during the iterative design process.
              </p>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Scotch Yoke Mechanism Design</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The scotch yoke mechanism converts the rotational motion of the DC motor into linear vertical motion. 
              This mechanical system consists of a rotating crank connected to a sliding yoke that moves up and down 
              along a linear path. The mechanism provides smooth, sinusoidal motion perfect for the symbolic 
              representation of resurrection.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Mechanism Components
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• DC motor for rotational input</li>
                  <li>• Crank arm attached to motor shaft</li>
                  <li>• Sliding yoke with linear constraints</li>
                  <li>• Connecting rod between crank and yoke</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Construction Materials
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• 6mm cardboard for housing and structure</li>
                  <li>• Copper wire for structural frame connections</li>
                  <li>• Metal screws for motor mounting</li>
                  <li>• Washers and nuts for secure attachment</li>
                </ul>
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
              <h3 className="text-xl font-semibold text-white">Laser Cutting & Assembly</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              Using the same 6mm cardboard and finger joint techniques from Week 2, I laser-cut all the structural 
              components for the kinetic sculpture housing. The precision of laser cutting was essential for creating 
              the mounting holes for screws and ensuring proper alignment of the mechanism components. The soldering 
              process was used to join the copper wire frame together, creating strong structural connections for 
              the mechanical components of the scotch yoke mechanism.
            </p>
          </div>
        </div>

        {/* Failed First Attempt & Learning */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Learning Through Failure</h2>
            </div>
          </div>

          {/* Failed Attempt Image */}
          <div className="text-section rounded-2xl p-8 mb-8 bg-gradient-to-br from-red-500/20 to-orange-500/20">
            <div className="mb-6">
              <Image 
                src="/ps70-website/week3/broken.jpg" 
                alt="Failed First Attempt - Broken Kinetic Sculpture" 
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white flex items-center">
                <span className="w-4 h-4 bg-red-400 rounded-full mr-3"></span>
                First Attempt: Critical Failures
              </h4>
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                The initial attempt revealed several critical design flaws that prevented the mechanism from functioning 
                properly. This failure became an invaluable learning experience that informed the successful redesign 
                and highlighted the importance of proper mechanical connections and material selection.
              </p>
            </div>
          </div>

          {/* Problems & Solutions */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                Problems Identified
              </h4>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>No proper holes for motor mounting screws - motor was unstable</span>
                </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Used cardboard for structural frame connections - too flimsy and unreliable</span>
                  </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Yoke not securely attached to crank - mechanism would bind and fail</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Overall structural instability due to poor connections</span>
                </li>
              </ul>
            </div>

            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                Solutions Implemented
              </h4>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Laser-cut precise holes for screw mounting - secure motor attachment</span>
                </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Switched to copper wire for structural frame - flexible and reliable connections</span>
                  </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Added washers and nuts for secure yoke-to-crank attachment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Reinforced all critical connection points for stability</span>
                </li>
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
              <h3 className="text-xl font-semibold text-white">Iterative Design Process</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              This failure taught me that successful kinetic sculptures require careful attention to every mechanical 
              connection point. The transition from the broken first attempt to the working version demonstrated the 
              importance of proper fasteners, appropriate materials for different functions, and the need for structural 
              analysis in mechanical design. Each problem became a learning opportunity that improved the final result.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
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
                  Materials
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• 6mm corrugated cardboard</li>
                  <li>• Copper wire connections</li>
                  <li>• Metal screws and washers</li>
                  <li>• Nuts for secure fastening</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Electronics
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• DC motor for rotation</li>
                  <li>• Power source connection</li>
                  <li>• Soldered wire frame joints</li>
                  <li>• Mechanical linkage system</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Mechanism
                </h5>
                <ul className="text-white/80 space-y-1 ml-5">
                  <li>• Scotch yoke linear motion</li>
                  <li>• Finger joint construction</li>
                  <li>• Precision laser-cut holes</li>
                  <li>• Washers and nuts assembly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Key Learnings</h3>
            </div>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Material Properties Matter
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Cardboard, while excellent for structural components, proved inadequate for dynamic mechanical 
                    connections. Its tendency to become flimsy and behave erratically under continuous motion taught 
                    me to carefully consider material properties for each application within a design.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Attachment Methods Are Critical
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    The difference between failure and success came down to proper attachment methods. Using appropriate 
                    fasteners like washers and nuts instead of relying solely on cardboard connections was essential 
                    for creating reliable mechanical systems.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Precision in Fabrication
                </h4>
                <p className="text-white/80 leading-relaxed text-lg">
                  The laser cutter&apos;s precision was crucial for creating exact mounting holes for screws and ensuring 
                  proper alignment of moving parts. This project reinforced the importance of planning for assembly 
                  during the design phase and considering how each component will be manufactured and connected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Reflection</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed">
            Creating this kinetic sculpture was a profound learning experience that combined mechanical engineering, 
            electronics, and artistic expression. The initial failure taught me more about proper design practices 
            than a successful first attempt would have. The project demonstrated that creating reliable kinetic art 
            requires understanding material properties, mechanical principles, and precise fabrication techniques. 
            Most importantly, it showed me that the iterative design process - learning from failure and improving 
            - is fundamental to creating successful mechanical systems. The final working sculpture not only achieved 
            its technical goals but also created a meaningful artistic statement about resurrection and renewal.
          </p>
        </div>
      </div>
    </div>
  );
}
