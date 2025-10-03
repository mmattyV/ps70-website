'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Week4() {
  const [copied, setCopied] = useState(false);

  const code = `const int A1A = 26; // PWM Speed
const int A1B = 27; // direction
int motorVal; // motor

// potentiometer pins
int potPin = 12;
int potVal;

// setting PWM properties
const int freq = 5000;
const int resolution = 8;

void setup() {
  pinMode(A1A, OUTPUT); // specify these pins as outputs
  pinMode(A1B, OUTPUT);

  pinMode(potPin, INPUT); // specify these pins as inputs

  ledcAttach(A1A, freq, resolution);
  ledcWrite(A1A, 0);   // start with the motors off 
}

void loop() {
  potVal = analogRead(potPin); // read pot value
  motorVal = map(potVal, 0, 4095, 0, 255); // map pot reading to 0-255 scale
  motorA(LOW, motorVal);  // turn motor CW depending on pot value
}


// This is a custom function to drive Motor A
// inputs: direction (HIGH/LOW), speed (0-255)
// outputs: motor control

void motorA(byte d, int s) {
  if(d == 1){
    ledcWrite(A1A, 255-s); 
    digitalWrite(A1B, HIGH); 
  } else if (d == 0){
    ledcWrite(A1A, s); 
    digitalWrite(A1B, LOW);
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Week 4
            </span>
            <span className="text-sm text-white/60">
              October 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Arduino-Controlled Kinetic Sculpture
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Building on Week 3&apos;s kinetic sculpture depicting the thief on the cross by adding Arduino-based speed 
            control through a potentiometer, upgrading to wood construction, and solving mechanical friction challenges.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Overview</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Iteration & Improvement</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This project builds upon Week 3&apos;s kinetic sculpture by adding microcontroller-based speed control 
              and implementing significant material and design improvements. Using an ESP32 microcontroller and a 
              potentiometer, the sculpture now features variable-speed control, allowing users to adjust the oscillation 
              rate of the resurrection movement in real-time.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  New Features
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• ESP32 microcontroller integration</li>
                  <li>• Potentiometer-based speed control</li>
                  <li>• Arduino programming for motor control</li>
                  <li>• Real-time variable speed adjustment</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Material Upgrades
                </h4>
                <ul className="text-white/80 space-y-2 ml-5">
                  <li>• 6mm plywood instead of cardboard</li>
                  <li>• Wood yoke replacing copper wire</li>
                  <li>• Improved hole tolerances and sizing</li>
                  <li>• M3, M4, and M5 screws for assembly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Live Demo</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <div className="mb-6">
              <video 
                controls 
                className="w-full rounded-xl shadow-2xl"
                preload="metadata"
              >
                <source src="/ps70-website/week4/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Variable Speed Control in Action
              </h4>
              <p className="text-white/80 leading-relaxed text-lg">
                Watch the Arduino-controlled sculpture in action! The potentiometer allows smooth adjustment of the 
                motor speed, controlling how fast the figure of the thief oscillates on the cross. The improved wood 
                construction and chamfered rails enable smooth, consistent motion without binding or excessive friction.
              </p>
            </div>
          </div>
        </div>

        {/* Build Photos */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Construction & Assembly</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Complete Build */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week4/whole_build.jpeg" 
                  alt="Complete Arduino-Controlled Sculpture" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Complete Assembly
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The finished sculpture showcasing the upgraded wood construction and integrated electronics. 
                  The 6mm plywood provides significantly better structural rigidity compared to the cardboard 
                  version, while the hot glue assembly creates strong joints between panels.
                </p>
              </div>
            </div>

            {/* Box Front */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week4/box_front.jpeg" 
                  alt="Front View of Wood Housing" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                  Front View - Housing
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Front view of the plywood housing showing the clean laser-cut edges and cross structure. 
                  The wood material provides a more durable and aesthetically pleasing appearance while 
                  maintaining the same geometric design from the CAD model.
                </p>
              </div>
            </div>

            {/* Box Back */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week4/box_back.jpeg" 
                  alt="Back View Showing Internal Mechanism" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Back View - Mechanism Access
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Rear view revealing the internal scotch yoke mechanism and how the wood yoke replaced the 
                  copper wire design. The chamfered rail edges visible here were crucial for reducing friction 
                  and enabling smooth motion throughout the full range of travel.
                </p>
              </div>
            </div>

            {/* Circuit */}
            <div className="text-section rounded-2xl p-6">
              <div className="mb-6">
                <Image 
                  src="/ps70-website/week4/circuit.jpeg" 
                  alt="ESP32 and Potentiometer Circuit" 
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
                  Control Circuit
                </h4>
                <p className="text-white/80 leading-relaxed">
                  The ESP32 microcontroller connected to the potentiometer and DC motor. The potentiometer 
                  (pin 12) reads analog values from 0-4095, which are mapped to PWM duty cycles of 0-255 
                  to control motor speed. The motor control pins (26 and 27) handle speed and direction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Circuit Diagram */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Circuit Diagram</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
            <div className="mb-6">
              <Image 
                src="/ps70-website/week4/esp32_l298n_pot_diagram_v4.png" 
                alt="ESP32, L298N Motor Driver, and Potentiometer Circuit Diagram" 
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl shadow-2xl bg-white/90 p-4"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white mb-4">
                Complete Wiring Schematic
              </h4>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                The circuit diagram shows the complete wiring between the ESP32 microcontroller, L298N motor driver, 
                DC motor, and potentiometer. The L298N motor driver (Channel A) interfaces between the ESP32&apos;s 
                logic-level signals and the motor. Both the motor controller and potentiometer are powered by the 
                ESP32&apos;s 5V pin, simplifying the power distribution in this compact design.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Motor Control
                  </h5>
                  <ul className="text-white/70 text-sm space-y-1 ml-4">
                    <li>• <code className="text-blue-300">OUT1/OUT2</code>: Motor terminals</li>
                    <li>• <code className="text-blue-300">ENA (Pin 26)</code>: PWM speed control</li>
                    <li>• <code className="text-blue-300">IN1 (Pin 27)</code>: Direction control</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Power Supply
                  </h5>
                  <ul className="text-white/70 text-sm space-y-1 ml-4">
                    <li>• <code className="text-blue-300">5V</code>: Powers L298N and potentiometer</li>
                    <li>• <code className="text-blue-300">GND</code>: Common ground</li>
                    <li>• All powered from ESP32 5V pin</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Potentiometer
                  </h5>
                  <ul className="text-white/70 text-sm space-y-1 ml-4">
                    <li>• <code className="text-blue-300">VCC</code>: 5V from ESP32</li>
                    <li>• <code className="text-blue-300">Wiper (Pin 12)</code>: Analog input</li>
                    <li>• <code className="text-blue-300">GND</code>: Ground connection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arduino Code */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Arduino Programming</h2>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Motor Control Code</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The Arduino sketch uses PWM (Pulse Width Modulation) to control motor speed based on potentiometer input. 
              The ESP32 reads analog values from the potentiometer and maps them to appropriate PWM duty cycles for 
              smooth speed control.
            </p>
            
            <div className="relative">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10 mb-6 overflow-x-auto">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all duration-200 flex items-center gap-2 border border-white/20"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
                <pre className="text-sm text-gray-300 leading-relaxed">
                  {code}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Code Explanation</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    Pin Configuration
                  </h5>
                  <ul className="text-white/70 text-sm space-y-1 ml-4">
                    <li>• <code className="text-blue-300">Pin 26 (A1A)</code>: PWM speed control</li>
                    <li>• <code className="text-blue-300">Pin 27 (A1B)</code>: Motor direction</li>
                    <li>• <code className="text-blue-300">Pin 12</code>: Potentiometer input</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    PWM Settings
                  </h5>
                  <ul className="text-white/70 text-sm space-y-1 ml-4">
                    <li>• <code className="text-blue-300">Frequency</code>: 5000 Hz</li>
                    <li>• <code className="text-blue-300">Resolution</code>: 8-bit (0-255)</li>
                    <li>• <code className="text-blue-300">Input Range</code>: 0-4095 (12-bit ADC)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-4">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  How It Works
                </h5>
                <ol className="text-white/70 text-sm space-y-2 ml-4 list-decimal">
                  <li>The potentiometer is read using <code className="text-blue-300">analogRead()</code>, returning values from 0 to 4095</li>
                  <li>The <code className="text-blue-300">map()</code> function converts this to 0-255 for PWM duty cycle</li>
                  <li>The <code className="text-blue-300">motorA()</code> function sets direction (LOW for one direction) and speed</li>
                  <li>PWM controls motor speed smoothly across the full range based on potentiometer position</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Design Improvements */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Improvements from Week 3</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                CAD Model Refinements
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                While reusing the same base CAD model from Week 3, I made critical modifications to improve 
                functionality and reduce friction:
              </p>
              <ul className="text-white/70 space-y-2 ml-5">
                <li>• Adjusted hole placement for better component alignment</li>
                <li>• Increased hole sizes for reduced friction on moving parts</li>
                <li>• Optimized tolerances for wood material properties</li>
                <li>• Planned for M3, M4, and M5 screw mounting points</li>
              </ul>
            </div>

            <div className="text-section rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                Material Upgrade: Plywood
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                Switching from 6mm cardboard to 6mm plywood brought significant improvements:
              </p>
              <ul className="text-white/70 space-y-2 ml-5">
                <li>• Much greater structural rigidity and durability</li>
                <li>• Cleaner laser-cut edges with no fraying</li>
                <li>• Better dimensional stability (no warping)</li>
                <li>• More professional appearance</li>
                <li>• Stronger mounting points for screws</li>
              </ul>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Assembly Method Changes</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg mb-4">
              The construction approach evolved significantly from the Week 3 cardboard version:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Structural Assembly</h5>
                <p className="text-white/70 text-sm">
                  Hot glue replaced finger joints for the box assembly, providing faster construction and 
                  stronger bonds with the plywood material.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Moving Parts</h5>
                <p className="text-white/70 text-sm">
                  M3, M4, and M5 screws were used for all moving parts and motor mounting, providing adjustable, 
                  secure connections that can be disassembled for maintenance.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Wood Yoke</h5>
                <p className="text-white/70 text-sm">
                  The copper wire yoke was replaced with a laser-cut wood yoke, providing better strength 
                  and more precise geometry for the scotch yoke mechanism.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Motor Mounting</h5>
                <p className="text-white/70 text-sm">
                  Properly sized screw holes allowed for secure motor mounting with metal screws, eliminating 
                  the instability issues from the Week 3 version.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                Challenge: Excessive Friction
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The primary challenge was excessive friction in the scotch yoke mechanism. The wood yoke 
                would bind against the rails, preventing smooth motion and causing the motor to stall or 
                move erratically. Writing the program was straightforward, but getting the moving parts to 
                move smoothly proved to be much more difficult due to excessive friction between components.
              </p>
            </div>

            <div className="text-section rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                Solution: Chamfered Rails
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The solution was to chamfer the edges of the scotch yoke rails. This reduced contact area 
                and eliminated sharp edges that were creating excessive drag.
              </p>
              <ul className="text-white/70 space-y-2 ml-5 text-sm">
                <li>• Reduced surface contact between yoke and rails</li>
                <li>• Eliminated binding at entry/exit points</li>
                <li>• Enabled smooth motion throughout full travel</li>
                <li>• Maintained structural integrity of mechanism</li>
              </ul>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Programming vs. Mechanical Engineering</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              This project highlighted an important lesson: in mechatronics projects, the software is often the 
              easiest part. The Arduino code was straightforward and worked correctly on the first try. The real 
              challenge was in the mechanical design - ensuring proper tolerances, managing friction, and creating 
              reliable physical connections. Success required iteration and hands-on problem-solving with the physical 
              mechanism until the motion was smooth and reliable.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <div className="text-section rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
                <ul className="text-white/80 space-y-1 ml-5 text-sm">
                  <li>• 6mm plywood sheets</li>
                  <li>• Wood yoke component</li>
                  <li>• Hot glue assembly</li>
                  <li>• M3, M4, M5 screws</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Electronics
                </h5>
                <ul className="text-white/80 space-y-1 ml-5 text-sm">
                  <li>• ESP32 microcontroller</li>
                  <li>• DC motor with driver</li>
                  <li>• Potentiometer (pin 12)</li>
                  <li>• PWM control (5kHz, 8-bit)</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Fabrication
                </h5>
                <ul className="text-white/80 space-y-1 ml-5 text-sm">
                  <li>• Laser-cut plywood parts</li>
                  <li>• Chamfered rail edges</li>
                  <li>• Modified CAD tolerances</li>
                  <li>• Precision screw holes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="text-section rounded-2xl p-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white">Reflection</h3>
          </div>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            This project demonstrated the power of iteration in engineering design. By building upon Week 3&apos;s 
            foundation, I could focus on specific improvements rather than starting from scratch. The material upgrade 
            to plywood dramatically improved durability and aesthetics, while the Arduino integration added meaningful 
            interactivity through speed control.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            The most valuable lesson was understanding that successful mechatronics requires balancing software and 
            hardware skills. While the Arduino programming came naturally and worked immediately, solving the mechanical 
            friction issues required careful analysis, experimentation with chamfering techniques, and hands-on 
            problem-solving. This experience reinforced that physical prototyping and iteration are just as important 
            as clean code in creating functional interactive systems.
          </p>
        </div>
      </div>
    </div>
  );
}

