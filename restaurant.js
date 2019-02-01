var arrQty = [];
var arrName = [];
var arrPrice = [];
var $ = document;

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









function order0() {
  var num0 = document.getElementById("counter0").value;
  arrQty.push(num0);
  var price0 = mydata.food[0].price;
  window.alert(price0);
  var total0 = num0 * price0;
  localStorage.setItem("total0", total0);
  window.alert(total0);
  //adds to check on webpage
  var newTdA = document.createElement('td');
  var qty0 = document.createTextNode(num0);
  var newTr = document.createElement('tr');
  var box0 = newTr.appendChild(newTdA);
  var tableQty0 = check.appendChild(box0);
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