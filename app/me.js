
function me(){
var mqtt    = require('mqtt');
var mqtthost = '193.108.128.254';
var options = {
    host: mqtthost,
    port: 1883,
    protocolId: 'MQIsdp',
    protocolVersion: 3
};
var x;





var client  = mqtt.connect(options);

client.on('connect', function () {
  client.subscribe('outTopic');
  client.publish('outTopic', 'Hello mqtt2');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
 x = message.toString();
  console.log(x);
client.end();
return x;

});
}

exports.me = me;

