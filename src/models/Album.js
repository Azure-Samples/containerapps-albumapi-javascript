const albums = [
  {
    id: 1,
    title: "Sgt Peppers Lonely Hearts Club Band",
    artist: "The Beatles",
    price: 56.99,
    image_url:
      "https://www.listchallenges.com/f/items/f3b05a20-31ae-4fdf-aebd-d1515af54eea.jpg",
  },
  {
    id: 2,
    title: "Pet Sounds",
    artist: "The Beach Boys",
    price: 17.99,
    image_url:
      "https://www.listchallenges.com/f/items/fdef1440-e979-455a-90a7-14e77fac79af.jpg",
  },
  {
    id: 3,
    title: "The Beatles: Revolver",
    artist: "The Beatles",
    price: 39.99,
    image_url:
      "https://www.listchallenges.com/f/items/19ff786d-d7a4-4fdc-bee2-59db8b33370d.jpg",
  },
  {
    id: 4,
    title: "Highway 61 Revisited",
    artist: "Bob Dylan",
    price: 39.99,
    image_url:
      "https://www.listchallenges.com/f/items/428cf087-6c24-45ad-bf8c-bd3c57ddf444.jpg",
  },
  {
    id: 5,
    title: "Rubber Soul",
    artist: "The Beatles",
    price: 39.99,
    image_url:
      "https://www.listchallenges.com/f/items/ebc794ef-1491-4672-a007-0081edc1a8ae.jpg",
  },
  {
    id: 6,
    title: "What's Going On",
    artist: "Marvin Gaye",
    price: 39.99,
    image_url:
      "https://www.listchallenges.com/f/items/e5250d6c-1c15-4617-a943-b27e87e21704.jpg",
  },
];

const getAlbums = async function () {
  return Promise.resolve(albums);
};

exports.getAlbums = getAlbums;
