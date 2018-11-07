const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener ('submit', (e) =>{
      e.preventDefault();
      //CRETING INPUT AND ADDING ON HTML
      const text = input.value;
      input.value = " ";
      const ul = document.getElementById('invitedList'); //THIS BECAME SCOPE AFTER
      const li = document.createElement('li');//create li no html
      li.textContent = text;//TYPE OF CONTENT
      ul.appendChild(li)//ADDING ON HTML

      //CRATEING THE LABEL CONFIRM WILL BE ADD ON HTML
      const label =  document.createElement('label');
      label.textContent = 'confirmed';//TYPE OF CONTENT
      li.appendChild(label);//ADDING ON HTMl


       //CREATING CHECK BOXY AND APPENDING
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox';//TYPE OF CONTENT
       label.appendChild(checkbox);//ADDING ON HTML


       //CREATING Remove
       const editButton = document.createElement('button')
      editButton.textContent = 'edit';//create edit button
       li.appendChild(editButton);//ADDING ON HTML debaixo do li



       //CREATING Remove
       const removeButton = document.createElement('button')
       removeButton.textContent = 'remove';//TYPE OF CONTENT
       li.appendChild(removeButton);//ADDING ON HTML
});

//add an event change, when its changes
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

    //use the parent elemnt event handler to handle click event -
    // received by the button but travel to li then ul
// if the event target elemnt tag name is button please run
//Remove start to work
//
// ul.addEventListener('click', (e) => {
//       if (e.target.tagName === "BUTTON") {
//      li.appendChild(span);
//       const button = e.target;
//       const li = button.parentNode;
//       const ul = li.parentNode;
// if(button.textContent === 'remove'){
//  ul.removeChild(li);
//   } else if (button.textContent === 'edit'){
//     const span = document.createElement('span');
//     span.textContent = text;
//    const span = li.firstElementChild;
//     const input = document.createElement('input');
// input.type = 'text';
// input.value = span.textContent;
// li.insertBefore(input, span);
// li.removeChild(span);
//
//  }
// }
});











// the create and li that is add do the dom with append
// write a function createLi(text)
//instore the output to li

// function createLi(text) {
//   const li = document.createElement('li');
//   li.textContent = text;//TYPE OF CONTENT
//
//   //CRATEING THE LABEL CONFIRM WILL BE ADD ON HTML
//   const label =  document.createElement('label');
//   label.textContent = 'confirmed';//TYPE OF CONTENT
//   li.appendChild(label);//ADDING ON HTMl
//
//
//    //CREATING CHECK BOXY AND APPENDING
//   const checkbox = document.createElement('input')
//   checkbox.type = 'checkbox';//TYPE OF CONTENT
//    label.appendChild(checkbox);//ADDING ON HTML
//
//
//    //CREATING Remove
//    const button = document.createElement('button')
//    button.textContent = 'remove';//TYPE OF CONTENT
//    li.appendChild(button);//ADDING ON HTML
// return li;
// }
