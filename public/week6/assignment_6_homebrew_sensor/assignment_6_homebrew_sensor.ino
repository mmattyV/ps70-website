long result;   //variable for the result of the tx_rx measurement.

class CapacitorSensor {
  public:
    CapacitorSensor(int t_pin, int a_pin, int n_samples, unsigned long wait_us = 100)
      : tx_pin(t_pin), analog_pin(a_pin), N_samples(n_samples), wait_us(wait_us) {}

    void begin() {
      pinMode(tx_pin, OUTPUT);
      digitalWrite(tx_pin, LOW);
      resetRun();
      done = false;
      have_last_value = false;
    }

    bool update() {
      if (done) return true;  // hold result until read()

      unsigned long now = micros();

      switch (phase) {
        case 0: // start a new sample
          digitalWrite(tx_pin, HIGH);
          read_high = analogRead(analog_pin);
          t_mark = now;
          phase = 1;
          break;
        
        case 1: // wait for wait_us and take second reading
          if ((unsigned long)(now - t_mark) >= wait_us) {
            digitalWrite(tx_pin, LOW);
            int read_low = analogRead(analog_pin);
            sum += (long)(read_high - read_low);
            samples_done++;
            phase = 0;
            if (samples_done >= N_samples) {
              last_value = sum;
              done = true;
              have_last_value = true;
              resetRun(); // prep for next cycle
            }
          }
          break;
      }
      return done;
    }

    // get finished result and clear "done" flag
    long read() {
      done = false;
      return last_value;
    }

    bool available() const { return have_last_value && done; }
  
  private:
    int tx_pin;
    int analog_pin;
    int N_samples;
    unsigned long wait_us;

    // state
    int phase = 0;  // 0 = start sample, 1 = waiting
    unsigned long t_mark = 0; // time marker from micros()
    int read_high = 0;
    long sum = 0;
    int samples_done = 0;

    // output
    long last_value = 0;
    bool done = false;
    bool have_last_value = false;

    void resetRun() {
      phase = 0;
      t_mark = 0;
      sum = 0;
      samples_done = 0;
    }
};

CapacitorSensor cs(33, 32, 100, 100);

void setup() {    
  Serial.begin(9600);
  cs.begin();
}

void loop() {
  if (cs.update()) {
    long v = cs.read();
    Serial.println(v);
  }
}