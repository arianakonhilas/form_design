$(document).ready(function() {
	$("#state").focus(function(){
		$("#stateHint").append("Use a two letter abbreviation");
	}).blur(function(){
		$("#stateHint").empty();
	});
	
	$("#zip").focus(function(){
		$("#zipHint").append("Use a 5 digit zip code");
	}).blur(function(){
		$("#zipHint").empty();
	});
	
	$("#phone").focus(function(){
		$("#phoneHint").append("Numbers Only - No Spaces or Dashes");
	}).blur(function(){
		$("#phoneHint").empty();
	});
	
	$("#email").focus(function(){
		$("#emailHint").append("Example - john@doe.com");
	}).blur(function(){
		$("#emailHint").empty();
	});
	
	$("#cc").focus(function(){
		$("#ccHint").append("Numbers Only - No Spaces or Dashes");
	}).blur(function(){
		$("#ccHint").empty();
	});
	
	
	$("#custForm").submit(function(event){
		var namePattern = /[a-z]/i,
			address1Pattern = /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/,
			address2Pattern = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
			zipPattern = /^[0-9]{5}$/,
			phonePattern = /\d{10}/,
			emailPattern = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/,
			ccPattern = /\b\d{13,16}\b/,
			errors = 0,
			fieldColor = "#FFF",
			errColor = "#FDD";
		$(".fields").css("background-color", fieldColor);
		$(".err-msg").empty();
		
		if (!namePattern.test($("#firstName").val())){
			$("#firstName").css("background-color", errColor);
			$("#err-firstName").append("Required: Must contain only letters and spaces between 2 and 20 characters");
			errors +=1;
		}
		
		if (!namePattern.test($("#lastName").val())){
			$("#lastName").css("background-color", errColor);
			$("#err-lastName").append("Required: Must contain only letters and spaces between 2 and 20 characters");
			errors +=1;
		}
		
		if (!namePattern.test($("#city").val())){
			$("#city").css("background-color", errColor);
			$("#err-city").append("Required: Must contain only letters and spaces between 2 and 20 characters");
			errors +=1;
		}
		
		if(!address1Pattern.test($("#stAddress1").val())){
			$("#stAddress1").css("background-color", errColor);
			$("#err-stAddress1").append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters");
			errors +=1;
		}
		
		if($("#stAddress2").val().length > 1){
			if(!address2Pattern.test($("#stAddress2").val())){
			$("#stAddress2").css("background-color", errColor);
			$("#err-stAddress2").append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters");
			errors +=1;
			}
		}
		
		if($("#state").val().length > 2 || (!namePattern.test($("#state").val()))){
			$("#state").css("background-color", errColor);
			$("#err-state").append("Required: Must contain a two letter state abbreviation");
			$("#stateHint").empty();
			errors +=1;
		}
			
		if(!zipPattern.test($("#zip").val())){
			$("#zip").css("background-color", errColor);
			$("#err-zip").append("Required: Must contain a 5 digit zipcode");
			$("#zipHint").empty();
			errors +=1;
		}
		
		if($("#phone").val().length > 1){
			if(!phonePattern.test($("#phone").val())){
			$("#phone").css("background-color", errColor);
			$("#err-phone").append("Required: Must contain a 10 digit number with no spaces or dashes");
			$("#phoneHint").empty();
			errors +=1;
			}
		}
		
		if(!emailPattern.test($("#email").val())){
			$("#email").css("background-color", errColor);
			$("#err-email").append("Required: Must be a valid e-mail address");
			$("#emailHint").empty();
			errors +=1;
		}
		
		if($("#cardType").val() != "none"){
		
			if(!ccPattern.test($("#cc").val())){
				$("#cc").css("background-color", errColor);
				$("#err-cc").append("Must contain a 13-16 digit number, no spaces or dashes");
				$("#ccHint").empty();
				errors +=1;
			}
		
			if($("#expMonth").val() == 0 ){
				$("#expMonth").css("background-color", errColor);
				$("#err-month").append("Must select a month");
				errors +=1;
			}
		
			if($("#expYear").val() == 0 ){
				$("#expYear").css("background-color", errColor);
				$("#err-year").append("Must select a month");
				errors +=1;
			}
		}
		
		if (errors>0){
			$("#custForm").prepend('<div class="err-msg">Please edit marked fields</div>');
			event.preventDefault();
			
		}
		
		
	});
	
	
	
});