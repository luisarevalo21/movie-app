const searchStrings = [
  "avengers",
  "batman",
  "superman",
  "spiderman",
  "ironman",
  "captain america",
  "thor",
  "black widow",
  "hulk",
  "wonder",
];

export const randomSearch = () => {
  const randomIndex = Math.floor(Math.random() * searchStrings.length);
  return searchStrings[randomIndex];
};
