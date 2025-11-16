const taskuud = [
    {
        title: "Biy daalt aa hiih",
        isComplete: false
    },
    {
        title: "Duugee tsetserlegees avah",
        isComplete: false
    },
    {
        title: "Shalgalt aa uguh",
        isComplete: true
    }
];

// 1. Shine task nemeh function
function taskNemeh(newTask) {
    taskuud.push({ //shine task iig taskuud ruu nemne
        title: newTask,
        isComplete: false
    });
}

// 2. Task hiisen uguig uurchluh function
function taskHiih(taskTitle) {
    let task = taskuud.find(t => t.title === taskTitle); //task iig nereer ni haina
    if (task) {
        task.isComplete = true; //herev task oldvol task iig guitsetgesen bolgoj uurchlunu
    } else {
        console.log(`Task '${taskTitle}' not found.`); //task baihgui bol not found hevlene
    }
}

// 3. Buh task haruulah function
function taskHaruulah() {
    taskuud.forEach((task, index) => { //array iin task buriig davtan shalgana:
        console.log(`${index + 1}. ${task.title} - ${task.isComplete ? "Guitsetgesen" : "Guitsetgeegui"}`); //task iin jagsaalt 
    });                                                                                                     //(isComplete true) bol duussan
}                                                                                                           //ugui bol duusaagui

taskNemeh("Zaal avah");
taskHiih("Biy daalt aa hiih");
taskHaruulah();
