#include <IRremote.h>

const int IR_SENSOR_PIN = 2;

void setup() {
  Serial.begin(9600);
  IrReceiver.begin(IR_SENSOR_PIN);
}

void loop() {
  if (IrReceiver.decode()) {
    Serial.println(IrReceiver.decodedIRData.decodedRawData, HEX);
    IrReceiver.resume();
  }
  delay(100);
}