const inputbox = document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("you must write something");  //alert msg will show
    }else{
        let li=document.createElement("li");  // create list element and store in variable li;
        li.innerHTML=inputbox.value;           // change the list value of html with the input that you give;
        listContainer.appendChild(li);      // this will display the list under listcontainer

        let span = document.createElement("span");   // this will create span and stores in span;
        span.innerHTML="\u00d7";       // create cross icon
li.appendChild(span);
    }

    inputbox.value ="";
    saveData();  // it will save the updated content in the browser;
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)        //this function will save the updated data;
}


function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");        // this function will show the data even the page is refreshed                 
}

showTask();