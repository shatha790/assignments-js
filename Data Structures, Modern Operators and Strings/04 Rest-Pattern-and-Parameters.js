//4.1
const [mainKeyword,...rest]=books[0].keywords;
console.log(mainKeyword,rest);

// 4.2
const{publisher:bookPublisher,...restOfTheBook}=books[1]
console.log(bookPublisher,restOfTheBook);

//4.3
printBookAuthorsCount=function(title,...authors){
  console.log(`"The book "${title}" has ${authors.length} authors"`)
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
