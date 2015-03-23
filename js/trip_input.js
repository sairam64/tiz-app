$(document).ready(function(){
	$("#tr_save").click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		console.log("fuel init");
		var tr1, tr2, tr3, tr4, tr5, tr5,tr7;
		
		tr1 = $("#tr_name").val();
		tr2 = $("#tr_ddat").val();
		tr3 = $("#tr_dodo").val();
		tr4 = $("#tr_dloco").val();
		tr5 = $("#tr_adat").val();
		tr6 = $("#tr_aodo").val();
		tr7 = $("#tr_aloco").val();


	    var mydb = openDatabase("tripdb", "1.0", "trip log", 1024 * 1024);

	    //create the cars table using SQL for the database using a transaction
	    mydb.transaction(function(t) {
	        t.executeSql("CREATE TABLE IF NOT EXISTS trip_tab (id INTEGER PRIMARY KEY ASC, trname TEXT, ddt TEXT, dodo REAL, dloc TEXT, adt TEXT, aodo REAL, aloc TEXT)");
	    });
	    
	    mydb.transaction(function(t) {
            t.executeSql("INSERT INTO trip_tab (trname,ddt, dodo, dloc, adt, aodo, aloc) VALUES (?, ?, ?, ?, ?, ?, ?)", [tr1, tr2, tr3, tr4, tr5, tr6, tr7]);
        });
	});

});