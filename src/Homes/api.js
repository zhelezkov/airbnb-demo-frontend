function mapHouseType(houseType) {
  switch (houseType) {
    case 'entire_home':
      return 'Entire house';
    default:
      return '';
  }
}

export function retrieveHomesData(offset = 0, limit = 6) {
  return fetch(`https://airbnb-demo-api.now.sh/v1/homes?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    .then(res => res.items)
    .then(res => res.map(home => ({
      id: home.id,
      title: home.name,
      image: home.images[0].picture,
      price: home.price,
      houseType: mapHouseType(home.kind),
      beds: home.bedsCount,
      reviews: home.reviewsCount,
      hostType: home.isSuperhost ? 'Superhost' : '',
      rating: Math.ceil(home.rating),
      lat: home.lat,
      lng: home.lng,
    })));
}
