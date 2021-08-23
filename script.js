
const cursor = document.getElementById("cursor");
document.addEventListener('mousemove',(e)=>{
    var x = e.pageX;
    var y = e.pageY;
    cursor.style.left = x+"px";
    cursor.style.top = y+"px";
    console.log("moved");
});