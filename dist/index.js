"use strict";
var accounts_1 = require("./accounts");
var categories_1 = require("./categories");
var users_1 = require("./users");
var transactions_1 = require("./transactions");
var me_1 = require("./me");
var Promise = require("bluebird");
var client_1 = require("./client");
var PocketSmith = (function () {
    function PocketSmith(token) {
        this.token = token;
        this.Me = void 0;
        this.token = (function (t) {
            return (/^Key|Bearer/i.test(t)) ? t : "Key " + t;
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
                ((new me_1.default(self)).init()).then(function (Me) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHVDQUFrQztBQUNsQywyQ0FBc0M7QUFDdEMsaUNBQTRCO0FBQzVCLCtDQUEwQztBQUMxQywyQkFBc0I7QUFFdEIsa0NBQW9DO0FBQ3BDLG1DQUE4QjtBQUU5QjtJQVVDLHFCQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUZ6QixPQUFFLEdBQU8sS0FBSyxDQUFDLENBQUM7UUFHdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQUMsQ0FBUztZQUN2QixNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFHLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFBQSxpQkFjQztRQWJBLElBQUksSUFBSSxHQUFnQixJQUFJLENBQUM7UUFFN0IsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLElBQUksWUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFNO29CQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsQ0FBQztRQUVGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQUVELGlCQUFTLFdBQVcsQ0FBQyJ9