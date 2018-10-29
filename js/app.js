const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener ('submit', (e) =>{
e.preventDefault();
const text = input.value;
input.value = " ";
const ul = document.getElementById('invitedList');
const li = document.createElement('li');
li.textContent = text;

const label =  document.createElement('label');
label.textContent = 'confirmed';
li.appendChild(label);
 //CREATING CHECK BOXY AND APPENDING
const checkbox = document.createElement('input')
checkbox.type = 'checkbox';
 ul.appendChild(li)
 label.appendChild(checkbox);
 li.appendChild(label);
});

// const form = document.getElementById('registrar');
// const input = document.querySelector('input');
// const ul = document.getElementById('invitedList');//ul name
//
//
// form.addEventListener ('submit', (e) => {
//    e.preventDefault();
//    const text = input.value; //
//    input.value = " ";
//    //const ul = document.getElementById('invitedList');//ul name
//    const li = document.createElement('li');// create a elemnt to be add
//    li.textContent = text; // its what they get from input
//
//
//
//
//    const label = document.createElement('label');
//    label.textContent = 'confirmed';
//    const checkbox = document.createElement('input');
//    checkbox.type = 'checkbox';
//    label.appendChild(checkbox);
//    li.appendChild(label)
//
//
//    //remove Item
//    const button = document.createElement('button');
//    button.textContent = 'remove';
//    li.appendChild(button);
//    li.appendChild(label)
//
//
//    ul.appendChild(li); //ul will add the new li to ul
//
// });
//
// // Change
// ul.addEventListener('change', (e) => {
//   const checkbox = event.target;
//   const checked = checkbox.checked;
//   const lisItem = checkbox.parentNode.parentNode;
//
//   if (checked) {
//   listItem.clasName = 'responed';
// } else {
//   listItem.className = '';
//
//  }
// });

//remove Item
