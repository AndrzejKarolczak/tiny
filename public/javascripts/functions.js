"use strict";

function validateAndSaveCookie() {
    let numOfRowsField = document.getElementById("no-of-rows");
    let message = validateField(numOfRowsField.value, numOfRowsField.labels[0].textContent);
    let numOfColumnsField = document.getElementById("no-of-columns");
    message = message + validateField(numOfColumnsField.value, numOfColumnsField.labels[0].textContent);

    if (message !== "") {
        document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        alert(`Wystąpiły następujące problemy: ${message}`);
    } else {
        document.cookie = `${numOfRowsField.value}|${numOfColumnsField.value}`
    }
}

const validateField = (fieldName, fieldValue) => {
    let numberValue = Number(fieldValue);

    if (fieldValue !== "" && numberValue >= 1) {
        return "";
    } else {
        return `\n- wartość podana w polu '${fieldName}' musi być liczbą większą lub równą 1`;
    }
}

const generateTable = (numberOfRows, numberOfColumns) => {
    numberOfRows = Math.floor(numberOfRows);
    numberOfColumns = Math.floor(numberOfColumns);
    let placeHolder = document.getElementById("dynamic-table-placeholder");
    while (placeHolder.firstChild) placeHolder.removeChild(placeHolder.firstChild);

    let dynamicTable = document.createElement('table');
    dynamicTable.className = 'dynamic-table';
    let dynamicTableHeader = createHeader(numberOfColumns);
    dynamicTable.appendChild(dynamicTableHeader);
    let dynamicTableBody = createBody(numberOfRows, numberOfColumns);
    dynamicTable.appendChild(dynamicTableBody);
    placeHolder.appendChild(dynamicTable);
}

function createHeader(numberOfColumns) {
    let dynamicTableHeader = document.createElement('thead');
    dynamicTableHeader.className = 'dynamic-table-header';

    let dynamicTableHeaderRow = document.createElement('tr');
    dynamicTableHeaderRow.className = 'dynamic-table-header-row';

    for (let i = 1; i <= numberOfColumns; i++) {
        let headerColumn = document.createElement('th');
        headerColumn.innerText = `Nagłówek ${i}`;
        dynamicTableHeaderRow.appendChild(headerColumn);
    }

    dynamicTableHeader.appendChild(dynamicTableHeaderRow);
    return dynamicTableHeader;
}

function createBody(numberOfRows, numberOfColumns) {
    function changeFont() {
        if (this.style.fontWeight === "bold")
            this.style.fontWeight = "normal";
        else
            this.style.fontWeight = "bold";
    }

    let dynamicTableBody = document.createElement('tbody');
    dynamicTableBody.className = 'dynamic-table-body';

    for (let i = 1; i <= numberOfRows; i++) {
        let row = document.createElement('tr');

        for (let j = 1; j <= numberOfColumns; j++) {
            let column = document.createElement('td');
            column.innerText = `Komórka ${i}, ${j}`;
            column.onclick = changeColors;
            column.onmouseover = changeFont;
            column.onmouseleave = changeFont;
            row.appendChild(column);
        }
        dynamicTableBody.appendChild(row);
    }

    return dynamicTableBody;
}

function changeColors() {
    this.style.color = getRandomColor();
    this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const scale = 256;
    let red = Math.floor(Math.random() * scale);
    let green = Math.floor(Math.random() * scale);
    let blue = Math.floor(Math.random() * scale);
    return fullColorHex(red, green, blue);
}

function fullColorHex(red, green, blue) {
    const rgbToHex = function (rgb) {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    return "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
}

module.exports = validateField;
module.exports = generateTable;