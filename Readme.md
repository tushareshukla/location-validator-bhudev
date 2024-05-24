# Location Validator Bhudev
Location vaildation of two points with a specific distance in meters.

## Installation

```bash
npm install location-validator-bhudev
```
# Usage 

```bash
const LocationValidator = require('location-validator');

const validator = new LocationValidator();

const validateFromLat = 37.7749; // Example latitude of the first location
const validateFromLon = -122.4194; // Example longitude of the first location
const validateWithLat = 37.7849; // Example latitude of the second location
const validateWithLon = -122.4294; // Example longitude of the second location
const maxDistanceMeters = 1000; // Maximum distance in meters

const isWithin = validator.isWithinDistance(validateFromLat, validateFromLon, validateWithLat, validateWithLon, maxDistanceMeters);

if (isWithin) {
  console.log('The location is within the specified distance.');
} else {
  console.log('The location is not within the specified distance.');
}
```