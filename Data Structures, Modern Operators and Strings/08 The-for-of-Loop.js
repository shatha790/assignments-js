//8.1
let pageSum =0
for(let book of books){
  pageSum+=book.pages;
}
console.log(pageSum);
//8.2
let allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author)
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }

}
//8.3
 for(const [i, ath] of allAuthors.entries())
 {
console.log(`${i + 1}: ${ath}`);
}
