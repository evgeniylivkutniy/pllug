const addBtn = document.getElementById('addBtn')
let todoList = [];
let interval;
let isPaused = false; // isPaused єдине для всіх таймерів, дозволить працювати тільки з одним. Відповідно tracker не працюватиме повноціно

addBtn.addEventListener('click', () => {

    let inputValue = document.getElementById('enterTodo').value;
    let todoObj = {};
    todoObj.todo = inputValue;
    todoObj.sec = 0;
    todoObj.min = 0;
    todoObj.hrs = 0;
    let i = todoList.length;
    todoList[i] = todoObj;
    showList();
    clearInterval(interval)
    clearTicks();
    interval = setInterval(add, 1000)
})
function clearTicks() {
    min = 0;
    sec = 0;
    hrs = 0;
}
//timer functions
// простішим та швидшим рішенням було б додавати 1000ms = 1s до змінної, яка б зберігала значення часу в мілісекундах (напр. Date.now()), а вже перед виведенням форматувати значення мілісекунд у читабельний та зрозумілий формат
function tick() {

    if (!isPaused) {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
}



function add() {
    tick();
    startTimer.innerText = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
}


function showList() {

    let out = '';
    for (let key in todoList) {
        out = todoList[key].todo;

    }
    let newTask = document.createElement('div');
    newTask.classList.add('new-task')
    let taskList = document.querySelector('.task-list')
    newTask.innerHTML = out;
    taskList.appendChild(newTask);
    let newTimer = document.createElement('p')
    startTimer = newTimer;
    newTimer.classList.add('newTimer')

    newTask.appendChild(newTimer);

    let pausedBtn = document.createElement('p')
    pausedBtn.classList.add('paused');

    pausedBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    let playedBtn = document.createElement('p')
    playedBtn.classList.add('played')
    playedBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>'
    let deleteBtn = document.createElement('p')
    deleteBtn.classList.add('deleteBtn');
    newTask.appendChild(playedBtn)
    newTask.appendChild(pausedBtn)

    newTask.appendChild(deleteBtn)
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'
    function deleteTask() {
        newTask.remove()
    }
    deleteBtn.addEventListener('click', (e) => deleteTask(e))
    pausedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = true;
    })
    playedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isPaused = false;
    })

}

// відсутнє зберігання даних та синхрорізація з localStorage або IndexedDB


