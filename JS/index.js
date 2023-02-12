const row = document.getElementById('project-row1');
const row2 = document.getElementById('project-row2');

row.addEventListener('mouseover', (event) => {
    event.target.style.color = "#cbaff0";

    setTimeout(() =>{
        event.target.style.color = "";
    }, 700);

    
}, false);



row2.addEventListener('mouseover', (event) => {
    event.target.style.color = "yellow";

    setTimeout(() =>{
        event.target.style.color = "";
    }, 700);

    
}, false);




