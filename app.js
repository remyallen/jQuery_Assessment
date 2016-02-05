var counter = 0;

$(document).ready(function(){
	$('#prime').append('<button class="generate-button">generate</button>');

	$('.generate-button').on('click', appendDom);
	$('#prime').on('click', '.delete-button', deleteContainer);
	$('#prime').on('click', '.change-button', changeColor);

});

function appendDom(){
	counter++;

	$('#prime').append('<div></div>');
	var $el = $('#prime').children().last();

	$el.data("generateCount", counter);
	$el.append('<p>Generate button has been clicked</p>' + counter + '<p> times.');

	$el.append('<button class="delete-button">delete</button>');
	$el.append('<button class="change-button">change</button>');
}

function deleteContainer(){
	$(this).parent().remove();
}

function changeColor(){
	$(document).getElementById("'#prime'").style.color = "red";
}