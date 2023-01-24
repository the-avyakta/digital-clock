    /* developed by i_avyakta */
    setInterval(Clock, 1);
      var currentDate = new Date();
      document.querySelector("#date").innerHTML = currentDate.toString().slice(3, 15);

      function Clock() {

        var date = new Date();
        var millisecs = date.getMilliseconds(),
          secs = date.getSeconds(),
          mins = date.getMinutes(),
          hours = date.getHours();

        document.querySelector("#watch").innerHTML = hours + ":" + mins + ":" + secs + ":";
        document.querySelector("#millisec").innerHTML = millisecs;
      }
     /* developed by i_avyakta */
