function txtInput(elmnt){
    elmnt.classList.add("text-area")
    let textArea = document.createElement("textarea")
    textArea.style.width = "30vw"
    textArea.addEventListener("click", function(){
        textArea.focus()
    })
    let button = document.createElement("button")
    button.innerHTML = "Submit"
    button.addEventListener("click", function(){
        let text = ' $$' + textArea.value + '$$'
        let p = document.createElement("p")
        p.innerHTML = text
        elmnt.innerHTML = ""
        elmnt.appendChild(p)
        MathJax.typeset()
    })
   
    elmnt.appendChild(textArea)
    elmnt.appendChild(button)

}

export {txtInput}