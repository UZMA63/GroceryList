const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allitems = document.getElementById("allitems");
const userinputs = document.getElementById("userinputs");



pencil.addEventListener("click",function(){
    allitems.innerHTML = "";
})


userinputs.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    additems();
}
)
function additems(){
 var h2 = document.createElement("h2");
 h2.innerHTML = "-" + userinputs.value;


 h2.addEventListener("click",function(){
    h2.style.textDecoration = "line-through";
 })

allitems.insertAdjacentElement("beforeend",h2);


userinputs.value = "";


}