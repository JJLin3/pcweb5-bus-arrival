const { default: axios } = require("axios")

const busStop = '18141'
const api = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`
const config = {
  headers: {
    'AccountKey': 'xHrBZD3HTbqeGcgRVnd/1A=='
  }
}

async function loadBusData() {

  console.log('start')

  const res = await axios.get(api, config)
  //.then(response => console.log(response.data))
  console.log(res.data)
  console.log('end')

}

loadBusData()
  .catch((error) => console.log('error message: ' + error))