var list = document.getElementById("list");

function additem() {
  var input = document.getElementById("todo_item");
  var li = document.createElement("li");
  var litext = document.createTextNode(input.value);
  li.appendChild(litext);
  list.appendChild(li);
  li.setAttribute("class", "list");
  todo_item.value = "";
  var btn = document.createElement("button");
  var btntext = document.createTextNode("Edit");
  btn.appendChild(btntext);
  li.appendChild(btn);
  btn.setAttribute("class", "edit");
  btn.setAttribute("onclick", "edittext(this)");
  var del = document.createElement("button");
  var deltext = document.createTextNode("Delete");
  del.appendChild(deltext);
  li.appendChild(del);
  del.setAttribute("class", "del");
  del.setAttribute("onclick", "delitem(this)");
  // console.log(li);
}

function edittext(e){
  var edit = e.parentNode.firstChild.nodeValue
  var editValue = prompt('Enter edit value',edit)
  e.parentNode.firstChild.nodeValue = editValue
}
function delitem(e) {
  e.parentNode.remove();
}
