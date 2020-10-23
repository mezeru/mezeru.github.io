


var a = document.querySelector(".container-button");

a.addEventListener('click',function(e){
	var input = document.querySelector("input").value;
	ModiDOM(input);	
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input = document.querySelector("input").value;
	if(e.which === 13){
		search(input);
	}	
});




/* 2. do the data stuff with the API */
function search(input){

var a = input.trim().split().join('a');

var url = "http://api.giphy.com/v1/gifs/search?q="+a+"&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){

	var data = e.target.response;
	ModiDOM(data);

});

}





/* 3. Show me the GIFs */



function ModiDOM(input){

var resp = JSON.parse(input);
var imgurl = resp.data;
var container = document.querySelector(".images");

	imgurl.forEach(function(i){
		container.innerHTML = container.innerHTML + "<img src='"+i.images.fixed_height.url+"'>";
	});
}