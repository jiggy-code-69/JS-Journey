 function clock2() {
            var weekday = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                d = new Date(),
                date = d.getDate(),
                month = d.getMonth() + 1,
                year = d.getFullYear(),


                dateEls = document.querySelector('.date'),
                dayEls = document.querySelector('.day');

            var day = weekday[d.getDay()];

            if (month < 9) {
                month = "0" + month;
            }

           
            dateEls.innerHTML = date + "/" + month + "/" + year;
            dayEls.innerHTML = day;
        }
        setInterval("clock2()", 100);

