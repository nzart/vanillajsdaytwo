function whatTimeIsIt() {
    const now = new Date();
    
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    const time = hour + ':' + min + '.' + sec;
    document.getElementById('time'). textContent = time;
}



setInterval(whatTimeIsIt, 1000);
