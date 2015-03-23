$(document).ready(function(){
	$("#fl_save").click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		console.log("fuel init");
		var fl1, fl2, fl3, fl4, fl5;
		
		fl1 = $("#fl_date").val();
		fl2 = $("#fl_odo").val();
		fl3 = $("#fl_ltr").val();
		fl4 = $("#fl_price").val();
		fl5 = $("#fl_cst").val();


	    var mydb = openDatabase("fueldb", "1.0", "Fuel log", 1024 * 1024);

	    //create the cars table using SQL for the database using a transaction
	    mydb.transaction(function(t) {
	        t.executeSql("CREATE TABLE IF NOT EXISTS fl_tab (id INTEGER PRIMARY KEY ASC, dt TEXT, odo REAL, qty REAL, price REAL, cost REAL )");
	    });
	    
	    mydb.transaction(function(t) {
            t.executeSql("INSERT INTO fl_tab (dt, odo, qty, price, cost) VALUES (?, ?, ?, ?, ?)", [fl1, fl2, fl3, fl4, fl5]);
        });
	});

});