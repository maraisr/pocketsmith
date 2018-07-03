"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = (function () {
    function Users(context) {
        this.context = context;
    }
    Users.prototype.get = function (id, callback) {
        return this.context.Client.get("users/" + id, callback);
    };
    return Users;
}());
exports.default = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNDLGVBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBQUcsQ0FBQztJQUVyRCxtQkFBRyxHQUFILFVBQUksRUFBVSxFQUFFLFFBQW1CO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUMifQ==