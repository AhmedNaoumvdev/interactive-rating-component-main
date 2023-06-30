const rateSelect = document.querySelectorAll('[name="rateSelect"]');
const ratingForm = document.querySelector('form');
const thankMessage = document.querySelector('.thankMessage');
const inserted = document.querySelector('.inserted');
console.log(inserted)
let valueSelected;

rateSelect.forEach(select =>{
    select.addEventListener('click', handleClick);
})

function handleClick(e){
    valueSelected = this.dataset.value;
    console.log(valueSelected);
}

ratingForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    document.querySelector('.container').classList.add('unactive');
    thankMessage.classList.remove('unactive');
    if(valueSelected !== '0'){
        inserted.textContent = valueSelected;
    }else{
        inserted.textContent = 0;
    }
}