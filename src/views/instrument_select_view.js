const PubSub = require('../helpers/pub_sub.js')
const InstrumentSelect = function() {

}

InstrumentSelect.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    console.log(allInstruments);
    this.populateSelect(allInstruments);
  })
}

InstrumentSelect.prototype.populateSelect = function(instruments) {
  for(instrument of instruments) {

    const instrumentName = instrument.name;
    const instrumentIndex = instruments.indexOf(instrument);

    const instrumentSelect = document.querySelector('#instrument-families');
    const instrumentOption = document.createElement('option');
    instrumentSelect.appendChild(instrumentOption);

    instrumentOption.setAttribute('value', `${instrumentIndex}`);
    instrumentOption.textContent = instrumentName;
  }
  console.log("data pop");
}

module.exports = InstrumentSelect;
