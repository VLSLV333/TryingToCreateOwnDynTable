// let counter = 1;

const appRoot = document.getElementById('app-root');

// let tableMy = document.createElement('table')

// let staticHeading = document.createElement('thead')
// staticHeading.setAttribute('id', 'head')

// let headgingRow = document.createElement('tr')

// let nameColumn = document.createElement('th')
// let textInsideTH1 = document.createElement('span')
// textInsideTH1.innerText = 'Name '
// // textInsideTH1.setAttribute('id', 'country-name')
// textInsideTH1.setAttribute('id', 'name')
// // textInsideTH1.setAttribute('class', `table-column`)
// textInsideTH1.setAttribute('class', `table-column + ${counter}`)
// let i1 = document.createElement('i');
// i1.setAttribute('class', 'caret')

// textInsideTH1.append(i1)

// nameColumn.append(textInsideTH1)

// let quantityColumn = document.createElement('th')
// let textInsideTH2 = document.createElement('span')
// textInsideTH2.innerText = 'Quantity '
// textInsideTH2.setAttribute('id', 'capital')
// // textInsideTH2.setAttribute('class', `table-column`)
// textInsideTH2.setAttribute('class', `table-column + ${counter}`)
// let i2 = document.createElement('i');
// i2.setAttribute('class', 'caret')

// textInsideTH2.append(i2)

// quantityColumn.append(textInsideTH2)

// let priceColumn = document.createElement('th')
// let textInsideTH3 = document.createElement('span')
// textInsideTH3.innerText = 'Price '
// textInsideTH3.setAttribute('id', 'price')
// // textInsideTH3.setAttribute('class', `table-column`)
// textInsideTH3.setAttribute('class', `table-column + ${counter}`)
// let i3 = document.createElement('i');
// i3.setAttribute('class', 'caret')

// textInsideTH3.append(i3)

// priceColumn.append(textInsideTH3)

// let expiryColumn = document.createElement('th')
// let textInsideTH4 = document.createElement('span')
// textInsideTH4.innerText = 'Expiry Date '
// textInsideTH4.setAttribute('id', 'expiry')
// // textInsideTH4.setAttribute('class', `table-column`)
// textInsideTH4.setAttribute('class', `table-column + ${counter}`)
// let i4 = document.createElement('i');
// i4.setAttribute('class', 'caret')

// textInsideTH4.append(i4)

// expiryColumn.append(textInsideTH4)

// let AreaColumn = document.createElement('th')
// let textInsideTH5 = document.createElement('span')
// textInsideTH5.innerText = 'Area '
// textInsideTH5.setAttribute('id', 'area')
// // textInsideTH5.setAttribute('class', `table-column`)
// textInsideTH5.setAttribute('class', `table-column + ${counter}`)
// let i5 = document.createElement('i');
// i5.setAttribute('class', 'caret')

// textInsideTH5.append(i5)

// AreaColumn.append(textInsideTH5)

// let Flag = document.createElement('th')
// let textInsideTH6 = document.createElement('span')
// textInsideTH6.innerText = 'Flag '
// textInsideTH6.setAttribute('id', 'flag')
// // textInsideTH6.setAttribute('class', `table-column`)
// textInsideTH6.setAttribute('class', `table-column + ${counter}`)
// let i6 = document.createElement('i');
// i6.setAttribute('class', 'caret')

// textInsideTH6.append(i6)

// Flag.append(textInsideTH6)

// // headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn)
// headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn, AreaColumn, Flag)
// // headgingRow.append(NameColumn, CapitalColumn, WorldRegionColumn, LanguagesColumn, AreaColumn, Flag)

// staticHeading.append(headgingRow)

// let tableBody = document.createElement('tbody')
// tableBody.setAttribute('id', 'mytable')

// tableMy.append(staticHeading, tableBody)



// adding select



let divSearchQuery = document.createElement('div')

let SearchQuerydLabel = document.createElement('label');
SearchQuerydLabel.innerText = 'Please choose search query:'

let selectSearchQuery = document.createElement('select')
// selectSearchQuery.setAttribute('disabled', 'true')
selectSearchQuery.setAttribute('id', 'select')

let selectOption = document.createElement('option')
selectOption.innerText = 'Select value'
selectOption.setAttribute('selected', 'true')

selectSearchQuery.append(selectOption)

divSearchQuery.append(SearchQuerydLabel, selectSearchQuery)


   
    
    for (let i = 0; i < externalService.getRegionsList().length; i++){
        let selectOption = document.createElement('option')
        selectOption.setAttribute('value', `${externalService.getRegionsList()[i]}`)
        selectOption.innerText = externalService.getRegionsList()[i];
        selectSearchQuery.append(selectOption);
    }
// } else if (document.getElementById('region2').checked === true){
//     appRoot.append(pText)
//     selectSearchQuery.removeAttribute('disabled')
//     if(selectSearchQuery.length > 0){
//         selectSearchQuery.length = 1;
//     }
//     for (let i = 0; i < externalService.getLanguagesList().length; i++){
//         let selectOption = document.createElement('option')
//         selectOption.setAttribute('value', `${externalService.getLanguagesList()[i]}`)
//         selectOption.innerText = externalService.getLanguagesList()[i];
//         selectSearchQuery.append(selectOption);
//     }
// }

// form.append(divtypeOfSearch, divSearchQuery)


appRoot.append(divSearchQuery);

// appRoot.append(divSearchQuery, tableMy);

// let table = document.getElementById('mytable');

// let tableColumns = document.getElementsByClassName(`table-column`);



//     варіант в якому повторюється трабл, фільтрується для кожної раніше створеної таблиці
document.getElementById('select').addEventListener('change', function () {

    let counter = 1;

// const appRoot = document.getElementById('app-root');

let tableMy = document.createElement('table')

let staticHeading = document.createElement('thead')
staticHeading.setAttribute('id', 'head')

let headgingRow = document.createElement('tr')

let nameColumn = document.createElement('th')
let textInsideTH1 = document.createElement('span')
textInsideTH1.innerText = 'Name '
// textInsideTH1.setAttribute('id', 'country-name')
textInsideTH1.setAttribute('id', 'name')
// textInsideTH1.setAttribute('class', `table-column`)
textInsideTH1.setAttribute('class', `table-column + ${counter}`)
let i1 = document.createElement('i');
i1.setAttribute('class', 'caret')

textInsideTH1.append(i1)

nameColumn.append(textInsideTH1)

let quantityColumn = document.createElement('th')
let textInsideTH2 = document.createElement('span')
textInsideTH2.innerText = 'Quantity '
textInsideTH2.setAttribute('id', 'capital')
// textInsideTH2.setAttribute('class', `table-column`)
textInsideTH2.setAttribute('class', `table-column + ${counter}`)
let i2 = document.createElement('i');
i2.setAttribute('class', 'caret')

textInsideTH2.append(i2)

quantityColumn.append(textInsideTH2)

let priceColumn = document.createElement('th')
let textInsideTH3 = document.createElement('span')
textInsideTH3.innerText = 'Price '
textInsideTH3.setAttribute('id', 'price')
// textInsideTH3.setAttribute('class', `table-column`)
textInsideTH3.setAttribute('class', `table-column + ${counter}`)
let i3 = document.createElement('i');
i3.setAttribute('class', 'caret')

textInsideTH3.append(i3)

priceColumn.append(textInsideTH3)

let expiryColumn = document.createElement('th')
let textInsideTH4 = document.createElement('span')
textInsideTH4.innerText = 'Expiry Date '
textInsideTH4.setAttribute('id', 'expiry')
// textInsideTH4.setAttribute('class', `table-column`)
textInsideTH4.setAttribute('class', `table-column + ${counter}`)
let i4 = document.createElement('i');
i4.setAttribute('class', 'caret')

textInsideTH4.append(i4)

expiryColumn.append(textInsideTH4)

let AreaColumn = document.createElement('th')
let textInsideTH5 = document.createElement('span')
textInsideTH5.innerText = 'Area '
textInsideTH5.setAttribute('id', 'area')
// textInsideTH5.setAttribute('class', `table-column`)
textInsideTH5.setAttribute('class', `table-column + ${counter}`)
let i5 = document.createElement('i');
i5.setAttribute('class', 'caret')

textInsideTH5.append(i5)

AreaColumn.append(textInsideTH5)

let Flag = document.createElement('th')
let textInsideTH6 = document.createElement('span')
textInsideTH6.innerText = 'Flag '
textInsideTH6.setAttribute('id', 'flag')
// textInsideTH6.setAttribute('class', `table-column`)
textInsideTH6.setAttribute('class', `table-column + ${counter}`)
let i6 = document.createElement('i');
i6.setAttribute('class', 'caret')

textInsideTH6.append(i6)

Flag.append(textInsideTH6)

// headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn)
headgingRow.append(nameColumn, quantityColumn, priceColumn, expiryColumn, AreaColumn, Flag)
// headgingRow.append(NameColumn, CapitalColumn, WorldRegionColumn, LanguagesColumn, AreaColumn, Flag)

staticHeading.append(headgingRow)

let tableBody = document.createElement('tbody')
tableBody.setAttribute('id', 'mytable')

tableMy.append(staticHeading, tableBody)

appRoot.append(tableMy);

let table = document.getElementById('mytable');


///


    let tableColumns = document.getElementsByClassName(`table-column + ${counter}`);

  

    if (this.value === 'Select value'){
        table.innerHTML = '';
    } else {
        let tableData = externalService.getCountryListByRegion(this.value); 
        let caretUpClassName = 'fa fa-caret-up';
        let caretDownClassName = 'fa fa-caret-down';


    const sort_by = (field, reverse) => {
    
        const key = 
        function(x) {
            // console.log( x[field]);
            return x[field];
        };
        
        reverse = !reverse ? 1 : -1;
        
        return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
        };

        function clearArrow() {
            let carets = document.getElementsByClassName('caret');
            // console.log(carets);
            for (let caret of carets) {
                // console.log(caret);
                caret.className = "caret";
            }
        }

    function toggleArrow(event) {
        let element = event.target;
        // console.log(element);
        let caret, field, reverse;
        if (element.tagName === 'SPAN') {
            caret = element.getElementsByClassName('caret')[0];
            // console.log(caret);
            field = element.id
            // console.log(field);
        }
        else {
            caret = element;
            field = element.parentElement.id
        }
    
        let iconClassName = caret.className;
        // console.log(iconClassName);
        clearArrow();
        if (iconClassName.includes(caretUpClassName)) {
            caret.className = `caret ${caretDownClassName}`;
            reverse = false;
        } else {
            reverse = true;
            caret.className = `caret ${caretUpClassName}`;
        }
    
        tableData.sort(sort_by(field, reverse));

        // clearTable();
        
        populateTable();
        
    }
    

    function populateTable() {

     
        table.innerHTML = '';

        


        for (let data of tableData) {
            let row = table.insertRow(-1);
            let name = row.insertCell(0);
            name.innerHTML = data.name;
    
            let quantity = row.insertCell(1);
            quantity.innerHTML = data.capital;
    
            let price = row.insertCell(2);
            price.innerHTML = data.region;
    
            let expiry = row.insertCell(3);
            expiry.innerHTML = data.languages;
    
            let area = row.insertCell(4);
            area.innerHTML = data.area;
    
            let flag = row.insertCell(5);
            flag.innerHTML = 'vlad';

            
        }
        
    
    }


    console.log('main code done');
    populateTable();
    

    
    function v (event){
        counter++;
        toggleArrow(event);
    }

    for (let column of tableColumns) {
        console.log(column);
        // console.log('vlad');
        
    column.addEventListener('click', v);
    }

    function clearEventListener(){
        for (let column of tableColumns) {
            console.log('vlad2');
            
            column.removeEventListener('click', v);
            }
    }
    

    }
    
});

