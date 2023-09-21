const switchCheckbox = document.getElementById('switch');
const switchHandle = document.querySelector('.switch-handle');
const switchLabel = document.querySelector('.switch-container');


switchHandle.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
	switchColor();


});


switchLabel.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
	switchColor();
});


function switchColor() {
    const isMonthly = !switchCheckbox.checked; 
    switchLabel.style.background = isMonthly ? 'hsl(236, 72%, 79%)' : 'hsl(237, 63%, 64%)';

    const basicPrice = document.getElementById('basicPrice');
    const professionalPrice = document.getElementById('professionalPrice');
    const masterPrice = document.getElementById('masterPrice');

    if (isMonthly) {
        basicPrice.textContent = '199.99';
        professionalPrice.textContent = '249.99';
        masterPrice.textContent = '399.99';
    } else {

        basicPrice.textContent = '19.99';
        professionalPrice.textContent = '24.99';
        masterPrice.textContent = '39.99';
    }
}


switchColor();





