"use strict";
var accounts_1 = require("./accounts");
var categories_1 = require("./categories");
var users_1 = require("./users");
var transactions_1 = require("./transactions");
var me_1 = require("./me");
var client_1 = require("./client");
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.Me = void 0;
        this.token = (function (t) {
            return /^Key|Bearer/i.test(t) ? t : "Key " + t;
        })(this.token);
        this.Client = new client_1.default(this.token);
        this.Accounts = new accounts_1.default(this);
        this.Categories = new categories_1.default(this);
        this.Users = new users_1.default(this);
        this.Transactions = new transactions_1.default(this);
    }
    PocketSmith.prototype.init = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) {
            if (_this.Me === void 0) {
                new me_1.default(self).init().then(function (Me) {
                    self.Me = Me;
                    resolve(self);
                });
            }
            else {
                resolve(self);
            }
        });
    };
    return PocketSmith;
}());
module.exports = PocketSmith;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHVDQUFrQztBQUNsQywyQ0FBc0M7QUFDdEMsaUNBQTRCO0FBQzVCLCtDQUEwQztBQUMxQywyQkFBc0I7QUFFdEIsbUNBQThCO0FBRTlCO0lBU0MscUJBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRnpCLE9BQUUsR0FBTyxLQUFLLENBQUMsQ0FBQztRQUd0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBQyxDQUFTO1lBQ3ZCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFPLENBQUcsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUFBLGlCQWFDO1FBWkEsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQztRQUU3QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN6QixJQUFJLEtBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksWUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBRUQsaUJBQVMsV0FBVyxDQUFDIn0=