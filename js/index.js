const header=document.querySelector("header");
const body=document.querySelector("body");


let currentTask = 1;

const taskButton = document.querySelector('.toggleBtn');
taskButton.addEventListener('click', () => {
    if (currentTask === 1) {
        // Perform first task
        header.style.display="block";
        body.style.left="300px";
      
        
    } else if (currentTask === 2) {
        // Perform second task
        header.style.display="none";
        body.style.left="0px";
    }

    // Toggle current task
    currentTask = (currentTask === 1) ? 2 : 1;
});