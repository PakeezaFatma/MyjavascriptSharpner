//GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// //items.style.backgroundColor = 'grey';

// for(var i = 0; i < items.length ; i++ )
// {
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';

// }


//GetElementByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.color = 'red';
// li[4].style.color = 'red';

// for(var i = 0; i <= li.length; i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }


//QuerySelector//

// var header  = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child')
// lastitem.style.color = 'blue';
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color= 'coral';
// seconditem.style.backgroundColor = 'green';

// thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility = 'hidden';

// //QuerySelctorAll is similar to geteleemntbyclassname ,getelementbytagname//
// var title = document.querySelectorAll('.title');
// console.log(title);

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = '#ccc';
}

var seconditem =document.querySelectorAll(" li ");
seconditem[1].style.color = 'green';
seconditem[1].style.fontWeight = 'bold';





 




