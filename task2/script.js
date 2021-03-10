const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click',
(event) =>{
    alert('Пример использования команды console.log');
})


const al = document.querySelector('#alert');
al.addEventListener('click',
(event) => {
    alert('Пример использования команды alert')
})

const prom = document.querySelector('#prompt');
prom.addEventListener('click', 
(event) => {
    prompt('Пример использования команды prompt')
})