class LocationValidator {
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371e3; // Radius of the Earth in meters
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in meters
    return distance;
  }

  isWithinDistance(lat1, lon1, lat2, lon2, maxDistanceMeters) {
    const distance = this.getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2);
    return distance <= maxDistanceMeters;
  }
}

module.exports = LocationValidator;
