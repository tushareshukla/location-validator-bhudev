class LocationValidator {
    getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
      const R = 6371e3; // Radius of the Earth in meters
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in meters
      return distance;
    }
  
    isWithinDistance(lat1, lon1, lat2, lon2, maxDistanceMeters) {
      const distance = this.getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2);
      return distance <= maxDistanceMeters;
    }
  }
  
  module.exports = LocationValidator;
  