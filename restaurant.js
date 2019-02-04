var arrQty = [];
var arrName = [];
var arrPrice = [];
var $ = document;
var row = 0;

var check = $.getElementById('checkT');

//getting JSON file

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "restaurant.json", true);
xmlhttp.send();

/*
var jsonText = '{"food" : [' +
    '{"name": "Buttermilk Pancakes", "price": 8, "des": "Three large buttermilk pancakes. Comes with maple syrup and pads of butter."},' +
    '{"name": "Chicken & Waffles", "price": 15, "des": "Two fluffy waffles, covered in maple syrup and three pieces of freshly fried chicken."},' +
    '{"name": "Cheese, Mushroom, and Bacon Omelette", "price": 7, "des": "Three farm-fresh eggs scrambled. Mixed with provolone cheese, chopped portobello mushrooms, and applewood-smoked bacon."},' +
    '{"name": "French Toast with Assorted Fruits", "price": "12", "des": "Two thick pieces of french toast covered in powdered sugar and maple syrup. Topped with strawberries, blueberries, and bananas."},' +
    '{"name": "Avocado Toast", "price": 10, "des": "Two pieces of toasted whole-wheat bread. Topped with mashed avocado with smoked paprika and a soft-boiled egg."},' +
    '{"name": "Eggs Benedict", "price": 9, "des": "An English muffin topped with Canadian bacon, a poached egg, and house-made hollandaise sauce."} ]}';

var mydata = JSON.parse(jsonText);
*/

//appending JSON names into HTML (setting up website names and buttons)

for (var i = 0; i < mydata.food.length; i++) {
  
  //Item name
  arrName.push(mydata.food[i].name);
  var htmlName = $.getElementsByClassName('name')[i];
  var jsonName = arrName[i];
  htmlName.innerHTML = jsonName;

  /*
  //Price
  arrPrice.push(mydata.food[i].price);
  var htmlPrice = $.getElementsByClassName('price')[i].innerHTML;
  var jsonPrice = $.createTextNode(arrPrice[i]);
  htmlPrice.appendChild(jsonPrice);
  
  //Description
  arrDes.push(mydata.food[i].des);
  var htmlDes = $.getElementsByClassName('description')[i].innerHTML;
  var jsonDes = $.createTextNode(arrDes[i]);
  htmlDes.appendChild(jsonDes);
*/
}

var b;

function order0() {
  b = 0;
  order();
}


function order() {
  //add qty to array
  var qty = $.getElementsByClassName("counter")[b].value;
  arrQty.push(qty);
  
  //add qty from array to table
  var qty_table = $.getElementsByClassName("row")[b].getElementsByTagName('td')[0];
  qty_table.innerHTML = arrQty[b];
  

  row++;
}

/*
var previous = null;
var current = null;
setInterval(function(){
  $.getJSON("restaurant.json", function(json){
    current = JSON.stringify(json);
    if (previous && current & previous != current) {
      location.reload();
    }
    previous = current;
  });
}, 2000);
*/