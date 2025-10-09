// this is a todo app

const saveButton = document.getElementById("save");
const textArea = document.getElementById("userText");
const history = document.getElementById("history");


saveButton.addEventListener("click",function()
{
// creating elements 
const removeBtn = document.createElement("button") ;
removeBtn.textContent = "✖️";
removeBtn.classList.add("removeBtn");
const textHolder = document.createElement("p"); 
textHolder.classList.add("todo");
const checkBox = document.createElement("input");
checkBox.type = "checkbox";
const container = document.createElement("div");
container.classList.add("template");

// check emty text
let data = textArea.value ;
textArea.value = "";
if(data === "")
    {
        alert("empty text ");
        return -1 ;
    } 

textHolder.textContent = data ;
container.append(checkBox,textHolder,removeBtn);
history.append(container);

// functions
checkBox.addEventListener("change",() => (checkBox.checked)? textHolder.classList.add("todoChecked") :  textHolder.classList.remove("todoChecked") );
removeBtn.addEventListener("click", () => container.remove() );
});

textArea.addEventListener("keydown",function(e)
{
if(e.key === "Enter")
{
    e.preventDefault;
    saveButton.click();
}
});

const mode = document.getElementById("mode");
const body = document.body ;

mode.addEventListener("click" , function()
{
    if(body.classList.contains("darkMode"))
    {
        // white mode
        body.classList.replace("darkMode","whiteMode");
        mode.textContent = "🌙";
        saveButton.classList.add("btnWhite");
        saveButton.classList.remove("btnDark");
        textArea.classList.add("textareaWhite");
        textArea.classList.remove("textareaBlack");
    }else
    {
        // dark mode
        body.classList.replace("whiteMode","darkMode");
        mode.textContent = "☀️";
        saveButton.classList.add("btnDark");
        saveButton.classList.remove("btnWhite");
        textArea.classList.add("textareaBlack");
        textArea.classList.remove("textareaWhite");
    }
});


textArea.addEventListener("input", function()
{

});