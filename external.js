$(document).ready(function() {

// BEGIN FORM VALIDATION
					
$(function() {
	// Initialize form
	$("#validation__form").validate({
		// Specify validation rules
		rules: {
		name: {
			required: true,
			minlength: 2
		},
		address: "required",
		email: {
			required: true,
			// Validated by built-in "email" rule
			email: true
		},		
		password: {
			required: true,
			minlength: 5
		},
		confirmpassword: {
			equalTo: "#password"
		}
		},
		// Specify validation error messages
		messages: {
		name: {
			required: "Please enter your name",
			minlength: "Your name must be at least 2 characters long"
		},
		address: "Please enter your address",	
		email: "Please enter a valid email address",
		password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long"
		},		
		confirmpassword: "Password does not match"
		},
		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function(form) {
		form.submit();
		}
	});
});

// END FORM VALIDATION


//END WINDOW ONLOAD VALIDATION
});