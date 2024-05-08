const URI = "https://widgets.fn.sportradar.com/betinaction2/es/Etc:UTC/gismo/match_timelinedelta/48613119?T=exp=1715280629~acl=/*~data=eyJvIjoiaHR0cHM6Ly9lY3VhYmV0LmNvbSIsImEiOiJlZTExYzI1NmQxYTliYmM1MzBiNGEzMzgwZGFlODY5OCIsImFjdCI6Im9yaWdpbmNoZWNrIiwib3NyYyI6Im9yaWdpbiJ9~hmac=d664038ebca8edf3a6bfd1108793e30d4aaf8538628af97c0683f972129d3355";
// const URI2 = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9582294";

var content = document.getElementById('contenido');

async function init() {
  getUser();
  content.style.display = "block";
}

init();
async function getUser(){

  const resp = await axios.get(URI);
  // const resp2 = await axios.get(URI2);
  const xmlData = resp.data.doc[0].data.match.result;
  // const xmlData2 = resp2.data;


  if (xmlData) {
    
    document.getElementById('title1').innerHTML = xmlData.home;
    document.getElementById('title2').innerHTML = xmlData.away;
    // document.getElementById('title3').innerHTML = xmlData2.liveTime;
  }
}