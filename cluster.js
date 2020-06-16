const cluster = require('cluster');
const os = require('os');

const cpus = os.cpus();

console.log('executado therd');

if (cluster.isMaster) {

  console.log('execultando therd master');

  cpus.forEach(function () {
    cluster.fork();
  });

  cluster.on('listening', function (worker) {
    console.log('cluster conectdado ' + worker.process.pid);
  });

  cluster.on('exit', worker => {
    console.log('cluster %d desconectado', worker.process.pid);
    cluster.fork();
  });

}else {
  console.log('execultando therd slave');
  require('./app');
}


