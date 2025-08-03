const display = document.querySelector("#inp");
const add = document.querySelector("#btn");
const container = document.querySelector("#listcontainer");

showTask();

add.addEventListener('click', () => {
    if (display.value.trim() === "") {
        alert("Add something in the field");
    } else {
        let li = document.createElement("li");
        li.textContent = display.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // ×
        span.classList.add("delete-btn");

        li.appendChild(span);
        container.appendChild(li);
        saveData();
    }
    display.value = "";
});

container.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}

function showTask() {
    container.innerHTML = localStorage.getItem("data") || "";
}
