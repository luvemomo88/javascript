var input = document.querySelector('.input')
const btn = document.querySelector('.button')
const result = document.querySelector('.result')

btn.addEventListener('click',function(e) {
  e.preventdefault()
  const value = input.value
  result.textContent = value
})