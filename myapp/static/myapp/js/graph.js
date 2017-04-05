$(document).ready(function() {
	//alert("loaded");

	//$( "#cssmenu ul li:first-child" ).addClass("active");

	$("#cssmenu ul li a").click(function(){
	//alert("entered");

	//alert($(this).text());

	$(this).siblings(".active").removeClass("active");

	$(this).addClass("active");


});

$("div.previousData-graphs div").css("display","none");
$("div.previousData-graphs div.y-view").css("display","block");
$("div.temp").css("display","block");

$("div.previousData-view input:button").click(function(){


	var my = $(this).attr("class");
	//alert(my);
	var o= "."+my+"-view";
	//alert(o);
	//alert(o);
	$("div.previousData-graphs div").css("display","none");
	$(o).css("display","block");

});


$(".multi-graphs div.graph_data").hide();


$("div.graph_data:first").show();


    $("#next").click(function(){
	alert($("div.graph_data:visible").next("div.graph_data").length);
        if ($("div.graph_data:visible").next("div.graph_data").length !=0){
            $("div.graph_data:visible").next("div.graph_data").show();
	    $(this).hide();}

        else {
            $("div.graph_data:visible").hide();
            $("div.graph_data:first").show();
        }
    });

    $("#prev").click(function(){
alert($("div.graph_data:visible").prev("div.graph_data").length);
        if ($("div.graph_data:visible").prev("div.graph_data").length !=0){
            $("div.graph_data:visible").prev("div.graph_data").show();
            $(this).hide();}
        else {
            $("div.graph_data:visible").hide();
            $("div.graph_data:last").show();
        }
    });



});
