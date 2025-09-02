export default function Week1() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
              Week 1
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              January 2024
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Website & Final Project Proposal
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Setting up my documentation website and proposing ideas for the semester final project.
          </p>
        </div>

        {/* Website Documentation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Website Development</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <h3 className="text-lg font-medium text-foreground mb-3">Technology Stack</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium text-foreground mb-2">Frontend</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Next.js 15 (React framework)</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Responsive design principles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Features</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Clean, minimal design</li>
                  <li>• Dark/light mode support</li>
                  <li>• Mobile-responsive layout</li>
                  <li>• Fast page navigation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">Design Philosophy</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The website follows a minimal, modern aesthetic that prioritizes readability and user experience. 
              The design emphasizes content over decoration, uses consistent spacing and typography, and provides 
              clear navigation between assignments. The color scheme supports both light and dark modes for 
              comfortable viewing in different environments.
            </p>
          </div>
        </div>

        {/* Final Project Proposal */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Final Project Proposal</h2>
          
          {/* Project Overview */}
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Plant Monitoring System</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              An intelligent plant care system that monitors environmental conditions and provides automated 
              care for indoor plants, combining IoT sensors, data visualization, and automated watering mechanisms.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Soil moisture monitoring</li>
                  <li>• Light level detection</li>
                  <li>• Temperature & humidity tracking</li>
                  <li>• Automated watering system</li>
                  <li>• Mobile app interface</li>
                  <li>• Data logging & analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Target Users</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Busy plant enthusiasts</li>
                  <li>• Frequent travelers</li>
                  <li>• Beginner gardeners</li>
                  <li>• Office environments</li>
                  <li>• Educational settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h4 className="font-semibold text-foreground mb-3">3D Design & Fabrication</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Custom sensor housing</li>
                <li>• Water reservoir design</li>
                <li>• Mounting brackets</li>
                <li>• Protective enclosures</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h4 className="font-semibold text-foreground mb-3">Electronics</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• ESP32 microcontroller</li>
                <li>• Soil moisture sensors</li>
                <li>• Light sensors (LDR)</li>
                <li>• DHT22 temp/humidity</li>
                <li>• Water pump & relay</li>
                <li>• LCD display</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h4 className="font-semibold text-foreground mb-3">Programming</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Sensor data collection</li>
                <li>• WiFi connectivity</li>
                <li>• Web dashboard</li>
                <li>• Mobile app (React Native)</li>
                <li>• Database integration</li>
                <li>• Alert notifications</li>
              </ul>
            </div>
          </div>

          {/* Timeline & Milestones */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-8">
            <h4 className="font-semibold text-foreground mb-4">Development Timeline</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 w-20">Weeks 2-4</span>
                <span className="text-gray-700 dark:text-gray-300">Design and 3D print sensor housings and mounting system</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 w-20">Weeks 5-7</span>
                <span className="text-gray-700 dark:text-gray-300">Build and test sensor circuits, implement basic data collection</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 w-20">Weeks 8-10</span>
                <span className="text-gray-700 dark:text-gray-300">Develop web interface and mobile app, integrate automated watering</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 w-20">Weeks 11-12</span>
                <span className="text-gray-700 dark:text-gray-300">Final assembly, testing, documentation, and presentation preparation</span>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800 p-6">
            <h4 className="font-semibold text-foreground mb-3">Success Metrics</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The project will be considered successful if it can:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Accurately monitor soil moisture, light, and environmental conditions</li>
              <li>• Automatically water plants when soil moisture drops below threshold</li>
              <li>• Provide real-time data through a user-friendly web interface</li>
              <li>• Send notifications when manual intervention is needed</li>
              <li>• Operate reliably for extended periods without maintenance</li>
              <li>• Demonstrate measurable improvement in plant health</li>
            </ul>
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Reflection</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This project excites me because it combines multiple aspects of digital fabrication while solving 
            a real-world problem. It will challenge me to integrate 3D design, electronics, programming, and 
            user interface design. The iterative nature of the project aligns well with the course structure, 
            allowing me to build complexity week by week while applying newly learned skills.
          </p>
        </div>
      </div>
    </div>
  );
}
