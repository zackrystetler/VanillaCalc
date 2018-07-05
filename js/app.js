var buttons = [
    {
        text: "AC",
        function: "clr",
        type: "func"
    },
    {
        text: "+/-",
        function: "inv",
        type: "func"
    },
    {
        text: "%",
        function: "per",
        type: "func"
    },
    {
        text: "÷",
        function: "div",
        type: "op"
    },
    {
        text: 7,
        type: "num"
    },
    {
        text: 8,
        type: "num"
    },
    {
        text: 9,
        type: "num"
    },
    {
        text: "×",
        function: "mult",
        type: "op"
    },
    {
        text: 4,
        type: "num"
    },
    {
        text: 5,
        type: "num"
    },
    {
        text: 6,
        type: "num"
    },
    {
        text: "−",
        function: "sub",
        type: "op"
    },
    {
        text: 1,
        type: "num"
    },
    {
        text: 2,
        type: "num"
    },
    {
        text: 3,
        type: "num"
    },
    {
        text: "+",
        function: "add",
        type: "op"
    },
    {
        text: 0,
        type: "num"
    },
    {
        text: ".",
        function: ".",
        type: "dec"
    },
    {
        text: "=",
        function: "eq",
        type: "op"
    }
]

var value = "0";
var valueMem = null;
var mathOp = null;
var clearNext = false;

buildButtons();

function updateDisplay() {
    document.getElementById("display").innerHTML = value;
}


function buildButtons() {

    var buttonGrid = document.getElementById('calculator');

    for (var i=0;i<buttons.length;i++) {
        
        var button = document.createElement('button');

        if (buttons[i].function) {
            button.id = buttons[i].function;
        } else {
            button.id = buttons[i].text;
        }

        button.classList = buttons[i].type;
        button.innerText = buttons[i].text;
        button.addEventListener("click", pressButton);

        buttonGrid.appendChild(button);

    }
}

function pressButton() {

    var pressedButt = this.id;
    var pressedButtType = this.classList;

    if (pressedButtType == "num") {

        if (value == "0" || clearNext == true) {
            value = pressedButt;
            clearNext = false;
        } else {
            value += pressedButt;
        } 

    } else if (pressedButtType == "dec") {

        if (value.includes(".")) {
            return;
        } else {
            value += ".";
        }
        
    } else if (pressedButtType == "func") {

        if (pressedButt == "clr") {
            value = "0";
            valueMem = null;
            mathOp = null;
            clearNext = false;

        } else if (pressedButt == "inv") {
            value *= -1;
        } else if (pressedButt == "per") {
            value = value*.01;
        } 

    } else if (pressedButtType == "op") {

        
        if (pressedButt != "eq") {

            valueMem = value;
            mathOp = pressedButt;
            clearNext = true;
        }


        if (pressedButt == "eq") {

            if (mathOp == "div") {
                value = valueMem / value;
            } else if (mathOp == "mult") {
                value = valueMem * value;
            } else if (mathOp == "sub") {
                value = valueMem - value;
            } else if (mathOp == "add") {
                value = valueMem + value;
            } 
            mathOp = null;
            clearNext = true;
        }    
    }

    updateDisplay();

}
