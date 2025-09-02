export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hello! 👋</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m a student in PS70: Introduction to Digital Fabrication, excited to explore the intersection of 
              design, engineering, and creativity. This course represents my journey into the world of making, 
              where digital tools meet physical creation.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My interests span across technology, design, and hands-on problem solving. I&apos;m particularly drawn 
              to projects that combine multiple disciplines and have real-world applications. Through this course, 
              I hope to develop skills in 3D design, electronics, programming, and various fabrication techniques.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not working on assignments, you can find me exploring new technologies, sketching ideas, 
              or tinkering with various projects. I believe that the best learning happens through experimentation 
              and iteration, and I&apos;m excited to document that process throughout this semester.
            </p>
          </div>

          {/* Skills & Interests */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Interests</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Digital Fabrication</li>
                <li>• Electronics & IoT</li>
                <li>• 3D Design & Printing</li>
                <li>• Sustainable Design</li>
                <li>• Interactive Systems</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Goals for PS70</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Master digital design tools</li>
                <li>• Build working prototypes</li>
                <li>• Learn electronics basics</li>
                <li>• Develop making skills</li>
                <li>• Create an impactful final project</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">Let&apos;s Connect!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;d love to collaborate, share ideas, or discuss digital fabrication projects.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
