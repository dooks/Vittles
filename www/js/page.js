// JS Modules
function V_List() {
   var list = V_Restaurant[];
};

V_List.prototype.reset = function(); {
   list = {};
};

// V_Restaurant
// Basic restaurant instance
function V_Restaurant() {
   var name        = "";
   var address     = "";
   var latlng      = "";
   var phone       = "";
   var pictures    = {};
   var rating      = "";
   var categories  = "";
   var website     = "";
   var open        = false;

   V_Restaurant.prototype.reset = function(); {
     name         = "";
     address      = "";
     latlng       = "";
     phone        = "";
     pictures     = {};
     rating       = "";
     categories   = "";
     website      = "";
     open         = false;
   }
}






// V_Settings
function V_Settings() {
   var distance = 15;
   var location = V_Location.getCurrent();
   var typesOfFood = null;
   var min-price = 1;
   var max-price = 4;
   var min-rating = 3;
};

V_Settings.prototype.reset = function() {
   distance = 15;
   location = V_Location.getCurrent();
   typesOfFood = null;
   min-price = 1;
   max-price = 4;
   min-rating = 3;
};





// 
function V_User() {
   var name     = "";
   var picture  = "";
};

V_User.prototype.reset = function(); {
   name     = "";
   picture  = "";
};
