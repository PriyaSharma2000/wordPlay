let text = document.getElementById("text");
let output = document.getElementById("output");
let findtext = document.getElementById("findtext");
let replacetext = document.getElementById("replacetext");
let reptext = document.getElementById("reptext");

text.addEventListener('input',()=>{
    let text = document.getElementById("text");
    let output = document.getElementById("output");
    let textval = text.value.trim().split(/\s+/);
    output.innerHTML = textval.length;
    if(text.value == 0){
        output.innerHTML = 0
        text.value = text.value.trim()
    }
})

findtext.addEventListener("input", ()=>{
    let textval = text.value.trim().split(/\s+/);
    let count = 0;
    let findtext = document.getElementById("findtext");
    let findoutput = document.getElementById("findoutput");
    for(var i=0 ; i<textval.length ; i++){
        if(findtext.value == textval[i]){
            count ++;
        }
    }
    findoutput.innerHTML = count;
})

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let replacetext = document.getElementById("replacetext").value;
    let reptext = document.getElementById("reptext").value;
    let text = document.getElementById("text");
    let textval = text.value.trim().split(/\s+/);
    for(var i=0;i<textval.length;i++){
        if(textval.indexOf(replacetext) != -1){
            var re = new RegExp("\\b" + replacetext + "\\b", "g");
            var newText = text.value.replace(re,reptext)
            text.value = newText;
        }
    }
});

let clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener("click",()=>{
    let output = document.getElementById("output");
    let findtext = document.getElementById("findtext");
    let replacetext = document.getElementById("replacetext");
    let findoutput = document.getElementById("findoutput");
    let reptext = document.getElementById("reptext");
    let text = document.getElementById("text");
    output.innerHTML = "";
    findtext.value = "";
    replacetext.value = "";
    findoutput.innerHTML = "";
    reptext.value = "";
    text.value = "";
})