const URI = "https://widgets.fn.sportradar.com/betinaction2/es/Etc:UTC/gismo/match_timelinedelta/48613125?T=exp=1717354229~acl=/*~data=eyJvIjoiaHR0cHM6Ly9lY3VhYmV0LmNvbSIsImEiOiJlZTExYzI1NmQxYTliYmM1MzBiNGEzMzgwZGFlODY5OCIsImFjdCI6Im9yaWdpbmNoZWNrIiwib3NyYyI6Im9yaWdpbiJ9~hmac=facd385a8161f03b446a6012f7881c0bb807e5a50a7ef8cad95b06e770fc7912";
// const URI2 = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9582294";

var content = document.getElementById('contenido');

async function init() {
  getUser();
  content.style.display = "block";
}

init();
async function getUser(){

  // const resp = await axios.get(URI);
  // // const resp2 = await axios.get(URI2);
  // console.log(resp.data.doc[0])
  // const xmlData = resp.data.doc[0].data.match.result;
  // const xmlData2 = resp2.data;

  document.getElementById('title1').innerHTML = 0;
  document.getElementById('title2').innerHTML = 2;
  // if (xmlData) {
    
  //   document.getElementById('title1').innerHTML = 0;
  //   document.getElementById('title2').innerHTML = 0;
  //   // document.getElementById('title3').innerHTML = xmlData2.liveTime;
  // }
}