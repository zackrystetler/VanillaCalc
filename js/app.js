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
var memory = '0';
var display = '0';

buildButtons();
updateDisplay(memory);

function updateDisplay(x) {
    document.getElementById("display").innerHTML = x;
    console.log(memory);
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

    //logic if button pressed is a number
    if (pressedButtType == "num") {
        if (memory == '0') {
            memory = pressedButt;
            display = pressedButt;
        } else {
            memory += pressedButt;
            display += pressedButt;
        }
        updateDisplay(display);
    }
    
    //logic if button pressed is a decimal
    else if (pressedButtType == "dec") {
        if (memory.includes(pressedButt)) {
            return;
        } else {
            memory += pressedButt;
            display += pressedButt;
        }
        updateDisplay(display);
    } 
    
    //logic if button pressed is a function
    else if (pressedButtType == "func") {
        if (pressedButt == "clr") {
            memory = '0';
        } else if (pressedButt == "inv") {
            memory = eval(memory);
            memory *= -1;
        } else if (pressedButt == "per") {
            memory = eval(memory);
            memory/=100;            
        } 
        display = eval(memory);
        updateDisplay(display);
    } 
    
    //logic if button pressed is a math operation
    else if (pressedButtType == "op") {
        if (pressedButt == "div") {
            memory += "/";
            display = '';
        } else if (pressedButt == "mult") {
            memory += "*";
            display = '';
        } else if (pressedButt == "sub") {
            memory += "-";
            display = '';
        } else if (pressedButt == "add") {
            memory += "+";
            display = '';
        } else if (pressedButt == "eq") {
            display = eval(memory);
            updateDisplay(display);
        }     
    }    
}



