const button = document.querySelector("#open");
const dialog = document.querySelector("#myDialog");
const title = document.querySelector('#title');
const description = document.querySelector('#text');
const closeEl = document.querySelector('#close')
//const close = document.querySelector('')

button.addEventListener('click', function(){
    dialog.showModal();
})
JSON.parse(localStorage.getItem('card'));

function createCard(event){
    event.preventDefault();
  const card = document.createElement('div');
  const heading = document.createElement('h3');
  const text = document.createElement('p');
  const deleteBtn = document.createElement('button');
  
  const formValue = {
    title: title.value,
    description: description.value.trim()
  }

localStorage.setItem('card', JSON.stringify(formValue));

console.log(formValue);
}
closeEl.addEventListener('click', function(){
    createCard();
    dialog.close();

});
