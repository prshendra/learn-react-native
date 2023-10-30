import { getCurrentPositionAsync, PermissionStatus } from "expo-location";

export async function getLocationAddress(lat, lng) {
  const locationApiUrl = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`;
  const response = await fetch(locationApiUrl);

  if (!response.ok) {
    return "Error getting location";
  }

  const data = await response.json();
  return data.display_name;
}

async function verifyPermissions(
  locationPermission,
  requestLocationPermission,
) {
  if (locationPermission.status === PermissionStatus.UNDETERMINED) {
    const permissionResponse = await requestLocationPermission();

    return permissionResponse.granted;
  }

  if (locationPermission.status === PermissionStatus.DENIED) {
    Alert.alert(
      "Insufficient Permissions!",
      "You need to grant location permissions to use this app.",
    );
    return false;
  }

  return true;
}

export async function getCurrentLocation(
  locationPermission,
  requestLocationPermission,
) {
  const granted = await verifyPermissions(
    locationPermission,
    requestLocationPermission,
  );

  if (!granted) {
    return;
  }

  const location = await getCurrentPositionAsync();

  const currentLocation = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
  return currentLocation;
}
