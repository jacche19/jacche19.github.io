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

//appending JSON names into HTML (setting up website names and buttons)

for (var i = 0; i < mydata.food.length; i++) {
  
  //Item name
  arrName.push(mydata.food[i].name);
  var htmlName = $.getElementsByClassName('name')[i].innerHTML;
  var jsonName = $.createTextNode(arrName[i]);
  htmlName.appendChild(jsonName);
  
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

var previous = null;
var current = null;
setIntercal(function(){
  $.getJSON("restaurant.json", function(json){
    current = JSON.stringify(json);
    if (previous && current & previous != current) {
      location.reload();
    }
    previous = current;
  });
}, 2000);