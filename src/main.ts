import './style.css'

let stackNum = 0;

const StackHTML = document.querySelector<HTMLDivElement>('#stack')!

let stack: HTMLDivElement[] = [];


const BtnStackPush = document.querySelector<HTMLButtonElement>('#stack-push')!
BtnStackPush.addEventListener('click', () => {

    stack.push(createBlock('stack-elem', stackNum++))
    stack.forEach(value => {
        let flag = true

        StackHTML.childNodes.forEach(v => {
            if (v === value) {
                flag = false
            }
        })

        if (flag) {
            value.style.animation = "0.5s ease slideInLeft-enter"
            StackHTML.appendChild(value)
        }
    })
})

const BtnStackPoP = document.querySelector<HTMLButtonElement>('#stack-pop')!
BtnStackPoP.addEventListener('click', () => {
    let val = stack.pop()
    if (val) {
        val.style.animation = "0.5s ease slideInLeft-leave"
        setTimeout(() => {
            StackHTML.removeChild<HTMLDivElement>(val!)
        }, 400)
    } else {
        alert('Stack is EMPTY!')
    }
})


function createBlock(className: string, value: number,): HTMLDivElement {
    let div = document.createElement('div');
    div.classList.add(className)
    div.innerHTML = `
        <span>${value}</span>
    `
    return div;
}



