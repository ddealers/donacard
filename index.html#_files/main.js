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
		var regresa = false
		$(".flip").on("click",
			function(){
				if (regresa == false){
					$(".back").removeClass("back")
				}
			});	
});		