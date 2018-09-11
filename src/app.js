const InstrumentSelect = require('./views/instrument_select_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentDetails = require('./views/instrument_details_view.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const instrumentDropdown = document.querySelector('#instrument-families');
  const instrumentSelect = new InstrumentSelect(instrumentDropdown);
  instrumentSelect.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const instrumentDetails = new InstrumentDetails();
  instrumentDetails.bindEvents();
});
