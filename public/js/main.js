$(document).on("ready",
	function(){
		var card = $("#card");
		var voltear = false;
			$('.flip').on("click", function(){
				if (voltear == false) {
					$("#card").addClass("flipped");
					voltear = true;
				}
				else {	
					$("#card").removeClass("flipped");
					voltear = false;
				}
		});	
		var tl = new TimelineLite();
		var atras = false;
		$(".flip").on("click", function(){
			if(atras == false){
				TweenLite.to(".flip", 1.5, { ease: Back.easeOut, rotation: 180 });
				atras = true;	
			}
			else {
				TweenLite.to(".flip", 1.5, { ease: Back.easeOut, rotation: 1});
				atras = false;
			}	
		});
});		