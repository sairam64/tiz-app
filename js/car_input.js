$(document).ready(function(){
	$("#save_btn").click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var name,year;
		name = $("#mdl_name").val();
		year = $("#mdl_year").val();
		console.log(name, year);
		/*var db = openDatabase('vehdb', '1.0', 'Vehicle DB', 2 * 1024 * 1024,function (tx) {
			console.log("inside");
			   tx.executeSql('CREATE TABLE IF NOT EXISTS vehicle_table (id, v_name,v_year)');
			   tx.executeSql('INSERT INTO LOGS (id,v_name,v_year) VALUES (NULL, ?, ?'), [name, year];
			});*/

	    var mydb = openDatabase("vehdb", "1.0", "A Database of Cars I Like", 1024 * 1024);

	    //create the cars table using SQL for the database using a transaction
	    mydb.transaction(function(t) {
	        t.executeSql("CREATE TABLE IF NOT EXISTS veh_tab (id INTEGER PRIMARY KEY ASC, model TEXT, make TEXT)");
	    });
	    
	    mydb.transaction(function(t) {
            t.executeSql("INSERT INTO veh_tab (model, make) VALUES (?, ?)", [name, year]);
        });
	    $("#place_holder").load("Car_List.html");
	   /* mydb.transaction(function(t) {
            t.executeSql("SELECT * FROM veh_tab", [], updateList);
        });*/
	});
	/*function updateList(transaction, results) {
		var i;
		var R = "<ul>";
		 for (i = 0; i < results.rows.length; i++) {
		        //Get the current row
		        var row = results.rows.item(i);
		        R += '<li><input type="radio">'+row.model+'</li>';
		       // listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
		    }
		 R += "</ul>";
		 $("#m_list").empty();
		 $("#m_list").append(R);
		 $("#m_list").trigger('create');
		 console.log(R);
		  $("#place_holder").load("Car_List.html"); 
	}*/
});