export const displayMap = (locations) => {
  const map = L.map('map');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const bounds = [];

  locations.forEach((loc) => {
    const coords = [loc.coordinates[1], loc.coordinates[0]];

    L.marker(coords).addTo(map).bindPopup(loc.description);

    bounds.push(coords);
  });

  map.fitBounds(bounds, {
    padding: [50, 50],
    maxZoom: 12,
  });
};
