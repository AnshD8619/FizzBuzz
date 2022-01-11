
function getFizzbuzz(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let numbers = [];
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //calls generateNumbers function if true
        numbers = generateFizzBuzz(fizzValue, buzzValue);
        //Calls displayNumbers()
        displayFizzBuzz(numbers);    
    }
    else{
        alert("You must enter integers");
    }
}

function generateFizzBuzz(fizz, buzz){
    numbers = [];
    for(let index = 1; index<=100;index++){
        if(index % fizz == 0 && index % buzz == 0){
            numbers.push("FizzBuzz");
        }
        else if(index % fizz == 0){
            numbers.push("Fizz");
        }
        else if(index % buzz == 0){
            numbers.push("Buzz");
        }
        else{
            numbers.push(index);
        }
    }
    return numbers;
}

function displayFizzBuzz(fbArray){
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");
    tableBody.innerHTML = "";
    
    for (let index = 0; index < fbArray.length; index+=5) {
        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index])
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index+1])
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].classList.add(fbArray[index+2])
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].classList.add(fbArray[index+3])
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].classList.add(fbArray[index+4])
        rowCols[4].textContent = fbArray[index+4];
        tableBody.appendChild(tableRow);
    }
}