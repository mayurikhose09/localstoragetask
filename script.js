var EmpData=[];
let main=document.querySelector(".main");
let deta=document.querySelector("#remove")
function checkData(){
var name=document.getElementById("name").value
var email=document.getElementById("email").value
var phone=document.getElementById("phone").value;
var message=document.getElementById("message").value;
var checkstatus=0;
var EmpData=JSON.parse(localStorage.getItem("emp"))??[];
for(let data of EmpData){
    if(data.email==email || data.phone==phone){
        checkstatus=1;
        break;
    }
}
if(checkstatus==1){
    alert("email and phone already exist")
}else{
    EmpData.push({"name":name,
     "email":email,
     "phone":phone,
     "message": message}); 
     localStorage.setItem("emp",JSON.stringify(EmpData));


}
fetchData();
}
function fetchData(){
var EmpData=JSON.parse(localStorage.getItem("emp"))??[];
console.log(EmpData);
let htmlstring='';
EmpData.forEach((ele,i)=>{
    i++;
htmlstring +=`
<div class="item">
<h3>Name</h3>
<p>${ele.name}</p><br>
<h3>Email</h3>
<p>${ele.email}</p><br>
<h3>Phone</h3>
<p>${ele.phone}</p><br>
<h3>Message</h3>
<p>${ele.message}</p><br>
<button onclick="editFun()"> edit</button>
<button onclick="deleteFun(${i})"> delete</button>
</div>
 `    
});

main.innerHTML=htmlstring;


};
fetchData();
// function editFun(index){
// var newValue=prompt("do you want update the data?",EmpData[index]);
// if(newValue!=""){
// EmpData[index]=newValue;
// localStorage.setItem("emp",JSON.stringify(EmpData));
// fetchData();
// }
function deleteFun(index){
if(confirm("do you want delete the data")){
    EmpData.splice(index,1);
    localStorage.setItem("emp",JSON.stringify(EmpData));
    fetchData();
}
}

 function dataAdd() {
localStorage.clear();
fetchData();
}
fetchData()