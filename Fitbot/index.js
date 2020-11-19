images = document.querySelector(".image");

document.querySelector("#Red").addEventListener('click',() => change("red")
,false);

document.querySelector("#Blue").addEventListener('click',() => change("blue"),false);

document.querySelector("#Purple").addEventListener('click',() => change("purple")
,false);

document.querySelector("#Pink").addEventListener('click',() => change("pink")
,false);


function change(select){
	images.src = "images/"+select+".png";
	console.log("clicked");
}