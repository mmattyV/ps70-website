#include <ESP32Servo.h>

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
  Serial.println("\nBooting…");
  s1.attach();
  s2.attach();
}

void loop() {
  // put your main code here, to run repeatedly:
  int potVal1 = p1.read();
  int potVal2 = p2.read();

  Serial.printf("Pot 1: %d  Pot 2: %d\n", potVal1, potVal2);

  int servoVal1 = map(potVal1, 0, 4095, 0, 180);
  int servoVal2 = map(potVal2, 0, 4095, 0, 180);

  s1.move(servoVal1);
  s2.move(servoVal2);
}
