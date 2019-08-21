function showContent(element) {
  var items = document.querySelectorAll(".nav");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
    document.getElementById(element.id +"-popup").style.display="block";
}


/*.............................*/


counter = 0;
    var items= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"];



function addItems() {
  if (document.getElementById('itemName').value != "") {
    var itemName = document.getElementById('itemName').value;
    counter += 1;
    document.getElementById('items').innerHTML += "<br>" + counter + ". " + itemName;
    document.getElementById('itemName').value = "";
    items.push(itemName);
  }
}


function showTab(ele) {
  var elements = document.getElementsByClassName('tab');
  for (var i = 0; i < elements.length; i++)
      elements[i].style.display = "none";
  document.getElementById(ele.name).style.display = "block";
}
function setItem(ele,flag)
{
  document.getElementById('myInput').value = ele.innerHTML;
  if(flag)
    document.getElementById('suggestions-list').style.display = "none";
}
function showSuggestions(element)
{
  document.getElementById('suggestions-list').style.display = "none";
    document.getElementById('list').innerHTML="";
    txt = element.value;
    for(var i=0;i<items.length;i++)
    {
      if(items[i].startsWith(txt))
      {
        var textNode = document.createTextNode(items[i]);
        var ele = document.createElement("li");
        ele.append(textNode);
        ele.onmouseover=function() {
          setItem(this,false);
        };
        ele.onclick=function() {
          setItem(this,true);
        };
        //ele.addEventListener("click",function() {setItem(items[i])})
        document.getElementById("list").append(ele);
    }
    }
    document.getElementById('suggestions-list').style.display = "block";


}
