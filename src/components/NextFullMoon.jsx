import React, { useEffect, useState } from 'react';

function NextFullMoon() {
  const [nextFullMoonInfo, setNextFullMoonInfo] = useState('');

  useEffect(() => {
    function load_moon_phases(obj, callback) {
      var gets = [];
      for (var i in obj) {
        gets.push(i + "=" + encodeURIComponent(obj[i]));
      }
      gets.push("LDZ=" + new Date(obj.year, obj.month - 1, 1) / 1000);
      var xmlhttp = new XMLHttpRequest();
      var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&");
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          callback(JSON.parse(xmlhttp.responseText));
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    }

    function NextFullMoonDater(moon) {
      var nextFullMoonInfo = null;
      for (var nDay in moon.phase) {
        if (moon.phase[nDay].phaseName.toLowerCase() === 'full moon') {
          nextFullMoonInfo = {
            month: moon.monthName,
            year: moon.year,
            date: nDay,
          };
          break;
        }
      }

      if (nextFullMoonInfo) {
        setNextFullMoonInfo(nextFullMoonInfo);
      } else {
        setNextFullMoonInfo({ message: "No Full Moon in the near future" });
      }
    }

    var configMoon = {
      lang: 'en',
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      size: "100%",
      lightColor: "rgb(255,255,230)",
      shadeColor: "transparent",
      texturize: true,
    };

    load_moon_phases(configMoon, NextFullMoonDater);
  }, []);

  return (
    <div className='mb-20'>
      {nextFullMoonInfo.date ? (
        <p className='text-white text-6xl text-center textfont md:-mt-64'>
          The Next Full Moon Will Be On: {nextFullMoonInfo.date} of {nextFullMoonInfo.month}, {nextFullMoonInfo.year} <br/> Are You Ready?
        </p>
      ) : (
        <p className='pfont text-white text-3xl'>{nextFullMoonInfo.message}</p>
      )}
    </div>
  );
}

export default NextFullMoon;
