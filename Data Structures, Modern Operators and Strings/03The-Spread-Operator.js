//3.1
const author1=[...books[0].author];
const author2=[...books[1].author];
let bookAuthors=[...author1,...author2];
console.log(bookAuthors);
//3.2
spellWord=function(str){
  console.log(...str)
}
spellWord('JavaScript');
