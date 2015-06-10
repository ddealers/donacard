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
// VALIDACIONES DEL FORMULARIO
	$('#form').submit(function(e){
		var $form 	= $(this);
		var name	= $form.find('#name-text').val();
		var date 	= $form.find('#fecha-text').val();
		var witness = $form.find('#testigo1-text').val();
		var witness = $form.find('#testigo2-text').val();
		var donate  = $form.find('#organos-donados').val();

		var nameIsString	= /[A-Za-z\ ]+/.test(name);
		var dateIsDate		= /(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[012])/.test(date);
		var witnessIsString = /[A-Za-z\ ]+/.test(witness);
		var donateIsString	= /[A-Za-z\ ]+/.test(donate);

		var inputs = [];

		if(!name|| !nameIsString){
			inputs.push('#name-text');
		}
		if(!date|| !dateIsDate){
			inputs.push('#fecha-text');
		}
		if(!witness|| !witnessIsString){
			inputs.push('#testigo1-text');
		}		
		if(!witness|| !witnessIsString){
			inputs.push('#testigo2-text');
		}
		if(!donate|| !donateIsString){
			inputs.push('#organos-donados');
		}

		if(inputs.length > 0){
			inputs.forEach(function(elem, index){
				$(elem).addClass('rojo');
				$(elem).val('');
			});
			$('.error-p').css({display: 'block'});
			return false;
		}else{
			$('.error-p').css({display: 'none'});
		}

		$form.find('button').prop('disabled', true);
		Stripe.card.createToken($form, stripeResponseHandler);		
	});
});		