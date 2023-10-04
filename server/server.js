const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/status', (request, response) => response.json({clients: clients.length}));

const PORT = 3000;

let clients = [];
let traces = [];

app.listen(PORT, () => {
  console.log(`traces Events service listening at http://localhost:${PORT}`)
})

// ...
function roundN(num, n){
  return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
}

function getAvgCpuUsagePerTime(request, response, next) {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  response.writeHead(200, headers);

  const data = `data: ${JSON.stringify(traces)}\n\n`;

  response.write(data);

  const clientId = Date.now();

  let newClient = {
    id: clientId,
    response,
    handleOnClose: () => {}
  };

  clients.push(newClient);

  startTracingCpu(request, newClient);

  request.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
    newClient.handleOnClose();
  });
}

app.get('/getAvgCPULoadPerTime', getAvgCpuUsagePerTime);

// ...

function sendEventsToAll(data) {
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(data)}\n\n`))
}
// ... send event to a specific client
// @param client
function sendEventsToClient(data, client) {
  client.response.write(`data: ${JSON.stringify(data)}\n\n`);
}

var os = require('os');
const cpus = os.cpus().length;

async function startTracingCpu(request, newClient, next) {
  let timeFrame = 10000;
  if (request.query.interval && !isNaN(Number(request.query.interval))) {
    // if interval is sent through request
    timeFrame = Number(request.query.interval);
  }
  const intervalRef = setInterval(() => {
    const loadAverage = roundN(os.loadavg()[0] / cpus, 2);
    console.log(loadAverage);
    sendEventsToClient({
      loadAverage: loadAverage,
      timeStamp: new Date().toISOString()
    }, newClient);
  }, timeFrame);
  const loadAverage = os.loadavg()[0] / cpus;
  newClient.handleOnClose = () => clearInterval(intervalRef);
  sendEventsToClient({
    loadAverage: loadAverage,
    timeStamp: new Date().toISOString()
  }, newClient);

}

