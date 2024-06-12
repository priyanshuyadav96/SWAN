const input=document.getElementById("input");
const list=document.getElementById("list-container");

function addtask(){
    console.log("function callded");
    if(input.value===""){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        li.className="checked";
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    input.value="";
    savedata();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("done");
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showdata(){
    list.innerHTML=localStorage.getItem("data");
}
showdata();