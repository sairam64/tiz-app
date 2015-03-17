$(document).ready(function(){
	$("#save_btn").click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var name,year;
		name = $("#mdl_name").val();
		year = $("#mdl_year").val();
		console.log(name, year);
		
		var db = new Dexie("veh_db");
		db.version(1).stores({ vehicle: "++Vid,v_name,v_year" });
		db.open();
		db.vehicle.add({v_name: name, v_year: year});
		
		db.transaction("rw", "vehicle", function(vehicle) {
			vehicle.each(function(vehicle){
				console.log(vehicle.v_name, vehicle.v_year);
			});
		});
	});
});