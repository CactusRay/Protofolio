$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;

    var millisecsPerDay = 24*60*60*1000;

    for(var x=0;x<topicCount;x++){
        if(x%2==1){
            $("#courseTable").append("<tr>");

            //todo 第一種方法 $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td class="div">${x+1}</td>`);
            
            // $("#courseTable").append(`<td>${typeof(startDate+7*x)}</td>`);
            
            $("#courseTable").append(`<td class="div">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString('en-US').slice(0,-5)}</td>`);
            $("#courseTable").append(`<td class="div">${topic[x]}</td>`);
            $("#courseTable").append("</tr>");
        }else{

            $("#courseTable").append("<tr>");
    
            //todo 第一種方法 $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td>${x+1}</td>`);
    
            // $("#courseTable").append(`<td>${typeof(startDate+7*x)}</td>`);
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString('en-US').slice(0,-5)}</td>`);
            $("#courseTable").append(`<td>${topic[x]}</td>`);
            $("#courseTable").append("</tr>");

        }    
    }
});