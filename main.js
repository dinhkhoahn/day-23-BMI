let submitButton = document.querySelector('.submit')
let weightInput = document.querySelector('.weight-f')
let heightInput = document.querySelector('.height-f')
let bmi = document.querySelector('.bmi')
let result = document.querySelector('.result')
let form = document.querySelector('.form')

submitButton.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('submit')
    let weight = weightInput.value
    let height = heightInput.value
    if (Number(weight) > 0 && Number(height) > 0) {
        let BMI = (weight/(height * height))
        bmi.textContent = BMI
        if (BMI < 16) {
            result.textContent = 'Gầy độ III'
        } else if (BMI < 17) {
            result.textContent = 'Gầy độ II'   
        } else if (BMI < 18.5) {
            result.textContent = 'Gầy độ I'
        } else if (BMI < 25) {
            result.textContent = 'Bình thường'
        } else if (BMI < 30) {
            result.textContent = 'Thừa cân'
        } else if (BMI < 35) {
            result.textContent = 'Béo phì độ I'
        } else if (BMI < 40) {
            result.textContent = 'Béo phì độ II'
        } else {
            result.textContent = 'Béo phì độ III'
        }
    } else {
        alert("Please give us proper numbers")
    }
})

submitButton.disabled = true

form.addEventListener('input', function(e) {
    let weight = weightInput.value
    let height = heightInput.value
    if (weight === "" || height === "") {
        submitButton.disabled = true
    } else {
        submitButton.disabled = false
    }
})




