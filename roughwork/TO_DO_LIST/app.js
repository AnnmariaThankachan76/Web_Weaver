let tasks=[];

const addtask=()=>{
  const taskInput=document.getElementById('taskInput')
  const text=taskInput.value.trim();


  if(text){
    taskInput.push({text:text,completed:false});
  }
  console.log(tasks);
};

document.getElementById('newtask').addEventListener('click',function (e){
e.preventDefault()

this.addtask();

});