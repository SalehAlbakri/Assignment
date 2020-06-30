var header= document.getElementById('main-header');
var color= false;
header.addEventListener('mouseover', function() {
    setChange()
})
header.addEventListener('mouseleave', function() {
    setChange()
})
function setChange() {
    if (color != true) {
        document.querySelector('#main-header').style.backgroundColor="lightblue";
        document.querySelector('#main-header').style.color="red";
        color= true;
    } else {
        document.querySelector('#main-header').style.backgroundColor="black";
        document.querySelector('#main-header').style.color="yellow";
        color= false;
    }
}
var li= document.getElementById('loop');
var text = "";
for (let i=1; i<=10; i++) {
    text +="| " + i + " List Item |";
}
document.querySelector('#loop').innerHTML = text;
