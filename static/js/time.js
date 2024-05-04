// a function that reads the current time in the format of "2023-07-09T00:00:00+0900"
// calculates the time difference between the current time and the target time
// and updates the time difference every second to a span element with the id of "btime"
function update_btime(from) {
    from = new Date(from);
    var to = new Date();
    var diff = to - from;
    var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("btime").innerHTML = years + "年" + days + "天" + hours + "時" + minutes + "分" + seconds + "秒";
}