$(document).ready(function(){
	$("#save_btn").click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var name,year;
		name = $("#mdl_name").val();
		year = $("#mdl_year").val();
		console.log(name, year);
	});
});