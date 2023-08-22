let dummyTableData = {
    '0-0': '2021-01-01T20:39:26.023Z',
    '0-1': '2021-01-02T20:39:26.023Z',
    '0-2': '2021-01-03T20:39:26.023Z',
    '0-3': '2021-01-04T20:39:26.023Z',
    '0-4': '2021-01-05T20:39:26.023Z',
    '0-5': '2021-01-06T20:39:26.023Z',
    '0-6': '2021-01-07T20:39:26.023Z',
    '0-7': '2021-01-08T20:39:26.023Z',
    '1-0': 100,
    '1-1': 120,
    '1-2': 140,
    '1-3': 150,
    '1-4': 166,
    '1-5': 174,
    '1-6': 182,
    '1-7': 194,
    '2-0': 990,
    '2-1': 980,
    '2-2': 970,
    '2-3': 960,
    '2-4': 956,
    '2-5': 954,
    '2-6': 955,
    '2-7': 949,
  };
  
let testText = document.createElement('h1');
 testText.id = 'title';
 testText.innerHTML = 'BioReactor Data';
 document.body.appendChild(testText);
let calcForm =document.createElement('div')
calcForm.id = 'calcForm';
document.body.appendChild(calcForm);

let Xlabel = document.createElement('label');
Xlabel.id = Xlabel;
Xlabel.innerHTML = "Density Modifier";
calcForm.appendChild(Xlabel);

let Xinput =document.createElement('input')
Xinput.id = "Xinput";
calcForm.appendChild(Xinput);

let Ylabel = document.createElement('label');
Ylabel.id = Ylabel;
Ylabel.innerHTML = "Volume Modifier";
calcForm.appendChild(Ylabel);

let Yinput =document.createElement('input')
Yinput.id = "Yinput";
calcForm.appendChild(Yinput);

let OperLabel = document.createElement('label');
OperLabel.id = OperLabel;
OperLabel.innerHTML = "Operant";
calcForm.appendChild(OperLabel);

let Operinput =document.createElement('input')
Operinput.id = "Operinput";
calcForm.appendChild(Operinput);

let ModLabel = document.createElement('label');
ModLabel.id = OperLabel;
ModLabel.innerHTML = "Modifier";
calcForm.appendChild(ModLabel);


let modInput =document.createElement('input')
modInput.id = "MmodInput";
calcForm.appendChild(modInput);

let submitButton = document.createElement('button');
submitButton.id = 'submitbuton';
submitButton.innerHTML = 'Submit';
calcForm.appendChild(submitButton);
function runCalc(){
    let caulculationResults = []
    function calculator(x,y,operator, xmod, ymod , totalmod){
       
        switch (operator) {
            case '+':
               return result = (xmod * x) + (ymod * y) + totalmod;
                
            case '-':
               return result = (xmod * x) - (ymod * y) + totalmod;
                
            case '*':
                return result = (xmod * x) * (ymod * y) + totalmod;
                
            case '/':
                return result = (xmod * x) / (ymod * y) + totalmod;
                
            default:
                throw new Error("Invalid operator");
        }
    };
    
    
    cellDArray.forEach((element,index) => {
        caulculationResults.push(calculator(element,volumeArray[index],Operinput.value,Xinput.value,Yinput.value,modInput.value) )
      
    });
    
    
    ColumnFill(caulculationResults, '4-1');
}
submitButton.addEventListener('click', runCalc)
 let table = document.createElement('table')
 table.id = 'table';

 let headerRow = document.createElement('tr');
 let headerCell1 = document.createElement('th');
 let headerCell2 = document.createElement('th');
 let headerCell3 = document.createElement('th');
 let headerCell4 = document.createElement('th');
 headerCell1.innerHTML = 'Time';
 headerCell2.innerHTML = 'Cell Density';
 headerCell3.innerHTML = 'Volume'
 headerCell4.innerHTML = 'Calculation'
 table.appendChild(headerRow);
 headerRow.appendChild(headerCell1);
 headerRow.appendChild(headerCell2);
 headerRow.appendChild(headerCell3);
 headerRow.appendChild(headerCell4);
 document.body.appendChild(table);
 for (let i = 0; i < 8; i++) {
    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    newRow.setAttribute('id', 'row' + (i +1));
   
}

 
let timeArray = Object.values(dummyTableData).slice(0,8);
let cellDArray = Object.values(dummyTableData).slice(8,16);
let volumeArray =  Object.values(dummyTableData).slice(16);

let rows = Array.from(table.rows);
function ColumnFill(fillfrom, columnNumber){
for (let i = 1; i < 9; i++) {
    let newCell = document.createElement('td');
   rows[i].appendChild(newCell)
   newCell.innerHTML = fillfrom[i-1];
   newCell.setAttribute('id', 'cell '+ columnNumber+ (i ));
}
};
ColumnFill(timeArray,'1-');
ColumnFill(cellDArray, '2-');
ColumnFill(volumeArray, '3-');

