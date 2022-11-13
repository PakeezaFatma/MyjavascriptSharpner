var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event

form.addEventListener('submit', addItem);

//delete event

itemList.addEventListener('click', removeItem);

//filter event
//filter.addEventListener('keyup',filterItems);

//Additem 

function addItem(e)
{
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create bew li element

    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //Add text node with input value

    li.appendChild(document.createTextNode(newItem));

    //create delete button
    var deleteBtn = document.createElement('button');
    //create edit buutton
    var editBtn = document.createElement('button');
    //Add classes to dlt button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Add classes to edit btn
    editBtn.className = 'btn mr-2 btn-sm float-right edit';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append text node in edit button
    editBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(deleteBtn);
    itemList.appendChild(li);


    li.appendChild(editBtn);
    itemList.appendChild(li);

}

//remove item

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure ?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//filters item

// function filterItems(e){
//     //converts text lowercase

//     var text = e.target.value.toLowerCase();
//    // get li
//     var items = itemList.getElementsByTagName('li');
//     //convert to an array 
//     Array.from.apply(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;

//     })
// }