$(document)
		.ready(
				function() {
					var mydb = openDatabase("vehdb", "1.0",
							"A Database of Cars I Like", 1024 * 1024);

					$("#logs").click(function() {
						$("#men").css('color', '#000');
						$(this).css('color', '#fff');
						$("#place_holder").load("Logs.html");
					});

					$("#men").click(function() {
						$("#logs").css('color', '#000');
						$(this).css('color', '#fff');
						$("#place_holder").load("home.html");
					});

					$("#add_fuel").click(function() {
						$(this).css('background', '#8AC007');
						$(this).css('color', '#fff');
						$("#place_holder").load("add_fuel.html");

					});
					$("#servicing_menu").click(function() {
						$(this).css('background', '#8AC007');
						$(this).css('color', '#fff');
						$("#place_holder").load("servicing.html");

					});
					$("#trip").click(function() {
						$(this).css('background', '#8AC007');
						$(this).css('color', '#fff');
						$("#place_holder").load("trip.html");

						// $("#home").hide();
						// $("servicing.html #servicing").show();
						// $("#car_detail").hide();
						// $('#place_holder').load('servicing.html #servicing');

					});
					$("#select_car").click(function() {
						$(this).css('background', '#8AC007');
						$(this).css('color', '#fff');
						$("#place_holder").load("Car_List.html");

						// $("#home").hide();
						//        
						// $("Car_List.html #car_list").show();
						// $("#car_detail").hide();

						// $('#place_holder').load('Car_List.html #car_list');

					});
					$("#add").click(function() {
						$("#place_holder").load("add_car.html");
						// $("add_car.html #add_vehicle").show();
						// $("#home").hide();
						// $("#car_list").hide();
						// $("#car_detail").hide();
						// $('#place_holder').load('add_car.html #add_vehicle');

					});

					$("#edit")
							.click(
									function() {
										if ($("input:radio[name='radio']").is(
												":checked")) {
											var val = $(
													"#m_list input[type='radio']:checked")
													.val();

											mydb
													.transaction(function(t) {
														t
																.executeSql(
																		"SELECT * FROM veh_tab where id=(?)",
																		[ val ],
																		editList);
													});
											var id;
											function editList(transaction,
													results) {
												for (i = 0; i < results.rows.length; i++) {
													var row = results.rows
															.item(i);

													$("#edit_id").val(row.id);
													$("#edit_name").val(
															row.model);
													$("#edit_year").val(
															row.make);

												}
											}
											$("#place_holder").load(
													"edit_car.html");

										}

										else {
											alert("select a vehicle");
										}

									});
					$("#delete")
							.click(
									function() {
										if ($("input:radio[name='radio']").is(
												":checked")) {
											var val = $(
													"#m_list input[type='radio']:checked")
													.val();

											mydb
													.transaction(function(t) {
														t
																.executeSql(
																		"delete FROM veh_tab where id=(?)",
																		[ val ]);
													});

										}

										else {
											alert("select a vehicle");
										}

									});

					$("#edit_save")
							.click(
									function() {

										var name, year, id;
										id = $("#edit_id").val();
										name = $("#edit_name").val();
										year = $("#edit_year").val();

										mydb
												.transaction(function(t) {
													t
															.executeSql(
																	"update veh_tab set model=(?),make=(?) where id=(?)",
																	[
																			name,
																			year,
																			id ]);
												});
										$("#place_holder").reload(
												"Car_List.html");
									});

					$("#reminders").click(function() {
						$("#place_holder").load("reminder.html");
						// $("delete_car.html #delete_vehicle").show();
						// $("#home").hide();
						// $("#car_list").hide();
						// $("#car_detail").hide();
						// $('#replace_list').load('delete_car.html
						// #delete_vehicle');

					});
					$("#add_reminder").click(function() {
						$("#place_holder").load("add_reminder.html");
						// $("delete_car.html #delete_vehicle").show();
						// $("#home").hide();
						// $("#car_list").hide();
						// $("#car_detail").hide();
						// $('#replace_list').load('delete_car.html
						// #delete_vehicle');

					});
					$("#edit_reminder").click(function() {
						$("#place_holder").load("edit_reminder.html");
						// $("delete_car.html #delete_vehicle").show();
						// $("#home").hide();
						// $("#car_list").hide();
						// $("#car_detail").hide();
						// $('#replace_list').load('delete_car.html
						// #delete_vehicle');

					});

					$(".colors").hover(function() {
						$(this).css('background', '#8AC007');
						$(this).css('color', '#fff');

					},

					function() {
						$(this).css('background', '#fff');
						$(this).css('color', '#8AC007');

					});

					$("#height_setting li").hover(function() {
						$(this).css('background', '#f8f8f8');
						$(this).css('color', '#000');

					},

					function() {
						$(this).css('background', '#fff');
						// $(this).css('color', '#8AC007');

					});
					$(".log_li_bottom li").hover(function() {
						$(this).css('background', '#f8f8f8');
						$(this).css('color', '#000');

					},

					function() {
						$(this).css('background', '#fff');
						// $(this).css('color', '#8AC007');

					});

					$(".colors_b").hover(function() {
						$(this).css('background', '#000');
						$(this).css('color', '#fff');

					},

					function() {
						$(this).css('background', '#fff');
						$(this).css('color', '#8AC007');

					});

					//    
					// $("#menu1").click(function(){
					//    	
					// 
					// $("#list1").load("list.html");
					// $("#list2").hide();
					// });
					// $("#menu2").click(function(){
					//    	
					// 
					//    	
					// $("#list2").load("list.html");
					// $("#list1").hide();
					// $("#list3").hide();
					//    	
					// });
					//    
					// $("#menu3").click(function(){
					//   
					//
					//   	
					// $("#list3").load("list.html");
					// // $("#list1").hide();
					// // $("#list2").hide();
					// });
					//  

					$("#list2").hide("slow");
					$("#list3").hide("slow");
					$("#list1").hide("slow");
					$("#menu1").click(function() {
						$("#list2").hide("slow");
						$("#list3").hide("slow");
						$("#list1").show();
					    mydb.transaction(function(t) {
					        t.executeSql("SELECT * FROM fl_tab", [], fuelinputList);
					    });
					    function fuelinputList(transaction, results) {
					        var i;
					        var R = "<ul>";
					         for (i = 0; i < results.rows.length; i++) {
					                //Get the current row
					                var row = results.rows.item(i);
					                var val=row.id;
//					                alert(row.id);
					                
					                R += '<li><div class="li_wid"><div >'+row.dt+'</div><div>'+row.qty+'</div><div>'+row.cost+'</div></div></li>';
					               // listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
					            }
					         R += "</ul>";
					         console.log(R);
					         $("#add_fuel_list").empty();
					         $("#add_fuel_list").append(R);
					         $("#add_fuel_list").trigger('create');
					    }

					});

					$("#menu2").click(function() {

						$("#list1").hide("slow");
						$("#list3").hide("slow");
						$("#list2").show();
//						$("#menu1").click(function() {
//							$("#list2").hide("slow");
//							$("#list3").hide("slow");
//							$("#list1").show();
						    mydb.transaction(function(t) {
						        t.executeSql("SELECT * FROM sr_tab", [], servinputList);
						    });
						    function servinputList(transaction, results) {
						        var i;
						        var R = "<ul>";
						         for (i = 0; i < results.rows.length; i++) {
						                //Get the current row
						                var row = results.rows.item(i);
						                var val=row.id;
//						                alert(row.id);
						                
						                R += '<li><div class="li_wid"><div >'+row.dt+'</div><div>'+row.cost+'</div><div>'+row.center+'</div></div></li>';
						               // listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
						            }
						         R += "</ul>";
						         console.log(R);
						         $("#serv_list").empty();
						         $("#serv_list").append(R);
						         $("#serv_list").trigger('create');
						    }

					});
//					});

					$("#menu3").click(function() {
						$("#list1").hide("slow");
						$("#list2").hide("slow");
						$("#list3").show();
						 mydb.transaction(function(t) {
						        t.executeSql("SELECT * FROM trip_tab", [], servinputList);
						    });
						    function servinputList(transaction, results) {
						        var i;
						        var R = "<ul>";
						         for (i = 0; i < results.rows.length; i++) {
						                //Get the current row
						                var row = results.rows.item(i);
						                var val=row.id;
//						                alert(row.id);
						                
						                R += '<li><div class="li_wid"><div >'+row.trname+'</div><div>'+row.ddt+'('+row.dodo+')'+'</div><div>'+row.adt+'('+row.aodo+')'+'</div></div></li>';
						               // listholder.innerHTML += "<li>" + row.make + " - " + row.model + " (<a href='javascript:void(0);' onclick='deleteCar(" + row.id + ");'>Delete Car</a>)";
						            }
						         R += "</ul>";
						         console.log(R);
						         $("#trip_list").empty();
						         $("#trip_list").append(R);
						         $("#trip_list").trigger('create');
						    }


					});
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

				
					   // var mydb = openDatabase("fueldb", "1.0", "Fuel log", 1024 * 1024);
					 //   var mydb = openDatabase("vehdb", "1.0", "A Database of Cars I Like", 1024 * 1024);

					    //create the cars table using SQL for the database using a transaction
					    mydb.transaction(function(t) {
					        t.executeSql("CREATE TABLE IF NOT EXISTS fl_tab (id INTEGER PRIMARY KEY ASC, dt TEXT, odo REAL, qty REAL, price REAL, cost REAL )");
					    });
					    
					    mydb.transaction(function(t) {
				            t.executeSql("INSERT INTO fl_tab (dt, odo, qty, price, cost) VALUES (?, ?, ?, ?, ?)", [fl1, fl2, fl3, fl4, fl5]);
				        });
			
					});
					$("#sr_save").click(function(e) {
						e.preventDefault();
						e.stopImmediatePropagation();
						console.log("fuel init");
						var sr1, sr2, sr3, sr4;
						
						sr1 = $("#sr_date").val();
						sr2 = $("#sr_dist").val();
						sr3 = $("#sr_cost").val();
						sr4 = $("#sr_center").val();
					    //var mydb = openDatabase("serdb", "1.0", "srvice log", 1024 * 1024);

					    //create the cars table using SQL for the database using a transaction
					    mydb.transaction(function(t) {
					        t.executeSql("CREATE TABLE IF NOT EXISTS sr_tab (id INTEGER PRIMARY KEY ASC, dt TEXT, odo REAL, cost REAL, center TEXT)");
					    });
					    
					    mydb.transaction(function(t) {
				            t.executeSql("INSERT INTO sr_tab (dt, odo, cost, center) VALUES (?, ?, ?, ?)", [sr1, sr2, sr3, sr4]);
				        });
					});
					
					
					
					
					
					
					
					$("#trip_save").click(function(e) {
						e.preventDefault();
						e.stopImmediatePropagation();
						console.log("fuel init trip");
						var tr1, tr2, tr3, tr4, tr5, tr5,tr7;
						
						tr1 = $("#tr_name").val();
						tr2 = $("#tr_ddat").val();
						tr3 = $("#tr_dodo").val();
						tr4 = $("#tr_dloco").val();
						tr5 = $("#tr_adat").val();
						tr6 = $("#tr_aodo").val();
						tr7 = $("#tr_aloco").val();
alert(tr7);

//					    var mydb = openDatabase("tripdb", "1.0", "trip log", 1024 * 1024);

					    //create the cars table using SQL for the database using a transaction
					    mydb.transaction(function(t) {
					        t.executeSql("CREATE TABLE IF NOT EXISTS trip_tab (id INTEGER PRIMARY KEY ASC, trname TEXT, ddt TEXT, dodo REAL, dloc TEXT, adt TEXT, aodo REAL, aloc TEXT)");
					    });
					    
					    mydb.transaction(function(t) {
				            t.executeSql("INSERT INTO trip_tab (trname,ddt, dodo, dloc, adt, aodo, aloc) VALUES (?, ?, ?, ?, ?, ?, ?)", [tr1, tr2, tr3, tr4, tr5, tr6, tr7]);
				        });
					});

						});