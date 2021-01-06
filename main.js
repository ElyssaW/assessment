document.addEventListener('DOMContentLoaded', ()=> {
    
    let outputValue = 0
    let inputValue = 1
    input.setAttribute('value', inputValue)
    
    function plusOutput() {
        inputValue = parseInt(input.value)
        outputValue = outputValue + inputValue
        checkIfRed()
        output.innerText = outputValue
    }
    
    function minusOutput() {
        inputValue = parseInt(input.value) * -1
        outputValue = outputValue + inputValue
        checkIfRed()
        output.innerText = outputValue
    }
    
    function checkIfRed() {
        if (outputValue < 0) {
            output.style.color = 'red'
        } else {
            output.style.color = 'black'
        }
    }
    
    plus.addEventListener('click', plusOutput)
    minus.addEventListener('click', minusOutput)
    
})