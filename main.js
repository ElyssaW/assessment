document.addEventListener('DOMContentLoaded', ()=> {
    
    let outputValue = 0
    let inputValue = 1
    input.setAttribute('value', inputValue)
    
    function minusOutput() {
        inputValue = parseInt(input.value) * -1
        changeOutput()
    }
    
    function plusOutput() {
        inputValue = parseInt(input.value)
        changeOutput()
    }
    
    function changeOutput() {
        outputValue = outputValue + inputValue
        output.style.color = (outputValue < 0 ) ? 'red' : 'black'
        output.innerText = outputValue
    }
    
    plus.addEventListener('click', plusOutput)
    minus.addEventListener('click', minusOutput)
    
})