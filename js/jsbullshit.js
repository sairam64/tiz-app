$(document).ready(function(){
	  
//	$("add_fuel.html #car_detail").hide();
//	$("servicing.html #servicing").hide();
//	$("Car_List.html #car_list").hide();
//	$("add_car.html #add_vehicle").hide();
//	$("edit_car.html #edit_vehicle").hide();
//	$("delete_car.html #delete_vehicle").hide();
	

    $("#add_fuel").click(function(){
    	$(this).css('background', '#8AC007');
      	 $(this).css('color', '#fff');
    	  $("#place_holder").load("add_fuel.html"); 
//    	$("#servicing").hide();
//        $("#home").hide();
      //  $("#car_detail").show();
    	//$('#place_holder').load('add_fuel.html #car_detail'); 
        
    });
    $("#servicing_menu").click(function(){
    	$(this).css('background', '#8AC007');
      	 $(this).css('color', '#fff');
    	 $("#place_holder").load("servicing.html"); 
        
//        $("#home").hide();
//        $("servicing.html #servicing").show();
//        $("#car_detail").hide();
    	// $('#place_holder').load('servicing.html #servicing'); 
        
    });
    $("#trip").click(function(){
    	$(this).css('background', '#8AC007');
      	 $(this).css('color', '#fff');
   	 $("#place_holder").load("trip.html"); 
       
//       $("#home").hide();
//       $("servicing.html #servicing").show();
//       $("#car_detail").hide();
   	// $('#place_holder').load('servicing.html #servicing'); 
       
   });
  $("#select_car").click(function(){
	  $(this).css('background', '#8AC007');
	   	 $(this).css('color', '#fff');
	  $("#place_holder").load("Car_List.html"); 
        
//        $("#home").hide();
//        
//        $("Car_List.html #car_list").show();
//        $("#car_detail").hide();
       
   
	 // $('#place_holder').load('Car_List.html #car_list'); 
 
        
    });
  $("#add").click(function(){
	  $("#place_holder").load("add_car.html"); 
//	  $("add_car.html #add_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
    //  $('#place_holder').load('add_car.html #add_vehicle'); 
      
  });



  $("#edit").click(function(){
	  $("#place_holder").load("edit_car.html"); 
//	  $("edit_car.html #edit_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
     // $('#replace_list').load('edit_car.html #edit_vehicle'); 
      
  });


  $("#delete").click(function(){
	  $("#place_holder").load("delete_car.html"); 
//	  $("delete_car.html #delete_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
      //$('#replace_list').load('delete_car.html #delete_vehicle'); 
      
  });
  
  $("#reminders").click(function(){
	  $("#place_holder").load("reminder.html"); 
//	  $("delete_car.html #delete_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
      //$('#replace_list').load('delete_car.html #delete_vehicle'); 
      
  });
  $("#add_reminder").click(function(){
	  $("#place_holder").load("add_reminder.html"); 
//	  $("delete_car.html #delete_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
      //$('#replace_list').load('delete_car.html #delete_vehicle'); 
      
  });
  $("#edit_reminder").click(function(){
	  $("#place_holder").load("edit_reminder.html"); 
//	  $("delete_car.html #delete_vehicle").show();
//      $("#home").hide();
//      $("#car_list").hide();
//      $("#car_detail").hide();
      //$('#replace_list').load('delete_car.html #delete_vehicle'); 
      
  });



    
    $(".colors").hover(function(){
   	 $(this).css('background', '#8AC007');
   	 $(this).css('color', '#fff');
   
   },
   
   function(){
   	$(this).css('background', '#fff');
  	 $(this).css('color', '#8AC007');
       
   });
    
    $("#height_setting li").hover(function(){
      	 $(this).css('background', '#00ff00');
      	 $(this).css('color', '#fff');
      
      },
      
      function(){
      	$(this).css('background', '#fff');
     	 $(this).css('color', '#8AC007');
          
      });
    
    //Add radio btns at carlist page
    
    
});