#define led 13    // the pin that the LED is atteched to
#define sensor 2  // the pin that the sensor is atteched to
#define state LOW // by default, no motion detected
#define val 0     // variable to store the sensor status (value)

#define echoPin 3 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 4 // attach pin D3 Arduino to pin Trig of HC-SR04
#define ledPin 12 // led pin

// defines variables
long duration; // variable for the duration of sound wave travel
int distance;  // variable for the distance measurement

void setup()
{
    pinMode(led, OUTPUT);                             // initalize LED as an output
    pinMode(sensor, INPUT);                           // initialize sensor as an input
    pinMode(trigPin, OUTPUT);                         // Sets the trigPin as an OUTPUT
    pinMode(echoPin, INPUT);                          // Sets the echoPin as an INPUT
    Serial.begin(9600);                               // // Serial Communication is starting with 9600 of baudrate speed
    Serial.println("Ultrasonic Sensor HC-SR04 Test"); // print some text in Serial Monitor
    Serial.println("with Arduino UNO R3");
}

void loop()
{
    val = digitalRead(sensor); // read sensor value
    if (val == HIGH)
    {                            // check if the sensor is HIGH
        digitalWrite(led, HIGH); // turn LED ON

        if (state == LOW)
        {
            Serial.println("Motion detected!");
            state = HIGH; // update variable state to HIGH
        }
    }
    else
    {
        digitalWrite(led, LOW); // turn LED OFF

        if (state == HIGH)
        {
            Serial.println("Motion stopped!");
            state = LOW; // update variable state to LOW
        }
    }
    // Clears the trigPin condition
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(echoPin, HIGH);
    // Calculating the distance
    distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
    // Displays the distance on the Serial Monitor
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");
    if (distance <= 5)
        digitalWrite(ledPin, HIGH);
    else
        digitalWrite(ledPin, LOW);
}