import React, { useEffect, useState } from "react";

function MoonPhaseComponent() {
  useEffect(() => {
    const loadMoonPhases = (obj, callback) => {
      const gets = [];
      for (const i in obj) {
        gets.push(i + "=" + encodeURIComponent(obj[i]));
      }
      gets.push("LDZ=" + new Date(obj.year, obj.month - 1, 1) / 1000);
      const xmlhttp = new XMLHttpRequest();
      const url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&");
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          callback(JSON.parse(xmlhttp.responseText));
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    };

    const displayMoonPhase = (moon, date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const today = new Date(); // Get the current date
        const dayOfWeek = moon.phase[day].dayWeek;
      
        let occasion = "";
        if (year === 2004 && month === 10 && day === 17) {
          occasion = "the day you were born";
        } else if (year === 2020 && month === 1 && day === 2) {
          occasion = "when we met";
        } else if (
          year === today.getFullYear() &&
          month === today.getMonth() + 1 &&
          day === today.getDate()
        ) {
          occasion = "today";
        }
      
        const html = (
          <div key={date.toISOString()}>
            <b>The Moon {occasion}</b>
            <div>
              {day} <b>{moon.monthName}</b> {moon.year}
            </div>
            <div dangerouslySetInnerHTML={{ __html: moon.phase[day].svg }} />
            <div>
              {moon.phase[day].phaseName}{" "}
              {moon.phase[day].isPhaseLimit ? "" : Math.round(moon.phase[day].lighting) + "%"}
            </div>
          </div>
        );
      
        return html;
      };

    const configMoon = {
      lang: "en",
      size: 300,
      lightColor: "rgb(255,255,255)",
      shadeColor: "rgba(0,0,0, 0.9)",
      texturize: false,
    };

    const datesToDisplay = [
      new Date(2004, 9, 17), // October 17, 2004
      new Date(2017, 8, 6),  // January 2, 2020
      new Date(),            // Current day
    ];

    // Call the loadMoonPhases function for each date and update the state with the HTML.
    Promise.all(datesToDisplay.map(date => new Promise(resolve => {
      loadMoonPhases({ ...configMoon, month: date.getMonth() + 1, year: date.getFullYear() }, moonData => {
        const html = displayMoonPhase(moonData, date);
        resolve(html);
      });
    }))).then(htmlArray => {
      setHtml(htmlArray);
    });
  }, []);

  const [html, setHtml] = useState([]);

  return (
    <div className="flex items-center mx-72 mb-48">
      {html.map((element, index) => (
        <div key={index} id="ex1" className="moon-phase items-center flex">
          {element}
        </div>
      ))}
    </div>
  );
}

export default MoonPhaseComponent;
