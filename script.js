let tasks = [];
let totalTasksCount = document.getElementById("totalTasksCount");
let completedTasksList = document.getElementById("completedTasksList");
let remainingTasksList = document.getElementById("remainingTasksList");

function updateTaskCount() {
    totalTasksCount.textContent = tasks.length;
}

function renderTasks() {
    remainingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";
  
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
      
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                tasks.splice(index, 1);
                completedTasksList.appendChild(li);
            } else {
                tasks.push(task);
                remainingTasksList.appendChild(li);
            }
            updateTaskCount();
        });

        li.prepend(checkBox);
        remainingTasksList.appendChild(li);
    });

    updateTaskCount();
}

function addItem() {
    const inputBox = document.getElementById("inputbox");
    const task = inputBox.value.trim();
  
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        inputBox.value = "";
    }
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
}

// Update time and date
function updateTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const period = hour >= 12 ? "PM" : "AM";
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const month = now.toLocaleDateString("en-US", { month: "long" });
    const dayNum = now.getDate();
    const year = now.getFullYear();

    document.getElementById("hour").textContent = `${hour}:`;
    document.getElementById("minutes").textContent = `${minutes}:`;
    document.getElementById("seconds").textContent = `${seconds}`;
    document.getElementById("period").textContent = period;
    document.getElementById("dayname").textContent = day;
    document.getElementById("month").textContent = month;
    document.getElementById("daynum").textContent = dayNum;
    document.getElementById("year").textContent = year;
}

setInterval(updateTime, 1000);
