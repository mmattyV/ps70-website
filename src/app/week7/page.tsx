'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Week7() {
  const [copied, setCopied] = useState(false);

  const arduinoCode = `#include <ESP32Servo.h>

class Potentiometer {
  int potPin;

  public:
    Potentiometer(int pin) {
      potPin = pin;
      pinMode(potPin, INPUT);
    }

    int read() {
      return analogRead(potPin);
    }
};

// Wrapper function to add more functionality later
class ServoWrapper {
  Servo servo;
  int servoPin;
  int startPos;

  public:
    ServoWrapper(int pin, int pos) {
      servoPin = pin;
      startPos = pos;
    }

    void attach() {
      servo.attach(servoPin);
      servo.write(startPos);
    }

    void move(int pos) {
      servo.write(pos);
    }
};

ServoWrapper s1(32, 0);
ServoWrapper s2(33, 0);
Potentiometer p1(34);
Potentiometer p2(35);

void setup() {
  Serial.begin(115200);
  delay(200);                         // let USB/driver settle
  Serial.println("\\nBooting…");
  s1.attach();
  s2.attach();
}

void loop() {
  // put your main code here, to run repeatedly:
  int potVal1 = p1.read();
  int potVal2 = p2.read();

  Serial.printf("Pot 1: %d  Pot 2: %d\\n", potVal1, potVal2);

  int servoVal1 = map(potVal1, 0, 4095, 0, 180);
  int servoVal2 = map(potVal2, 0, 4095, 0, 180);

  s1.move(servoVal1);
  s2.move(servoVal2);
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(arduinoCode);
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
              Week 7
            </span>
            <span className="text-sm text-white/60">
              October 2025
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Minimum Viable Product: Pan-Tilt Turret System
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Building the mechanical foundation for the AI turret: complete CAD design, 3D printing, assembly, 
            and servo control with oscilloscope analysis of PWM signals. Project updated to use laser pointer targeting 
            for improved safety and continuous operation.
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Project Overview</h2>
            </div>
          </div>
          
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Minimum Viable Product</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              This week focused on tackling the most challenging aspects of my final project by developing both the hardware 
              and software components independently. I completed the mechanical pan-tilt servo mechanism and integrated it with 
              electronic control, while also building upon Week 6&apos;s ESP32-CAM human detection system. These parallel development 
              tracks represent the core subsystems that will combine into the final AI-controlled turret.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Mechanical Design
                </h4>
                <p className="text-white/80">
                  Complete CAD model in Fusion 360 with integrated gear train, servo mounts, and lazy susan bearing 
                  for smooth 360° rotation. Fully assembled and tested hardware platform.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Electronic Control
                </h4>
                <p className="text-white/80">
                  ESP32 microcontroller with dual potentiometer inputs controlling two MG996R servos using C++ class 
                  structure and non-blocking code. Manual control validated before AI integration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Vision System
                </h4>
                <p className="text-white/80">
                  ESP32-CAM with Edge Impulse-trained human detection model (from Week 6) provides the computer vision 
                  subsystem. Hardware and software developed independently, ready for integration.
                </p>
              </div>
            </div>
          </div>

          <div className="text-section rounded-2xl p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">MVP Development Strategy</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              By developing the mechanical platform and vision system as independent subsystems, I can test and refine each 
              component before integration. The pan-tilt mechanism proves the hardware can handle servo loads and provide 
              smooth motion, while the ESP32-CAM system (Week 6) demonstrates reliable human detection. The next phase will 
              combine these systems, replacing manual potentiometer control with automated targeting based on camera input.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90"><strong className="text-orange-300">Hardware:</strong> Pan-tilt platform with laser pointer targeting (safer than projectiles, no reloading)</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90"><strong className="text-red-300">Software:</strong> ESP32-CAM human detection with 82% training accuracy for continuous targeting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">System Demonstration</h2>
          </div>

          <div className="text-section rounded-2xl p-8">
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video 
                  controls 
                  className="w-full h-auto"
                  preload="metadata"
                  playsInline
                >
                  <source src="/ps70-website/week7/demo_video.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-white/60 mt-4">
                Pan-tilt mechanism controlled by dual potentiometers - smooth servo motion across full range
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/whole_mvp.jpg" 
                    alt="Complete MVP assembly"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Complete MVP assembly with breadboard and power supply</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/pan_tilt.jpg" 
                    alt="Pan-tilt mechanism close-up"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Pan-tilt mechanism with gear train and servo mounts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mechanical Design */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Mechanical Design & Fabrication</h2>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">CAD Model</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The pan-tilt platform was designed in Fusion 360 with careful consideration for servo mounting, gear ratios, 
              and structural rigidity. The design incorporates a lazy susan bearing for the pan axis and a direct-drive 
              servo for the tilt axis, providing smooth motion across the full range of movement.
            </p>

            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50">
                <iframe 
                  src="https://college964.autodesk360.com/shares/public/SH28cd1QT2badd0ea72b26980fa3661d0e3b?mode=embed" 
                  width="100%" 
                  height="480" 
                  allowFullScreen 
                  className="w-full"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              <p className="text-center text-white/60 mt-4">
                Interactive 3D model of the pan-tilt turret platform
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-blue-300">Download STL:</strong> The complete assembly is available as an STL file for 
                3D printing.{' '}
                <a 
                  href="/ps70-website/week7/AI Turret Platform (MVP).stl" 
                  download
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Download AI Turret Platform (MVP).stl
                </a>
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
              <Image 
                src="/ps70-website/week7/gear_train.jpg" 
                alt="Gear train mechanism"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-white/60 text-sm mb-6">Gear train and servo mounting detail</p>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Design Features</h4>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-purple-300">Pan Axis:</strong> 360° rotation using lazy susan bearing with gear reduction for precise control</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-pink-300">Tilt Axis:</strong> Direct servo drive for vertical movement with integrated mounting bracket</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-purple-300">Servo Mounts:</strong> Custom-designed brackets to securely hold MG996R servos in position</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2"></span>
                  <span><strong className="text-pink-300">Material:</strong> PLA filament with 15% infill for strength while minimizing weight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Electronic Control System */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Electronic Control System</h2>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Circuit Design</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              The control system uses an ESP32 microcontroller to read two potentiometers and control two MG996R servos. 
              The servos are powered by a separate 5V AC-to-DC power supply to handle their current requirements, while 
              the potentiometers run on the ESP32&apos;s 3.3V rail.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/esp32_servo_pot_schematic_minimal_v5.png" 
                    alt="Circuit schematic diagram"
                    width={800}
                    height={600}
                    className="w-full h-auto bg-white p-4"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Circuit schematic showing connections and power distribution</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/circuit.jpg" 
                    alt="Physical circuit wiring"
                    width={800}
                    height={600}
                    className="w-full h-auto bg-white/5"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Physical breadboard implementation with components</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Circuit Connections</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Input Devices (Potentiometers)
                  </h5>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• <strong className="text-blue-300">Potentiometer 1:</strong> GPIO 34 (analog input)</li>
                    <li>• <strong className="text-blue-300">Potentiometer 2:</strong> GPIO 35 (analog input)</li>
                    <li>• <strong className="text-blue-300">Power:</strong> 3.3V from ESP32</li>
                    <li>• <strong className="text-blue-300">Ground:</strong> Common ground with ESP32</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Output Devices (Servos)
                  </h5>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• <strong className="text-cyan-300">Servo 1 (Pan):</strong> GPIO 32 (PWM signal)</li>
                    <li>• <strong className="text-cyan-300">Servo 2 (Tilt):</strong> GPIO 33 (PWM signal)</li>
                    <li>• <strong className="text-cyan-300">Power:</strong> 5V external power supply</li>
                    <li>• <strong className="text-cyan-300">Ground:</strong> Common ground with ESP32</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-300">Power Design Note:</strong> The servos are powered from a separate 5V power 
                supply on isolated breadboard rails to prevent voltage drops and noise from affecting the ESP32. Only the ground 
                and signal wires connect between the ESP32 and servos, ensuring clean PWM signals while the servos draw their 
                high current from the dedicated supply.
              </p>
            </div>
          </div>

          {/* Code Implementation */}
          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Code Implementation</h3>
            <p className="text-white/80 mb-4">
              The code uses C++ classes to encapsulate potentiometer reading and servo control functionality. The ServoWrapper 
              and Potentiometer classes provide clean interfaces for hardware interaction, making the code modular and easy to 
              extend. The loop continuously reads potentiometer values and maps them to servo positions without using delay().
            </p>
            
            <div className="bg-gray-900/50 rounded-xl p-6 overflow-x-auto relative">
              <button
                onClick={handleCopyCode}
                className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all duration-200 flex items-center gap-2 border border-white/20 z-10"
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
              <pre className="text-sm text-white/90">
                <code>{arduinoCode}</code>
              </pre>
            </div>

            <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-white/80 text-sm">
                <strong className="text-green-300">Download:</strong> Get the complete Arduino sketch:{' '}
                <a 
                  href="/ps70-website/week7/assignment_7/assignment_7.ino" 
                  download
                  className="text-green-400 hover:text-green-300 underline transition-colors"
                >
                  assignment_7.ino
                </a>
              </p>
            </div>

            <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-purple-300">Code Highlights:</strong> The Potentiometer class encapsulates analog reading, 
                while ServoWrapper provides a clean interface for servo control with initialization and movement methods. The map() 
                function converts the ESP32&apos;s 12-bit ADC range (0-4095) to servo angles (0-180°), providing intuitive control 
                through the potentiometers.
              </p>
            </div>
          </div>
        </div>

        {/* Oscilloscope Analysis */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Oscilloscope Analysis: PWM Signals</h2>
          </div>

          <div className="text-section rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Signal Characteristics</h3>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Using an oscilloscope, I measured the PWM signals sent from the ESP32 (pins 32 and 33) to the MG996R servos. 
              The analysis revealed the timing characteristics of standard RC servo control signals and how pulse width 
              modulation translates to servo position.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/smallest_wave.jpg" 
                    alt="Shortest pulse width"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Minimum pulse: 520µs (0° position)</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/between_waves.jpg" 
                    alt="PWM signal period"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Signal period: 20ms between pulses (50Hz)</p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl mb-3">
                  <Image 
                    src="/ps70-website/week7/largest_wave.jpg" 
                    alt="Longest pulse width"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-white/60 text-sm">Maximum pulse: 2.44ms (180° position)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Measured Values</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Signal Frequency
                  </h5>
                  <ul className="text-white/80 space-y-2">
                    <li>• <strong className="text-orange-300">Period:</strong> 20 ms</li>
                    <li>• <strong className="text-orange-300">Frequency:</strong> 50 Hz</li>
                    <li>• <strong className="text-orange-300">Type:</strong> Fixed clock PWM signal</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    Pulse Width Range
                  </h5>
                  <ul className="text-white/80 space-y-2">
                    <li>• <strong className="text-red-300">Minimum:</strong> 520 µs (0°)</li>
                    <li>• <strong className="text-red-300">Maximum:</strong> 2.44 ms (180°)</li>
                    <li>• <strong className="text-red-300">Range:</strong> 1.92 ms total variation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Analysis & Findings</h4>
              <div className="text-white/80 space-y-4">
                <p>
                  <strong className="text-blue-300">Fixed Clock Operation:</strong> The servo operates on a fixed 50 Hz clock, 
                  meaning it receives a control pulse every 20 milliseconds. This is standard for RC servos and ensures consistent, 
                  predictable behavior.
                </p>
                <p>
                  <strong className="text-purple-300">Pulse Width Modulation:</strong> The position is controlled by varying the 
                  pulse width within each 20ms period. A 520µs pulse commands 0°, while a 2.44ms pulse commands 180°. The servo&apos;s 
                  internal control circuitry decodes this pulse width and drives the motor to the corresponding position.
                </p>
                <p>
                  <strong className="text-blue-300">Standard Servo Protocol:</strong> These measurements align with standard RC servo 
                  specifications, which typically use 1-2ms pulse widths for the full 0-180° range. The MG996R extends this slightly 
                  (0.52-2.44ms) for its full mechanical range.
                </p>
                <p>
                  <strong className="text-purple-300">ESP32 PWM Generation:</strong> The ESP32Servo library generates these precise 
                  timing signals using the microcontroller&apos;s hardware PWM channels, ensuring accurate and jitter-free control even 
                  while the main loop executes other code.
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
          <p className="text-xl text-white/80 leading-relaxed mb-4">
            This week&apos;s MVP development proved that the mechanical foundation of my turret project is sound. Successfully 
            designing, printing, and assembling the pan-tilt mechanism validated my CAD skills and demonstrated that the 
            structure can handle the servo loads. The smooth operation across the full range of motion gives me confidence 
            that this platform will work well for the final AI-controlled system.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            The oscilloscope analysis was particularly enlightening—seeing the actual PWM signals and understanding how 
            microsecond-level timing translates to precise mechanical positioning deepened my appreciation for servo control. 
            The 50 Hz update rate means the system can respond to targeting commands 50 times per second, which should be 
            more than adequate for tracking moving targets. Next steps include integrating the ESP32-CAM vision system and 
            implementing the automatic targeting algorithms.
          </p>
        </div>
      </div>
    </div>
  );
}

