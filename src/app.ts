class Person {
   constructor(private name: string) {} 
}

const max = new Person('Maxim')

// const btn: Element = document.querySelector('.btn')! // ! - for Typescript we promise that object isn't null - or make if check on this element true
// btn.addEventListener('click', () => console.log('click'))

// if(btn) {
//     btn.addEventListener('click', () => {console.log('click')})
// }

// const btn: Element = document.querySelector('.btn')!
btn.addEventListener('click', () => {
   console.log('Btn clicked!')
})

// ========================

let anyFlag

const globalVar = 'Message'

function logInfo(data: string, _?: number) {
   // const message = 'String'
   console.log(data)
   anyFlag = true
   console.log(anyFlag)
}

logInfo('I am log string')

function multiply(a: number, b: number) {
   if (a && b) {
      return a * b
   }
   return
}