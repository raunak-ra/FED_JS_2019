function makeCounter(){
    let count = 0;
    return function(){
      return count++;
    }
}

let counter = makeCounter();

function showContent(element) {
  var elements = document.getElementsByClassName("popup");
  for (let elem of elements) {
    elem.style.display = "none";
    document.getElementById("taskcop").style.display="none";
  }
  if(element.id=="todo") document.getElementById("taskcop").style.display="block";
  document.getElementById(element.id + "-popup").style.display = "block";
}

//-----------------------------------------------------------------------------//

counter = 4;
var items = ["Code", "Study","Sleep","Repeat"];
function addItem() {
  if (document.getElementById('myInput').value != "") {

    var itemName = document.getElementById('myInput').value;
    items.push(itemName);
    document.getElementById('items').innerHTML += "<li id="+counter+">"  +"<span style='margin-right:100px;'>"+itemName+"</span>" + "<button class='editBtn' onclick='editItem(this)' name="+counter+" >Edit</button> <button onclick='deleteItem(this)' class='deleteBtn' name="+counter+">Delete</button><hr></li>";
    document.getElementById('myInput').value = "";
    counter++;
  }
}
function deleteItem(it) {
  delete items[it.name];
  var element = document.getElementById(it.name);
  element.parentNode.removeChild(element);
}
function editItem(zzz) {
    document.getElementById('modal').style.display="block";
  id=zzz.name;
  document.getElementById('updatetext').value=items[id];

  
   deleteItem(zzz);
 

}
function showTab(ele) {
  var elements = document.getElementsByClassName('tab');
  for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "none";
  document.getElementById(ele.name).style.display = "block";
}
function setItem(ele,flag)
{
  document.getElementById('itemName').value = ele.innerHTML;
  if(flag)
    document.getElementById('suggestions-list').style.display = "none";
}

function showSuggestions(ele) {
  document.getElementById('suggestions-list').style.display = "none";
  var id = document.getElementById(ele);
  document.getElementById('list').innerHTML = "";
  text = (ele.value).toUpperCase();
  for (var i = 0; i < items.length; i++) {
    if (items[i].startsWith(text)) {
      var textNode = document.createTextNode(items[i]);
      var ele = document.createElement("li");
      ele.append(textNode);
      ele.onmouseover = function () {
        setItem(this, false);
      };
      ele.onclick = function () {
        setItem(this, true);
      };
      document.getElementById("list").append(ele);
    }
  }
  document.getElementById('suggestions-list').style.display = "block";
}

function searchItems() {

  var itemName = document.getElementById('myInput').value;
  document.getElementById('items').innerHTML = "";

  for(item of items)
  {
    if(item) 
    {
    if(item.toUpperCase().includes(itemName.toUpperCase()))
    {
      document.getElementById('items').innerHTML += "<li id="+items.indexOf(item)+">"  + item + "<button class='editBtn' onclick='editItem(this)' name='"+items.indexOf(item)+"'>Edit</button> <button onclick='deleteItem(this)' class='deleteBtn' name="+items.indexOf(item)+">Delete</button><hr></li>";
    }
  }
}
  document.getElementById('itemName').value = "";
}


function updateItem() {
  if (document.getElementById('updatetext').value != "") {

    var itemName = document.getElementById('updatetext').value;
    items.push(itemName);
    document.getElementById('items').innerHTML += "<li id="+counter+">"  + itemName + "<button class='editBtn' onclick='editItem(this)' name="+counter+" >Edit</button> <button onclick='deleteItem(this)' class='deleteBtn' name="+counter+">Delete</button><hr></li>";
    document.getElementById('updatetext').value = "";
    counter++;
  }
}


function updateDone(element){
   
  document.getElementById('modal').style.display= 'none';
   updateItem();
}


