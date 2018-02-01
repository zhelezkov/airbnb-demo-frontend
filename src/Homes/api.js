const houseTypes = {
  entire_home: 'Entire house',
  private_room: 'Private room',
};

const normalizeData = (home) => ({
  id: home.id,
  title: home.name,
  image: home.images[0].picture,
  price: home.price,
  houseType: houseTypes[home.kind],
  beds: home.bedsCount,
  reviews: home.reviewsCount,
  hostType: home.isSuperhost ? 'Superhost' : '',
  rating: Math.ceil(home.rating),
  lat: home.lat,
  lng: home.lng,
});

export function retrieveHomesData(offset = 0, limit = 6) {
  return fetch(`https://airbnb-demo-api.now.sh/v1/homes?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    .then(res => res.items.map(normalizeData));
}
