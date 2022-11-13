//Traversing the Dom//

var itemlist = document.querySelector('#items');
//parentsNode

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode)

//parentElemnt is same thing

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement)


//childNode

//console.log(itemlist.childNodes) 

//children
// console.log(itemlist.children);
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor = 'yellow';

//firstchild

//console.log(itemlist.firstChild);


//firstElemtnchild

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello i';

//lastchild

// console.log(itemlist.lastChild);
// itemlist.lastChild.textContent ='pakeeza';

//lastElementchild

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello 4'

//nextsibling

//console.log(itemlist.nextSibling);

//nextElementSibling

// console.log(itemlist.nextElementSibling);

//prvioussibling

// console.log(itemlist.previousSibling);

//previouselementSibling

// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';

//createElement

var newli = document.createElement('li');

//create a div
newli.className ='list-group-item';
//add id

//newli.id = 'hello';


//add attr
newli.setAttribute('title','hello Dev');

//crate text node

var newliText = document.createTextNode('Hello world');

//Add text to div

newli.appendChild(newliText);

var list = document.getElementById("items");
//var h1 = document.querySelector('title1 h1');

//before item

console.log(newli) 

//newli.style.fontSize = '30px';
list.insertBefore(newli , list.children[0])





