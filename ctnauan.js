"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(titles, servings, ingredients) {
        this.titles = titles;
        this.servings = servings;
        this.ingredients = ingredients;
    }
    Recipe.prototype.getTitle = function () {
        return this.titles;
    };
    Recipe.prototype.setTitle = function (title) {
        this.titles = title;
    };
    Recipe.prototype.setServings = function (servings) {
        this.servings = servings;
    };
    Recipe.prototype.getServings = function () {
        return this.servings;
    };
    Recipe.prototype.getIngredient = function () {
        return this.ingredients;
    };
    return Recipe;
}());
exports.Recipe = Recipe;
