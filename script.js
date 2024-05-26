function test() {  
    let textarea = document.getElementById("texDelo");
    let delo = textarea.value;
    let div = document.createElement("div");
    div.innerText = delo;
    div.classList.add("review")
    textarea.value="";
    let lacoste = document.getElementById("newReview")
    lacoste.append(div);
}