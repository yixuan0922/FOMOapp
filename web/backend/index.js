// require('@mapbox/mapbox-sdk')

// const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
// const stylesService = mbxStyles({ accessToken: pk.eyJ1IjoicmVmbGVjdDIxIiwiYSI6ImNsaWg2cmcwOTB3b2gzZW1ydjhiNzFmNDUifQ.vNAfTCa1nfLngMOquM96Qg });

const mbxClient = require('@mapbox/mapbox-sdk');
const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
const mbxTilesets = require('@mapbox/mapbox-sdk/services/tilesets');

const baseClient = mbxClient({ accessToken: pk.eyJ1IjoicmVmbGVjdDIxIiwiYSI6ImNsaWg2cmcwOTB3b2gzZW1ydjhiNzFmNDUifQ.vNAfTCa1nfLngMOquM96Qg });
