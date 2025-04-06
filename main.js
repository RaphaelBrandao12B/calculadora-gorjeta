let bill = 0
let tipPorcentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue () {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPorcentageValue(value){
    tipPorcentage = value / 100

    removeClassButtonSelected()

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function removeClassButtonSelected() {
    if (buttonSelected !==null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}