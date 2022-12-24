function show(val) {
    document.querySelector(".output").value += val;
}

function cease() {
    document.querySelector(".output").value = "";
}

function result() {
    document.querySelector(".output").value = eval(document.querySelector(".output").value);
}

function save() {
    var text = document.querySelector(".output").value;
    var div = document.querySelector(".record");
    var element = document.createElement("li");
    element.innerHTML = text.toString();
    div.appendChild(element);
}

function eraseList() {
    var div = document.querySelector(".record");
    div.innerHTML = ''
}