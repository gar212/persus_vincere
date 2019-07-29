var circle = document.getElementsByClassName('circle');
var pcontent = document.getElementsByClassName('process-content');

// circle.classList.add("active");

$(circle).click(function(){
	// $(circle).removeClass("c-active");
	// $(circle).addClass("c-inactive");
	// $(this).removeClass("c-inactive");
	// $(this).addClass("c-active");
	var pickedCircle = this;
	revealContent(pickedCircle);
	resetCircleState(pickedCircle);
});

function resetCircleState(cir) {
	$(circle).removeClass("c-active");
	$(circle).addClass("c-inactive");
	$(cir).removeClass("c-inactive");
	$(cir).addClass("c-active");
}

function revealContent(cir) {
if (cir.textContent == "STEP 1" && cir.classList.contains("c-inactive")){
		$(pcontent).slideUp("fast");
		$(pcontent[0]).slideDown("slow");
	} else if (cir.textContent == "STEP 2" && cir.classList.contains("c-inactive")){
		$(pcontent).slideUp("fast");
		$(pcontent[1]).slideDown("slow");
	} else if (cir.textContent == "STEP 3" && cir.classList.contains("c-inactive")){
		$(pcontent).slideUp("fast");
		$(pcontent[2]).slideDown("slow");	
	}
}