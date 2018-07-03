"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Got = require("got");
var Client = (function () {
    function Client(token) {
        this.token = token;
    }
    Client.prototype.resource = function (method, url, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Got("https://api.pocketsmith.com/v2/" + url, {
                method: method,
                json: true,
                retries: 0,
                query: payload || void 0,
                headers: {
                    Authorization: _this.token,
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                resolve(response.body);
            }, function (err) {
                reject(err);
            });
        });
    };
    Client.prototype.get = function (url, callback, payload) {
        var prom = this.resource('GET', url, payload);
        if (!(callback === void 0)) {
            prom.then(function (resp) {
                callback(resp);
            });
        }
        return prom;
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUEyQjtBQUUzQjtJQUNDLGdCQUFvQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFFN0IseUJBQVEsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLEdBQVcsRUFBRSxPQUFhO1FBQTNELGlCQW9CQztRQW5CQSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsR0FBRyxDQUFDLG9DQUFrQyxHQUFLLEVBQUU7Z0JBQzVDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLEtBQUksQ0FBQyxLQUFLO29CQUN6QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNsQzthQUNELENBQUMsQ0FBQyxJQUFJLENBQ04sVUFBQSxRQUFRO2dCQUNQLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQ0QsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG9CQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsUUFBbUIsRUFBRSxPQUFhO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=