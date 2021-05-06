//Alert box 
window.onload = function(){
    document.onclick = function(e){
        console.log(e);
        alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元")
    }
}


//Confirm box
// let confirmAnswer = confirm("你確定要取消這個服務嗎?");
// console.log(confirmAnswer);
// let thisH1 = document.getElementsByTagName("h1")[1];
// if(confirmAnswer){
//     thisH1.innerHTML = "服務已取消";
// }else{
//     thisH1.innerHTML = "繼續使用本服務";
// }


//Prompt box
// let promtAnswer = prompt("小明家有三小人,兩人叫1、2,第三人叫?","3");
// let thisH1 = document.getElementById("response");

// switch(promtAnswer){
//     case "3":
//         thisH1.innerHTML = "那阿公是誰";
//         break;
//     case "阿公":
//         thisH1.innerHTML = "沒錯";
//         break;
//     default:
//         thisH1.innerHTML = "想什麼";
// }


// function showAlert(){
    // thisH1.innerHTML = "Hello";


//// Event Listenter
//     alert("hi");
// }

// let thisButtton = document.getElementsByTagName("button")[0];
// let thisH1 = document.getElementsByTagName("h1")[0];

////Event Listener
// thisButtton.addEventListener("click",showAlert);

// thisButtton.onclick = showAlert;
// thisButtton.onclick = function() {
//     thisH1.innerHTML = "Hello";
    // showAlert();


// //break contiune迴圈    
//     for(let i=0;i<10;i++){
//         if(i==3){
//             break;
//             // continue;
//         }
//         console.log(i);
//     }

//for in迴圈
    // let person = {
    //     firstName:"Ray",
    //     lastName:"Sun",
    //     height:172
    // };

    // for(q in person){
    //     console.log(q+":"+person[q]);
    // };
    // for(x in window){
    //     console.log(x+":"+window[x]);
    // };
// };