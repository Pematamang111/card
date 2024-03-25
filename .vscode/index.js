const button = document.querySelector("#open");
const dialog = document.querySelector("#myDialog");
const title = document.querySelector('#title');
const description = document.querySelector('#text');
const date = document.querySelector('#date');
const closeEl = document.querySelector('#close');
const todo = document.querySelector('#to-do');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
//const close = document.querySelector('')

button.addEventListener('click', function(){
    dialog.showModal();
})
JSON.parse(localStorage.getItem('card'));

function createCard(event){
    event.preventDefault();
  const card = document.createElement('div');
  card.style.backgroundColor = 'blue';
  const heading = document.createElement('h3');
  const text = document.createElement('p');
  const chooseDate = document.createElement('p');
  const deleteBtn = document.createElement('button');
  
  const formValue = {
    title: title.value,
    description: description.value.trim(),
    duedate: date.value
  }

localStorage.setItem('card', JSON.stringify(formValue));

console.log(formValue);

heading.innerHTML = formValue.title;
text.innerHTML = formValue.description;
chooseDate.innerHTML = formValue.duedate;
deleteBtn.innerHTML = 'delete';

card.append(heading);
card.append(text);
card.append(chooseDate);
card.append(deleteBtn);

todo.appendChild(card);

deleteBtn.addEventListener('click', function(){
  card.remove();
})

}

$( function() {
  $( date ).datepicker();
} );

$( function() {
  $( todo ).draggable();
} );

closeEl.addEventListener('click', function(e){
    createCard(e);
    dialog.close();

});
