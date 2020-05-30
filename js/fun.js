window.onload = function(){
    
    function cTime(){
        var d = new Date();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM";
        hour = (hour == 0) ? 12 : (hour > 12) ? (hour - 12) : hour;
        hour = changeTime(hour);
        minutes = changeTime(minutes);
        seconds = changeTime(seconds);
        document.getElementById("clock").innerHTML = hour + ":" + minutes + ":" + seconds + " " + midday;
        var time = setTimeout(function(){
            cTime();
        }, 1000);
}
function changeTime(t){
    if ( t < 10 ) {
        return "0" + t;
    }
    else
        return t;
}
cTime();
};