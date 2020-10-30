// 2.배열 출력 
var a =  1
let b = 2
cosnt c = 3

const books = ['html', 'CSS', 'javascript','vue']
console.log(books)
console.log(books.length) //3
console.log(books[0])
console.log(books[books.length - 1])

console.clear()
// 3.loop 출력 
// -for문
for (let i=0; i < books.length; i++){
  console.log(books[i])
}

// for of 
for( let book of books ) {
  console.log (books)
}



// .forEach
books.foreach(book => {
  console.log(book + 'hello')
})

// 4.추가,삭제
- 뒤에 추가

// - splice: 지정한 위치에서 삭제, 추가
books.splice(2,1, 'react', 'vue')
console.log(books)

//-두개의 배열을 합치기
const books2= ['git', 'nodejs']
books.newbook = books.concat(books2)
console.log(newbook)

// 5.검색
console.clear()
console.log(books)
console.log(books.indexOf('react'))
console.log(books.includes('css'))
console.log(books.includes('github'))

