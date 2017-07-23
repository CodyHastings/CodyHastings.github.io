// $( document ).ready(function() {
	var animationType = 0;
	var prevButton;
	var topLeft = {top: "0", left: "12%"}
	var topRight = {top: "0", left: "84%"}
	var midLeft = {top: "20%", left: "12%"}
	var midRight = {top: "20%", left: "84%"}
	var expandCenter = {height: "50%", width: "100%", left: "0", margin: "auto"}
	var expandLeft = {height: "50%", width: "100%", left: "0", margin: "auto"}
	var expandRight = {height: "50%", width: "100%", left: "0", margin: "auto"}
	var defaultSize = {height: "40px", width: "77.83px"}
	var circles = {borderTopLeftRadius: "50px", 
    	borderTopRightRadius: "50px", 
    	borderBottomLeftRadius: "50px", 
    	borderBottomRightRadius: "50px",
    }

    $(".btn").click(expand);

 


	function expand(value){
		prevButton = value;
		console.log(value);
		clickedButton = $(this)
		previousHtml = clickedButton.text();
		console.log("case 0")
		console.log("selector test " + "$(this) = " + clickedButton.attr("id"))
		console.log("selector test " + "$(this).next() = " + clickedButton.next().attr("id"));
		console.log("selector test " + "$(this).next().next() = " + clickedButton.next().next().attr("id"));
		console.log("animating "+ $(clickedButton).attr("id") + " to height 50%, width: 100%, left: 0, margin: auto")
		switch ($(clickedButton).attr("id")){
			case "aboutMe":
				expandAboutMe(clickedButton)
				break;
			case "portfolio":
				expandPortfolio(clickedButton)
				break;
			case "resume":
				expandResume(clickedButton)
				break;	
		}
	
	}; 


	function expandAboutMe(clickedButton){
		clear()
		$(clickedButton).html("<h1>Cody Hastings</h1><br><p>stuff stuff stuff</p>");
		switch(animationType) {
			case 0:	
				$(".btn").animate(circles);
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				console.log(" animating " + clickedButton.text);
				animationType = 1
				break;
			case 1:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 2
				break;
			case 2:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 3
				break;
			case 3:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 0
				break;


		}
	};


	function expandPortfolio(clickedButton){
		clear()
		$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
		$(clickedButton).html("<h1>Cody Hastings</h1><br><p>stuff stuff stuff</p>");
		switch(animationType) {
			case 0:	
				$(clickedButton).prev().animate(topLeft);
				$(clickedButton).next().animate(topRight);
				console.log(" animating " + clickedButton.text());
				animationType = 1
				break;
			case 1:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 2
				break;
			case 2:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 3
				break;
			case 3:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 0
				break;
		}
	};


	function expandResume(clickedButton){
		clear();
		$(clickedButton).html("<h1>Cody Hastings</h1><br><p>stuff stuff stuff</p>");
		$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
		switch(animationType) {
			case 0:	
				$(clickedButton).prev().prev().animate(topLeft);
				$(clickedButton).prev().animate(topRight);
				console.log("animating "+ clickedButton.text())
				animationType = 1
				break;
			case 1:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 2
				break;
			case 2:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 3
				break;
			case 3:
				$(clickedButton).animate({height: "50%", width: "100%", left: "0", margin: "auto"});
				$(clickedButton).next().animate(topLeft);
				$(clickedButton).next().next().animate(topRight);
				animationType = 0
				break;


		}
	};

	function clear(){
		$("#aboutMe").html("About Me").animate(defaultSize);
		$("#portfolio").html("Portfolio").animate(defaultSize);
		$("#resume").html("Resume").animate(defaultSize);
	};








// });