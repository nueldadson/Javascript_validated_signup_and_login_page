var formfield = document.getElementById("formfield");

function add() {
	var newField = document.createElement("input");
	newField.setAttribute("type", "text");
	newField.setAttribute("name", "text");
	newField.setAttribute("class", "text");
	newField.setAttribute("size", "50");
	newField.setAttribute("placeholder", "Optional Field");
	formfield.appendChild(newField);
}

function remove() {
	var input_tags = formfield.getElementsByTagName("input");
	if (input_tags.length > 6) {
		formfield.removeChild(input_tags[input_tags.length - 1]);
	}
}

// alert('reegrg')
$(document).ready(function () {
	$("#password, #email, #cpassword").focus(function () {
		if (
			$("#lname").val() == "" ||
			$("#fname").val() == "" ||
			$("#username").val() == ""
		) {
			$("#error").html("*Required Field");
			$("#error2").html("*Required Field");
			$("#error3").html("*Required Field");
		}
	});

	$("#button").click(function () {
		if (
			$("#lname").val() == "" ||
			$("#password").val() == "" ||
			$("#cpassword").val() == "" ||
			$("#fname").val() == "" ||
			$("#username").val() == "" ||
			$("#email").val() == ""
		) {
			$("#error").text(" *Required");
			$("#error2").text(" *Required");
			$("#error3").text(" *Required");
			$("#error4").text(" *Required");
			$("#error5").text(" *Required");
			$("#error6").text(" *Required");
			$("#button").attr("disabled", true);
			$("#button").css({ cursor: "not-allowed" });
		} else {
		}
	});

	$("#fname, #password, #cpassword, #username, #email, #lname, #button").on(
		"keyup click",
		function () {
			if (
				$("#fname, #lname, #username, #email, #password, #cpassword").val() !==
				""
			) {
				$("#button").css({ cursor: "pointer" });
				$("#button").attr("disabled", false);
			}
			if ($("#fname").val() !== "") {
				$("#error").html(" ");
			}
			if ($("#lname").val() !== "") {
				$("#error2").html(" ");
			}
			if ($("#username").val() !== "") {
				$("#error3").html(" ");
			}
			if ($("#email").val() !== "") {
				$("#error4").html(" ");
			}
			if ($("#password").val() !== "") {
				$("#error5").html(" ");
			}
			if ($("#cpassword").val() !== "") {
				$("#error6").html(" ");
			}
		},
	);

	$("#password, #cpassword").keyup(function () {
		if ($("#password").val() != $("#cpassword").val()) {
			$("#errorr").html("Passwords Not Matched");
			$("#errorr2").html("Passwords Not Matched");
		} else {
			$("#errorr").html(" ");
			$("#errorr2").html(" ");
		}
	});
});
