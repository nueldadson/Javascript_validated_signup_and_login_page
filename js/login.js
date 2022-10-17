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

$(document).ready(function () {
	$("#passwordd, #cpasswordd").focus(function () {
		if ($("#uname").val() == "") {
			$("#errorrr").html("*Required Field");
		}
	});

	$("#buttonn").click(function () {
		if (
			($("#uname").val() == "" && $("#passwordd").val() == "") ||
			$("#cpasswordd").val() == ""
		) {
			$("#errorrr").text(" *Required Field");
			$("#erroorr").text(" *Required Field");
			$("#erorr").text(" *Required Field");
			$("#buttonn").attr("disabled", true);
			$("#buttonn").css({ cursor: "not-allowed" });
		}
		if ($("#uname").val() !== "") {
			$("#errorrr").html(" ");
		}
		if ($("#passwordd").val() !== "") {
			$("#erroorr").html(" ");
		}
		if ($("#cpasswordd").val() !== "") {
			$("#erorr").html(" ");
		} else {
		}
	});

	$("#uname, #passwordd, #cpasswordd").on("keyup click", function () {
		if (
			$("#uname").val() !== "" &&
			$("#passwordd").val() !== "" &&
			$("#cpasswordd").val() !== ""
		) {
			$("#buttonn").css({ cursor: "pointer" });
			$("#buttonn").attr("disabled", false);
		}
		if ($("#uname").val() !== "") {
			$("#errorrr").html(" ");
		}
		if ($("#passwordd").val() !== "") {
			$("#erroorr").html(" ");
		}
		if ($("#cpasswordd").val() !== "") {
			$("#erorr").html(" ");
		}
	});

	$("#passwordd, #cpasswordd").keyup(function () {
		if ($("#passwordd").val() != $("#cpasswordd").val()) {
			$("#eerrorr").html("Passwords Not Matched");
			$("#ceerrorr").html("Passwords Not Matched");
		} else {
			$("#eerrorr").html(" ");
			$("#ceerrorr").html(" ");
		}
	});
});
