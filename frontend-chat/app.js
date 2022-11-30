const display = document.querySelector(".display")
const form = document.querySelector("form")
let nome = 'nome'

var ws = new WebSocket('ws://127.0.0.1:3030')

ws.addEventListener("message", ev => {
    const data = document.createElement("div")
    data.innerHTML = ev.data
    console.log(localStorage.getItem(nome))
    display.append(data)
})


form.addEventListener("submit", ev => {
    ev.preventDefault()
    ws.send('<b>' + localStorage.getItem(nome) + ':</b> ' + form.msg.value)
    form.msg.value = ""
})

function entrar(){
    console.log(document.querySelector('.msg').value)
    let pessoa = document.querySelector('.msg').value
    localStorage.setItem(nome, document.querySelector('.msg').value)
    let myItem = localStorage.getItem(pessoa);
    console.log(myItem)
    window.location.href = 'app.html'
}