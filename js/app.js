const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');


form.addEventListener ('submit', (e) =>{
      e.preventDefault();
      //CRETING INPUT AND ADDING ON HTML
      const text = input.value;
      input.value = " ";
      const ul = document.getElementById('invitedList'); //THIS BECAME SCOPE AFTER
      const li = document.createElement('li');
      li.textContent = text;//TYPE OF CONTENT
      ul.appendChild(li)//ADDING ON HTML

      //CRATEING THE LABEL CONFIRM WILL BE ADD ON HTML
      const label =  document.createElement('label');
      label.textContent = 'confirmed';//TYPE OF CONTENT
      li.appendChild(label);//ADDING ON HTML

       //CREATING CHECK BOXY AND APPENDING
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';//TYPE OF CONTENT
       label.appendChild(checkbox);//ADDING ON HTML

});


ul.addEventListener('change', (e) => {
       const checkbox = event.target;// event call
       const checked = checkbox.checked; //check the variable
       const listItem = checkbox.parentNode.parentNode;// i dont know


       if (checked) {
         listItem.clasName = 'responed';
       } else {
         listItem.className = '';

        }


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
