const display = document.querySelector("p");
function doDate () {
    
    let now = new Date();
    display.innerText = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;;

}
doDate();
setInterval (doDate, 1000);