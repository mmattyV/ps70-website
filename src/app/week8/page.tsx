'use client';

import React, { useState } from 'react';

export default function Week8() {
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 8
            </span>
            <span className="text-sm text-white/60">
              October 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            CNC Milling & Vacuum Forming: Oregon Topographic Map
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Creating a 3D topographic map of Oregon using CNC milling and post-processing with vacuum forming
          </p>
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
              This week focused on subtractive manufacturing using CNC milling and post-processing through vacuum forming. 
              I designed and fabricated a 3D topographic map of Oregon, my home state, using the ShopBot CNC mill to carve 
              deep relief features into laminated MDF blocks. The project combined digital fabrication with traditional 
              post-processing techniques to create both the original wooden piece and a vacuum-formed plastic replica.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  CNC Milling
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>ShopBot CNC mill with 1/8" bit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>30mm maximum depth carving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Laminated MDF stock material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Fusion 360 CAM toolpaths</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Vacuum Forming
                </h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>White plastic sheet material</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Detailed feature retention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Challenging demolding process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Post-processing technique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CAD Design */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Design: Oregon Topographic Map</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">3D Model</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The design features a detailed topographic representation of Oregon, capturing the state&apos;s diverse 
              terrain from the Pacific coastline to the Cascade Mountains and high desert regions. The model was designed 
              to be milled as a deep relief carving, with elevation changes represented by depth variations up to 30mm.
            </p>

            <div className="rounded-xl overflow-hidden shadow-2xl mb-6 bg-gray-800/50">
              <iframe 
                src="https://college964.autodesk360.com/shares/public/SH28cd1QT2badd0ea72b6ebb51e290c9bde6?mode=embed" 
                width="640" 
                height="480" 
                allowFullScreen={true}
                className="w-full"
                style={{ minHeight: '480px' }}
              ></iframe>
            </div>
            <p className="text-center text-white/60 text-sm mb-6">Interactive 3D model of Oregon topographic map</p>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Design Considerations</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-green-300">Material Preparation:</strong> Laminated multiple MDF blocks together to achieve sufficient thickness for the 30mm deep carving</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-green-300">CAM Software:</strong> Initially attempted Aspire but found it too complex; switched to Fusion 360 CAM for better control and easier toolpath generation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-green-300">Tooling:</strong> Used 1/8" end mill for detailed carving while maintaining reasonable machining time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-green-300">Stock Size:</strong> Oversized stock to allow for bandsaw trimming after milling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CNC Milling Process */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">CNC Milling: ShopBot Fabrication</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Milled Wood Block</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The Oregon topographic map was milled on the ShopBot CNC using a 1/8" end mill. The laminated MDF stock 
              provided a stable, uniform material for the deep 30mm carving. After milling, the excess material was 
              trimmed using a bandsaw to create the final piece with clean edges following Oregon&apos;s state boundaries.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/wood_front.jpg" 
                    alt="Wood block front view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Front view showing topographic relief</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/wood_angle.jpg" 
                    alt="Wood block angled view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Angled view highlighting depth variation</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/wood_side.jpg" 
                    alt="Wood block side view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Side view showing 30mm maximum depth</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Fabrication Process</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Material Preparation
                  </h5>
                  <p className="ml-5 text-white/70">
                    Glued multiple MDF blocks together to create a stock thick enough for the 30mm deep relief carving. 
                    Ensured proper clamping and curing time for a solid lamination.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    CAM Programming
                  </h5>
                  <p className="ml-5 text-white/70">
                    Initially attempted to use Aspire for CAM but found the interface and workflow challenging. Switched 
                    to Fusion 360 CAM, which provided better control over toolpaths and more intuitive 3D adaptive clearing 
                    strategies for the deep pockets.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    ShopBot Milling
                  </h5>
                  <p className="ml-5 text-white/70">
                    Machined the piece using a 1/8" end mill on the ShopBot. The smaller bit size allowed for detailed 
                    feature resolution while still being robust enough for the deep cuts. Multiple passes were required 
                    to reach the full 30mm depth.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Post-Milling Trimming
                  </h5>
                  <p className="ml-5 text-white/70">
                    After milling, used the bandsaw to trim the excess stock material around the Oregon outline, creating 
                    clean edges that follow the state boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vacuum Forming */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Post-Processing: Vacuum Forming</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Vacuum Formed Plastic Replica</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Using the milled wood block as a mold, I created a vacuum-formed replica using white plastic sheeting. 
              The process successfully captured most of the topographic detail from the original, demonstrating the 
              effectiveness of vacuum forming for replicating complex 3D surfaces. However, the tall profile of the 
              block created challenges during demolding.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/plastic_front.jpg" 
                    alt="Vacuum formed plastic front view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Front view of vacuum formed replica</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/plastic_angle.jpg" 
                    alt="Vacuum formed plastic angled view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Angled view showing detail retention</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <img 
                    src="/ps70-website/week8/plastic_back.jpg" 
                    alt="Vacuum formed plastic back view"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Back view of formed plastic</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Vacuum Forming Process</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Material Selection
                  </h5>
                  <p className="ml-5 text-white/70">
                    Used thicker white plastic sheeting for the vacuum forming process. The material needed to be thick enough 
                    to capture detail but thin enough to form properly over the deep relief features.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Forming Process
                  </h5>
                  <p className="ml-5 text-white/70">
                    Heated the plastic sheet until pliable, then used vacuum pressure to draw it tightly over the wooden 
                    mold. The process successfully replicated most of the topographic detail from the original carving.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Demolding Challenges
                  </h5>
                  <p className="ml-5 text-white/70">
                    The tall profile of the mold (30mm depth) made it difficult to remove the formed plastic without 
                    damaging either the mold or the replica. The deep undercuts created by the topographic features 
                    increased the challenge of demolding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-blue-300">Result:</strong> The vacuum forming process produced a successful 
                replica that retained most of the detail from the CNC-milled original. The white plastic provides good 
                contrast for viewing the topographic features, though the demolding process highlighted the design 
                challenges of using tall molds with deep relief features in vacuum forming.
              </p>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Lessons Learned & Reflections</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  What Worked Well
                </h4>
                <ul className="space-y-2 text-white/80 ml-8">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Fusion 360 CAM provided much better control and easier workflow than Aspire for this complex 3D carving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Laminating MDF blocks created a stable, uniform material perfect for deep relief milling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>1/8" end mill balanced detail resolution with machining efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Vacuum forming successfully captured most topographic details from the original</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-3">⚠</span>
                  Challenges & Solutions
                </h4>
                <ul className="space-y-2 text-white/80 ml-8">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>CAM Software:</strong> Aspire proved too complex; switching to Fusion 360 CAM resolved workflow issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Demolding:</strong> Tall mold profile made plastic removal difficult; future designs should consider draft angles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span><strong>Stock Preparation:</strong> Proper glue-up and clamping of MDF layers was critical for preventing delamination during milling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="text-2xl mr-3">→</span>
                  Future Improvements
                </h4>
                <ul className="space-y-2 text-white/80 ml-8">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Add draft angles to deep features to facilitate easier demolding in vacuum forming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Experiment with different plastic thicknesses to optimize detail capture vs. formability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Consider creating a two-part mold for easier demolding of complex geometries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Explore finishing techniques to enhance the appearance of both wood and plastic versions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

