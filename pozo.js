const URI = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetTopEvents?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventCount=0&sportId=0&timePeriod=1";
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