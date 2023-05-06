function del(){
    let val=document.getElementById("result").value;
    document.getElementById("result").value = val.substring(0,val.length-1);
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    try{
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    catch(err){
        alert("Invalid");
    }
}
function log() {
    try{
        var p=document.getElementById("result").value;
        document.getElementById("result").value=Math.log(p);
    }
    catch(err){
        alert("Invalid");
    }
}
function sqrt() {
    try{
        var p=document.getElementById("result").value;
        document.getElementById("result").value=Math.sqrt(p);
    }
    catch(err){
        alert("Invalid");
    }
}
function sin() {
    try{
        var p=document.getElementById("result").value;
        document.getElementById("result").value=Math.sin(p);
    }
    catch(err){
        alert("Invalid");
    }
}
function cos() {
    try{
        var p=document.getElementById("result").value;
        document.getElementById("result").value=Math.cos(p);
    }
    catch(err){
        alert("Invalid");
    }
}