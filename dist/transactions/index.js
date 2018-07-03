"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transactions = (function () {
    function Transactions(context) {
        this.context = context;
    }
    Transactions.prototype.getAll = function (query, userId, callback) {
        var _this = this;
        var page = 1;
        query.page = page;
        var url = "users/" + (userId ||
            this.context.Me.data.id) + "/transactions";
        var req = this.context.Client.get(url, void 0, query);
        var nextCb = function (cb) {
            page += 1;
            query.page = page;
            var resp = _this.context.Client.get(url, void 0, query);
            resp.then(function (r) {
                cb({ data: r, next: nextCb });
            });
            return resp;
        };
        return new Promise(function (resolve, reject) {
            req.then(function (data) {
                resolve({ data: data, next: nextCb });
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    return Transactions;
}());
exports.default = Transactions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDQyxzQkFBb0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRXJELDZCQUFNLEdBQU4sVUFDQyxLQUEwQixFQUMxQixNQUFlLEVBQ2YsUUFBbUI7UUFIcEIsaUJBaUNDO1FBNUJBLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLEdBQUcsR0FBVyxZQUFTLE1BQU07WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQWUsQ0FBQztRQUV4QyxJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRSxJQUFJLE1BQU0sR0FBRyxVQUFDLEVBQVk7WUFDekIsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNWLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWxCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1YsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNaLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQztnQkFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQyJ9