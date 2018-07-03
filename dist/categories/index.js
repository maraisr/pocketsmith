"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var Categories = (function () {
    function Categories(context) {
        this.context = context;
    }
    Categories.prototype.get = function (id, callback) {
        return this.context.Client.get("categories/" + id, callback);
    };
    Categories.prototype.getAllByUser = function (userId, callback) {
        return this.context.Client.get("users/" + userId + "/categories", callback);
    };
    Categories.prototype.getAll = function (callback) {
        if (this.context.Me) {
            return this.getAllByUser(this.context.Me.data.id, callback);
        }
        else {
            throw exceptions_1.NotInMeContext();
        }
    };
    return Categories;
}());
exports.default = Categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2F0ZWdvcmllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDRDQUErQztBQUUvQztJQUNDLG9CQUFvQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUFHLENBQUM7SUFFckQsd0JBQUcsR0FBSCxVQUFJLEVBQVUsRUFBRSxRQUFtQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxFQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFDQyxNQUFjLEVBQ2QsUUFBbUI7UUFFbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLGdCQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUdELDJCQUFNLEdBQU4sVUFBTyxRQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTixNQUFNLDJCQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNGLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkMifQ==