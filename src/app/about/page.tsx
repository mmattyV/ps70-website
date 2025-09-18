export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/ps70-website/profile_image.jpeg" 
              alt="Matthew Vu" 
              className="w-48 h-48 rounded-full mx-auto shadow-2xl object-cover border-4 border-white/20"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-2xl mx-auto mb-8">
            Passionate about the intersection of design, technology, and making
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="text-section rounded-2xl p-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                <span className="text-3xl">👋</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Hello!</h2>
            </div>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                I&apos;m Matthew Vu, a junior at Harvard College studying Computer Science and living in Lowell House. 
                Originally from Portland, Oregon, I&apos;m currently taking PS70: Introduction to Digital Fabrication, 
                excited to explore the intersection of design, engineering, and creativity. This course represents 
                my journey into the world of making, where digital tools meet physical creation.
              </p>
              
              <p>
                My interests span across technology, design, and hands-on problem solving. I&apos;m particularly drawn 
                to projects that combine multiple disciplines and have real-world applications - especially in robotics, 
                defense, and aerospace. Through this course, I hope to develop skills in 3D design, electronics, 
                programming, and various fabrication techniques that I can apply to future robotics projects.
              </p>

              <p>
                When I&apos;m not working on assignments, you can find me at the gym lifting weights or on the tennis court
                improving my game. Fun fact: I have little sisters who are identical twins! I believe that the best 
                learning happens through experimentation and iteration, and I&apos;m excited to document that process 
                throughout this semester.
              </p>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Interests</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Robotics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Electronics & IoT
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  3D Design & Printing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Defense and Aerospace
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Tennis
                </li>
              </ul>
            </div>

            <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Goals for PS70</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Master digital design tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Build working prototypes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Learn electronics basics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Develop making skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Create an impactful final project
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-section rounded-2xl p-10 text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect!</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              I&apos;d love to collaborate, share ideas, or discuss digital fabrication projects.
            </p>
            <a 
              href="mailto:mvu@college.harvard.edu" 
              className="glass-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
