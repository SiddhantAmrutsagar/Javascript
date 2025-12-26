const form = document.querySelector('form');

//this usecase will give you empty
//const weight = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    //isNaN(height) verifies that is the value of height is true and convertable into a number
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height. ${height}.is not a number`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight. ${weight}.is not a number`;
    } else {
        const bmi = (weight / (height * height) * 10000).toFixed(2)

        if (bmi < 18.6) {
            return results.innerHTML = `<span>Your BMI is ${bmi} and you lie in under Weight Category</span>`
        } else if (bmi > 18.6 && bmi < 24.9) {
            return results.innerHTML = `<span>Your BMI is ${bmi} and you lie in Normal Weight Category</span>`
        } else {
            return results.innerHTML = `<span>Your BMI is ${bmi} and you lie in Over Weight Category</span>`
        }


    }

});
