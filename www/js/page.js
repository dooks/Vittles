



var V_Page_Main = function(){};   //basic constructor


V_Page_Main.prototype.drawPage(
restaurantArray) = function()
{
    
    //Selecting all of the restaurant image from the HTML page.
    $("#rest-img").attr("src", restaurantArray[0].picture[0]);
    
    console.log("Page has been drawn.");
    $("#rest-image").innerHTML(restuarantArray[0].name);
    
};





