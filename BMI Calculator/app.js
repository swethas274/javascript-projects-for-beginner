const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const button = document.getElementById('calculate');
const result = document.getElementById('result');
const form = document.getElementById('bmi-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // stops page refreshing on button click
    let heigh = heightInput.value;
    let weight = weightInput.value;

    if (heigh === '' || weight === '') {
        result.textContent = 'Please enter both height and weight.';
        return;
    }

    let bmi = (weight / ((heigh / 100) ** 2));
    bmi = Number(bmi.toFixed(2));
    result.textContent = `Your BMI is ${bmi}.`;

    if (bmi < 18.5) {
        result.textContent += ' You are underweight.';

    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.textContent += ' You have a normal weight.';

    } else if (bmi >= 25 && bmi < 29.9) {
        result.textContent += ' You are overweight.';
    } else {
        result.textContent += ' You are obese.';
    }

});
