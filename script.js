const googleDB = [
  'doge.com',
  'doges.com',
  'dogepictures.com',
  'cats.com',
  'fish.com',
  'superbowls.com',
  'wowmuchdoge.com'
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('doge', googleDB));

module.exports = googleSearch;
