"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var Accounts = (function () {
    function Accounts(context) {
        this.context = context;
    }
    Accounts.prototype.get = function (id, callback) {
        return this.context.Client.get("accounts/" + id, callback);
    };
    Accounts.prototype.getAllByUser = function (userId, callback) {
        return this.context.Client.get("users/" + userId + "/accounts", callback);
    };
    Accounts.prototype.getAllByInstitution = function (institutionId, callback) {
        return this.context.Client.get("institutions/" + institutionId + "/accounts", callback);
    };
    Accounts.prototype.getAll = function (callback) {
        if (this.context.Me) {
            return this.getAllByUser(this.context.Me.data.id, callback);
        }
        else {
            throw exceptions_1.NotInMeContext();
        }
    };
    return Accounts;
}());
exports.default = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw0Q0FBK0M7QUFFL0M7SUFDQyxrQkFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRXJELHNCQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBbUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBWSxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFDQyxNQUFjLEVBQ2QsUUFBbUI7UUFFbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGNBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CLFVBQ0MsYUFBcUIsRUFDckIsUUFBbUI7UUFFbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQzdCLGtCQUFnQixhQUFhLGNBQVcsRUFDeEMsUUFBUSxDQUNSLENBQUM7SUFDSCxDQUFDO0lBR0QseUJBQU0sR0FBTixVQUFPLFFBQW1CO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUQ7YUFBTTtZQUNOLE1BQU0sMkJBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDIn0=