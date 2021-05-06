let thisH1 = document.getElementsByTagName("h1")[0];
thisH1.addEventListener("click",showAlert);

function showAlert(){
    alert(thisH1.innerHTML.split(" ")[3]);
}