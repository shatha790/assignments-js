//7.1

for (let i = 0; i < books.length; i++) {
console.log(books[i].edition||=1);
}

//7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
}
}
