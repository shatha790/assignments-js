//13.1
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
//13.2
bookMap.set('page',464);
//13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
//13.4
console.log(bookMap.size);
//13.5
if (bookMap.has('author')) console.log('The author is known');
