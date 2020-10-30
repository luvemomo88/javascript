// 1.function 
// - 함수선언과 함수호출
(function myfunc() {
  console.log('안녕, 자바스크립트~~~')
})


const a = 10

const sayhello = function() {
  console.log('hello')
}


sayhello()


// 2.매개변수 Parameter
function printmessage(message){
  console.log(message)
}

printmessage('하하하')
printmessage('파파파')

// 3.기본 파라미터
function showinfo(title, name = '스티브잡스') {
  console.log('${title} by ${name}')
}

showinfo('게르니카','피카소')
showinfo('풍경')

// 4.Rest 파라미터/spread 연산자(es6)
function printall(...items) {
  // for(let i = 0; i < items.length; i++){
  //   console.log(items[i])
  // }

  for(const item of items){
    console.log(item)
  }

}
printall('봄','여름','가을','겨울','안녕')

// 5.Scope
let movie = '하하하'

function paintmovie() {
  let mymovie = '생활의 발견'// local 변수(지역변수)
  console.log(mymovie)
  console.log(movie)
}
paintmovie()

// console.log(mymovie)

//6.Return
function plus(a,b){
  return a + b // 15
  console.log('안녕하세요')
}

const result = plus(5,10)
console.log(result)

//7.Callback function 콜백함수
const call = function(myname,printpicaso,printjobs){
  if(myname === 'picaso') {
    //
  } else{
    printjobs()
  }
}

const printPicaso = function() {
  console.log('I am Picaso')
}

const printjobs = function() {
  console.log('im jabs')
}

call('jobs', printPicaso, printjobs)

// // 8.Arrow function
// const add = function (a, b) {
//   return a + b
// }

const add = (a,b) => a + b 


const sum = add(5,8)
console.log(sum)

// function printHello() {
//   console.log('안녕하세요')
//   console.log(this)
// }

const printhello = () => {
console.log(this)
}

