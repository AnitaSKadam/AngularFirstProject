import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Management';
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'pm-root',
            templateUrl: "\n    <div>{{pageTitle}}</div>\n    <ul>\n      <li>Home</li>\n      <li>Product List</li>\n    </ul>\n  ",
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map