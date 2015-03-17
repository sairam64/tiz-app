$(document).ready(function(){
	  
	$("#car_detail").hide();
	$("#servicing").hide();
	$("#car_list").hide();
	$("#add_vehicle").hide();
	$("#edit_vehicle").hide();
	$("#delete_vehicle").hide();
	
	//dasdsa
    $("#add_fuel").click(function(){

//    	$("#servicing").hide();
//        $("#home").hide();
//        $("#car_detail").show();
    	//$('#place_holder').load('add_fuel.html #car_detail'); 
        
    });
    $("#servicing_menu").click(function(){
//        
//        $("#home").hide();
//        $("#servicing").show();
//        $("#car_detail").hide();
    	// $('#place_holder').load('servicing.html #servicing'); 
        
    });
  $("#select_car").click(function(){
        
//        $("#home").hide();
//        
//        $("#car_list").show();
//        $("#car_detail").hide();
       
      //  var loc = $(this).attr("href",'Car_List.html');
        //location.href='Car_List.html';
	 // $(location).attr('href', 'Car_List');
	  $('#place_holder').load('Car_List.html #car_list'); 
 
        
    });
  $("#add").click(function(){
	  $("#add_vehicle").show();
      $("#home").hide();
      $("#car_list").hide();
      $("#car_detail").hide();
      
  });



  $("#edit").click(function(){
	  $("#edit_vehicle").show();
      $("#home").hide();
      $("#car_list").hide();
      $("#car_detail").hide();
      
  });


  $("#delete").click(function(){
	  $("#delete_vehicle").show();
      $("#home").hide();
      $("#car_list").hide();
      $("#car_detail").hide();
      
  });
  



    
    $(".colors").hover(function(){
   	 $(this).css('background', '#8AC007');
   	 $(this).css('color', '#fff');
   
   },
   
   function(){
   	$(this).css('background', '#fff');
  	 $(this).css('color', '#8AC007');
       
   });
});