var alarmArr = [];

        function ch() {
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var s = d.getSeconds();
            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
            if (h <= 9) {
                hours.innerHTML = '0' + h;
            } else if (s <= 9) {
                seconds.innerHTML = '0' + s;
            } else if (m <= 9) {
                minutes.innerHTML = '0' + m;
            }
            for (var i = 0; i < alarmArr.length; i++) {
                var alarmEnabled = document.getElementById(`enableAlarm-${i}`).checked;
                if (alarmArr[i].hr == h && alarmArr[i].min == m && alarmEnabled) {
                    new Audio('Alarm.mp3').play();
                }
                break;
            }
        }

        setInterval(ch, 1000);

        function add() {
            var hoursAlarmInp = document.getElementById('hoursArlamInp');
            var minutesAlarmInp = document.getElementById('minutesArlamInp');
            if (hoursAlarmInp.value != '' && minutesAlarmInp.value != '') {
                alarmArr.push({
                    hr: parseInt(hoursAlarmInp.value),
                    min: parseInt(minutesAlarmInp.value)
                });

                var alarmId = alarmArr.length - 1;
                alarm.innerHTML += `
        <div id="alarm-${alarmId}" class="alarmChild">
            <h3>${hoursAlarmInp.value} : ${minutesAlarmInp.value}</h3>
            <div style='display: flex; flex-direction: row; align-items: center'>
                <div class="radio-container" style='margin-right: 20px'>
                    <input type="checkbox" id="enableAlarm-${alarmId}">
                    <label for="enableAlarm-${alarmId}"></label>
                    <span class="ball"></span>
                    </div>
                    <i class="fa-solid fa-trash-can" onclick="removeAlarm(${alarmId})"></i>
                    </div>
                    </div>`;
                hoursAlarmInp.value = ''
                minutesAlarmInp.value = ''
            }
        }

        function removeAlarm(index) {
            alarmArr.splice(index, 1);

            var alarmElement = document.getElementById(`alarm-${index}`);
            if (alarmElement) {
                alarmElement.remove();
            }
        }
