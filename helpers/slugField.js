module.exports = (url) => {
  url = url.toLowerCase();
  hashTable = [
    ["ğ", "g"],
    ["ı", "i"],
    ["ş", "s"],
    ["ü", "u"],
    ["ö", "o"],
    ["ç", "c"],
    [" ", "-"],
  ];
  for (let i = 0; i < hashTable.length; i++) {
    url = url.replaceAll(hashTable[i][0], hashTable[i][1]);
  }
  return url;
};
