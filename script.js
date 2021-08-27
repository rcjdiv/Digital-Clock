var div = document.getElementById('DSEGClock');
    var seconds = document.getElementById('seconds-front');
    var session = document.getElementById('sessin');

    function time() {
        div.innerHTML = "";
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var sesn = "PM";

        if (h > 12) {
            h = h - 12;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }

        if (h == 0) {
            h = 12;
        }
        if (h => 12) {
            sesn = "AM";
        }

        if (s < 10) {
            s = "0" + s;
        }

        div.innerHTML = h + ":" + m;
        seconds.innerHTML = s;
        session.innerHTML = sesn;

    }
    setInterval(time, 1000);