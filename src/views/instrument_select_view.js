const PubSub = require('../helpers/pub_sub.js')
const InstrumentSelect = function(element) {
  this.element = element
}

InstrumentSelect.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populateSelect(allInstruments);
  })

  this.element.addEventListener('change', (event) => {
    const selectedInstrumentIndex = event.target.value;
    PubSub.publish('InstrumentSelect:selected-instrument-id-ready', selectedInstrumentIndex);

  })
}

InstrumentSelect.prototype.populateSelect = function(instruments) {
  for(instrument of instruments) {

    const instrumentName = instrument.name;
    const instrumentIndex = instruments.indexOf(instrument);


    const instrumentOption = document.createElement('option');
    this.element.appendChild(instrumentOption);

    instrumentOption.setAttribute('value', `${instrumentIndex}`);
    instrumentOption.textContent = instrumentName;
  }
}



module.exports = InstrumentSelect;
