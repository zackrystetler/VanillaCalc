function updateDisplay(){document.getElementById("display").innerHTML=value}function buildButtons(){for(var t=document.getElementById("calculator"),e=0;e<buttons.length;e++){var u=document.createElement("button");buttons[e].function?u.id=buttons[e].function:u.id=buttons[e].text,u.classList=buttons[e].type,u.innerText=buttons[e].text,u.addEventListener("click",pressButton),t.appendChild(u)}}function pressButton(){var t=this.id,e=this.classList;if("num"==e)"0"==value||1==clearNext?(value=t,clearNext=!1):value+=t;else if("dec"==e){if(value.includes("."))return;value+="."}else"func"==e?"clr"==t?(value="0",valueMem=null,mathOp=null,clearNext=!1):"inv"==t?value*=-1:"per"==t&&(value*=.01):"op"==e&&("eq"!=t&&(valueMem=value,mathOp=t,clearNext=!0),"eq"==t&&("div"==mathOp?value=valueMem/value:"mult"==mathOp?value*=valueMem:"sub"==mathOp?value=valueMem-value:"add"==mathOp&&(value=valueMem+value),mathOp=null,clearNext=!0));updateDisplay()}var buttons=[{text:"AC",function:"clr",type:"func"},{text:"+/-",function:"inv",type:"func"},{text:"%",function:"per",type:"func"},{text:"÷",function:"div",type:"op"},{text:7,type:"num"},{text:8,type:"num"},{text:9,type:"num"},{text:"×",function:"mult",type:"op"},{text:4,type:"num"},{text:5,type:"num"},{text:6,type:"num"},{text:"−",function:"sub",type:"op"},{text:1,type:"num"},{text:2,type:"num"},{text:3,type:"num"},{text:"+",function:"add",type:"op"},{text:0,type:"num"},{text:".",function:".",type:"dec"},{text:"=",function:"eq",type:"op"}],value="0",valueMem=null,mathOp=null,clearNext=!1;buildButtons();