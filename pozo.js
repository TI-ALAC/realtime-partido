const URI = "https://widgets.fn.sportradar.com/betinaction2/es/Etc:UTC/gismo/match_timelinedelta/48613109?T=exp=1714589429~acl=/*~data=eyJvIjoiaHR0cHM6Ly9lY3VhYmV0LmNvbSIsImEiOiJlZTExYzI1NmQxYTliYmM1MzBiNGEzMzgwZGFlODY5OCIsImFjdCI6Im9yaWdpbmNoZWNrIiwib3NyYyI6Im9yaWdpbiJ9~hmac=8a146c7e26cd57975a62c759d2bdb39f1b64d98acdde80950a0ca2026f408655";
// const URI2 = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9582294";

var content = document.getElementById('contenido');

async function init() {
   setInterval(() => {
    getUser();
  }, 2000);
  content.style.display = "block";
}

init();
async function getUser(){

  const resp = await axios.get(URI);
  // const resp2 = await axios.get(URI2);
  const xmlData = resp.data.doc[0].data.match.result;
  // const xmlData2 = resp2.data;


  if (xmlData) {
    
    document.getElementById('title1').innerHTML = xmlData.away;
    document.getElementById('title2').innerHTML = xmlData.home;
    // document.getElementById('title3').innerHTML = xmlData2.liveTime;
  }
}