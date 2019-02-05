var arrQty = [];
var arrName = [];
var arrPrice = [];

var name = [
  "pancakes",
  "ckn & waf",
  "omelette",
  "fr toast",
  "avo toast",
  "eggs ben"
];

var price = [
  8,
  15,
  7,
  12,
  10,
  9
];
var $ = document;
var row = 0;



var check = $.getElementById('checkT');


/*
//getting JSON file

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "restaurant.json", true);
xmlhttp.send();
*/

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

/*
//appending JSON names into HTML (setting up website names and buttons)

for (var i = 0; i < mydata.food.length; i++) {
  
  //Item name
  arrName.push(mydata.food[i].name);
  var htmlName = $.getElementsByClassName('name')[i];
  var jsonName = arrName[i];
  htmlName.innerHTML = jsonName;

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
  
}
*/

var b;
var arrSum = 0;
var sub;
var tax;
var total;

function order() {
  var qty = $.getElementsByClassName("counter")[b].value;

  if (qty >= 1 && qty <=5) {

  //add qty to array
  arrQty.push(qty);
  
  //add qty from array to table
  var qty_table = $.getElementsByClassName("row")[row].getElementsByTagName('td')[0];
  qty_table.innerHTML = arrQty[arrQty.length - 1];

  //get name and add to arrName
  arrName.push(c);

  //add name from array to table
  var name_table = $.getElementsByClassName("row")[row].getElementsByTagName('td')[1];
  name_table.innerHTML = arrName[arrQty.length - 1];

  //get price and add to arrPrice
  var item_price = price[b] * qty;
  arrPrice.push(item_price);

  //add price from array to table
  var price_table = $.getElementsByClassName("row")[row].getElementsByTagName('td')[2];
  price_table.innerHTML = "$" + arrPrice[arrQty.length - 1];

  //disable button and imput box
  $.getElementsByClassName("counter")[b].disabled = true;
  var buttonStyle = $.getElementsByClassName("order")[b].style;
  buttonStyle.backgroundColor = "#3E463E";
  buttonStyle.color = "#F2E7C9";
  $.getElementsByClassName("order")[b].innerHTML = "ordered";
  
  row++;
  
  //subtotal
  arrSum += item_price;
  var subtotal_table = $.getElementById("subtotal");
  subtotal_table.innerHTML = "$" + arrSum;
  
  //tax
  var tax = (arrSum * 0.04712).toFixed(2);
  var tax_table = $.getElementById("tax");
  tax_table.innerHTML = "$" + tax;
  }

  //total
  var total = arrSum + parseFloat(tax);
  var total_table = $.getElementById("total");
  total_table.innerHTML = "$" + total;
}

function order0() {
  b = 0;
  c = "pancakes";
  order();
  b = null;
  c = "";
}

function order1() {
  b = 1;
  c = "c & w";
  order();
  b = null;
  c = "";
}

function order2() {
  b = 2;
  c = "omelette";
  order();
}

function order3() {
  b = 3;
  c = "fr toast";
  order();
}

function order4() {
  b = 4;
  c = "av toast";
  order();
}

function order5() {
  b = 5;
  c = "eggs ben";
  order();
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

function finalize() {
  localStorage.setItem("qty", JSON.stringify(arrQty));
  localStorage.setItem("name", JSON.stringify(arrName));
  localStorage.setItem("price", JSON.stringify(arrPrice));
  localStorage.setItem("subtotal", arrSum);
  localStorage.setItem("tax", tax);
  localStorage.setItem("total", total);
  window.location.href = "page2.html";
}