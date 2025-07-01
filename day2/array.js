console.log(typeof  Array())
const listName = ["saugat","prashant","sudip","anuj","nawal"];
const sortedList = listName.sort()
console.log(sortedList);
const newlistName = listName.toString()
console.log(typeof listName,typeof newlistName)

const parts = ["shoulder,knees"];
const lyrics = ["head",...parts,"foots"]
console.log(lyrics)