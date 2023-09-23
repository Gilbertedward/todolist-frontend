let input=document.getElementById("input")
let button=document.getElementById("add")
let todolist=document.getElementById("todolist")

button.addEventListener('click',()=>{
addtodo(input.value)
input.value=''
onkeypress

})

function addtodo(todo){
    let para=document.createElement('p')
      para.innerText=todo;
      todolist.appendChild(para)
      para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
    
      })
      para.addEventListener('dblclick',()=>{
        para.style.textDecoration='initial'
      })
}
let hour=document.getElementById("hr")
let minute=document.getElementById("min")
let second=document.getElementById("sec")

function dispalytime(){


let datevalue=new Date();
let a=datevalue.getHours();
let b=datevalue.getMinutes();
let c=datevalue.getSeconds();
hour.innerHTML=a
minute.innerHTML=b
second.innerHTML=c
}

setInterval(dispalytime,1000)