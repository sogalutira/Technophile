var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');


module.exports = NintendoDS;
function NintendoDS(){
  GameConsole.call(this, 'Nintendo DS');
}
extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

