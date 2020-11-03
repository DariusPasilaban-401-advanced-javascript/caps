'use strict';

const EE = require('events');

const eventMgr = new EE();

//Driver would listern
eventMgr.on('pickup', driverPickupHandler);

//As a vendor, I want to alert the system when I have a package to be picked up
eventMgr.emit('pickup', {info:'about the item to pick up'});

//driver emits
eventMgr.emit('in-transit', driverInTransit);

//driver emits
eventMgr.emit('delivered', driverDeliveredPackage);


// ========= functions

function driverPickupHandler(){

}

function driverInTransit(){

}

function driverDeliveredPackage(){
  
}