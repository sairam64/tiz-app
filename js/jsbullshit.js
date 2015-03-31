$(document).ready(function(){

	

	 $("#logs").click(function(){
		 $("#men").css('color', '#000');
	      	 $(this).css('color', '#fff');
	      	 $("#place_holder").load("Logs.html"); 
	 });
	 

	 $("#men").click(function(){
		 $("#logs").css('color', '#000');
	      	 $(this).css('color', '#fff');
	      	 $("#place_holder").load("home.html"); 
	 });
	
    $("#add_fuel").click(function(){
    	$(this).css('background', '#8AC007');
      	 $(this).css('color', '#fff');
    	  $("#place_holder").load("add_fuel.html"); 
 
        
    });
    $("#servicing_menu").click(function(){
    	$(this).css('background', '#8AC007');
      	 $(this).css('color', '#fff');
    	 $("#place_holder").load("servicing.html"); 

        
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
      	 $(this).css('background', '#f8f8f8');
      	 $(this).css('color', '#000');
      
      },
      
      function(){
      	$(this).css('background', '#fff');
//     	 $(this).css('color', '#8AC007');
          
      });
    $(".log_li_bottom li").hover(function(){
     	 $(this).css('background', '#f8f8f8');
     	 $(this).css('color', '#000');
     
     },
     
     function(){
     	$(this).css('background', '#fff');
//    	 $(this).css('color', '#8AC007');
         
     });
    
    
    $(".colors_b").hover(function(){
      	 $(this).css('background', '#000');
      	 $(this).css('color', '#fff');
      
      },
      
      function(){
      	$(this).css('background', '#fff');
     	 $(this).css('color', '#8AC007');
          
      });
       
    
    
    
    
   
//    
//    $("#menu1").click(function(){
//    	
// 
//     	 $("#list1").load("list.html"); 
//     	 $("#list2").hide();
//});
//    $("#menu2").click(function(){
//    	
// 
//    	
//    	 $("#list2").load("list.html");
//    	 $("#list1").hide();
//       	 $("#list3").hide();
//    	
//});
//    
//    $("#menu3").click(function(){
//   
//
//   	
//   	 $("#list3").load("list.html");
////	 $("#list1").hide();
////   	 $("#list2").hide();
//});
//  
    
	  $("#list2").hide("slow");
      $("#list3").hide("slow");
      $("#list1").hide("slow");
    $("#menu1").click(function () {
    	  $("#list2").hide("slow");
          $("#list3").hide("slow");
        $("#list1").show();
        
      
    });

    $("#menu2").click(function () {

        $("#list1").hide("slow");
        $("#list3").hide("slow");
        $("#list2").show();
        
    });

    $("#menu3").click(function () {
    	$("#list1").hide("slow");
        $("#list2").hide("slow");
        $("#list3").show();
        
    });

  
    


});