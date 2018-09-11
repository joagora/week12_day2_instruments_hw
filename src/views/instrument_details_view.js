const PubSub = require('../helpers/pub_sub.js');
const InstrumentDetails = function() {

}

InstrumentDetails.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
    this.displayDetails(event.detail);
    console.log(event.detail);
  })
}

InstrumentDetails.prototype.displayDetails = function(instrument) {
  const instrumentDetails = document.querySelector('#instrument-details');
  instrumentDetails.textContent = "";
  const instrumentParagraph = document.createElement('p');
  instrumentDetails.appendChild(instrumentParagraph);
  instrumentParagraph.textContent = instrument.description;
  console.log("trying to display details");
}

module.exports = InstrumentDetails;
