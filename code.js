document.addEventListener("DOMContentLoaded",()=>{
    const clockElement=document.getElementById("clock");
    const dateElement=document.getElementById("date");
    const toggleModeButton=document.getElementById("dark");
    const a=document.getElementById("da");
    const body=document.body;


const updateClock=()=>{
    const now =new Date();
    const hours= now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
};

const updateDate=()=>{
    const now= new Date();
    const options={ weekday: "long", year: "numeric", month: "long", day: "numeric" };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
};

toggleModeButton.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    if (a.textContent=="Dark Mode"){
        a.textContent="Light Mode";
    }
    else{
        a.textContent="Dark Mode";
    }

});





setInterval(()=>{
    updateClock();
    updateDate();

},1000);

updateClock();
updateDate();





});