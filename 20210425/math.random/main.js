$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        // $("h1").text($("li:first").text());
        // $("h1").text($("li:last").text());
        // $("h1").text($("li").eq(1).text());
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        // 找到img元件
        // 設定img元件的src屬性 -> 對應元件的title值
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
    });
});   