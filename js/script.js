let num = 0;
let result = 0;
let hasDecimal = false;
let hasRefreshed = true;
let hasTwoNums = false;
let isAdd = false;
let isSubtract = false;
let isMultiply = false;
let isDivide = false;

let display = document.getElementById("result-display");

function clearContent() {
    hasDecimal = false;
    hasRefreshed = true;
    hasTwoNums = false;
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
    display.innerHTML = "0";
    num = 0;
    result = 0;
}

function setDecimal() {
    if (hasDecimal === false) {
        hasDecimal = true;
        display.innerHTML += ".";
    }
}

function getNum(value) {
    if (hasRefreshed) {
        num = value;
        hasRefreshed = false;
        display.innerHTML = "";
        display.innerHTML = value;
    } else {
        let string = display.innerText;
        string += value;
        if (string.search(".") === -1) {
            num = parseInt(string);
        } else {
            num = parseFloat(string);
        }
        display.innerHTML = num;
    }
}

function add() {
    if (hasTwoNums) {
        if (isAdd && !hasRefreshed) {
            result += num;
            display.innerHTML = result;
            num = result;
        } else if (isSubtract && !hasRefreshed) {
            result -= num;
            display.innerHTML = result;
            num = result;
        } else if (isDivide && !hasRefreshed) {
            result /= num;
            display.innerHTML = result;
            num = result;
        } else if (isMultiply && !hasRefreshed) {
            result *= num;
            display.innerHTML = result;
            num = result;
        } else {
            display.innerHTML = "";
            result = num;
            display.innerHTML = result;
            hasTwoNums = true;
        }
    } else {
        display.innerHTML = "";
        result = num;
        hasTwoNums = true;
        display.innerHTML = result;
    }
    hasRefreshed = true;
    isAdd = true;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
}

function subtract() {
    if (hasTwoNums) {
        if (isAdd && !hasRefreshed) {
            result += num;
            display.innerHTML = result;
            num = result;
        } else if (isSubtract && !hasRefreshed) {
            result -= num;
            display.innerHTML = result;
            num = result;
        } else if (isDivide && !hasRefreshed) {
            result /= num;
            display.innerHTML = result;
            num = result;
        } else if (isMultiply && !hasRefreshed) {
            result *= num;
            display.innerHTML = result;
            num = result;
        } else {
            display.innerHTML = "";
            result = num;
            display.innerHTML = result;
            hasTwoNums = true;
        }
    } else {
        display.innerHTML = "";
        result = num;
        display.innerHTML = result;
        hasTwoNums = true;
    }
    hasRefreshed = true;
    isSubtract = true;
    isAdd = false;
    isMultiply = false;
    isDivide = false;
}

function multiply() {
    if (hasTwoNums) {
        if (isAdd && !hasRefreshed) {
            result += num;
            display.innerHTML = result;
            num = result;
        } else if (isSubtract && !hasRefreshed) {
            result -= num;
            display.innerHTML = result;
            num = result;
        } else if (isDivide && !hasRefreshed) {
            result /= num;
            display.innerHTML = result;
            num = result;
        } else if (isMultiply && !hasRefreshed) {
            result *= num;
            display.innerHTML = result;
            num = result;
        } else {
            display.innerHTML = "";
            result = num;
            display.innerHTML = result;
            hasTwoNums = true;
        }
    } else {
        display.innerHTML = "";
        result = num;
        display.innerHTML = result;
        hasTwoNums = true;
    }
    hasRefreshed = true;
    isMultiply = true;
    isAdd = false;
    isSubtract = false;
    isDivide = false;
}

function divide() {
    if (hasTwoNums) {
        if (isAdd && !hasRefreshed) {
            result += num;
            display.innerHTML = result;
            num = result;
        } else if (isSubtract && !hasRefreshed) {
            result -= num;
            display.innerHTML = result;
            num = result;
        } else if (isDivide && !hasRefreshed) {
            result /= num;
            display.innerHTML = result;
            num = result;
        } else if (isMultiply && !hasRefreshed) {
            result *= num;
            display.innerHTML = result;
            num = result;
        } else {
            display.innerHTML = "";
            result = num;
            display.innerHTML = result;
            hasTwoNums = true;
        }
    } else {
        display.innerHTML = "";
        result = num;
        display.innerHTML = result;
        hasTwoNums = true;
    }
    hasRefreshed = true;
    isDivide = true;
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
}

function equal() {
    if (isAdd) {
        result += num;
        isAdd = false;
    }

    if (isSubtract) {
        result -= num;
        isSubtract = false;
    }

    if (isMultiply) {
        result *= num;
        isMultiply = false;
    }

    if (isDivide) {
        result /= num;
        isDivide = false;
    }
    num = result;
    hasRefreshed = true;
    hasTwoNums = false;
    display.innerHTML = result;
}
