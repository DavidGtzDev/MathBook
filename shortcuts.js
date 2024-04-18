import { dragElement } from "./drag.js";
import { txtInput } from "./txtinput.js";
document.onkeyup = function(e) {
    if (e.altKey && e.which == 78){
        
        let id = Math.floor(Math.random() * 1000);
        let block = document.createElement("div")
        //block.className = "math-block draggable"
        
        txtInput(block)
        block.id = id;
        dragElement(block)
        
        document.body.appendChild(block)
        MathJax.typeset()
        
        
    }
};


