"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppList = (function () {
    function AppList() {
        this.title = 'Angular 2Do55';
    }
    AppList.prototype.changer = function (nasos_state) {
        console.log(nasos_state);
        if (nasos_state === "true") {
            nasos_state = "checked";
        }
        else {
            nasos_state = "unchecked";
        }
        ;
        console.log(nasos_state);
    };
    AppList = __decorate([
        core_1.Component({
            selector: 'list-app',
            templateUrl: './app/app.list.html',
            styleUrls: ['./css/slider.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppList);
    return AppList;
}());
exports.AppList = AppList;
//# sourceMappingURL=app.list.js.map