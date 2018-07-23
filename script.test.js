const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuffs.com',
  'goldfish.com',
  'cookies.com'
]

it('this is a test', () => {
  googleSearch('testtest', dbMock)
})
