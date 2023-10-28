export async function getLocationAddress(lat, lng) {
  const locationApiUrl = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`;
  const response = await fetch(locationApiUrl);

  if (!response.ok) {
    return "Error getting location";
  }

  const data = await response.json();
  return data.display_name;
}
