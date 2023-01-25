require('dotenv').config()
const { Gumband, Sockets } = require('@deeplocal/gumband-node-sdk');

const logger = require('node-color-log')
logger.info("starting exhibit ", process.env.GUMBAND_EXHIBIT_ID)

const gb = new Gumband(
  process.env.GUMBAND_EXHIBIT_TOKEN, // exhibit token
  process.env.GUMBAND_EXHIBIT_ID, // exhibit ID
  './manifest.json', // manifest path
  options = {
    endpoint: 'local',
    version: 'v1',
    gbttEnabled: false,
    contentLocation: './content',
  });

  gb.on(Sockets.READY, async () => {
  
  })