import { Component, Input } from '@angular/core';
import { Pode } from './pode.function';
var HTML_TEMPLATE = "\n<div *ngIf=\"pode\">\n  <ng-content></ng-content>\n</div>\n";
var PodeComponent = (function () {
    function PodeComponent() {
    }
    Object.defineProperty(PodeComponent.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (val) {
            this._usuario = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PodeComponent.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (val) {
            this._role = val;
            this.checkRole();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PodeComponent.prototype, "pode", {
        set: function (val) {
            this._pode = val;
        },
        enumerable: true,
        configurable: true
    });
    PodeComponent.prototype.checkRole = function () {
        this.pode = Pode(this._usuario, [this._role]);
    };
    PodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pode',
                    template: HTML_TEMPLATE
                },] },
    ];
    /** @nocollapse */
    PodeComponent.ctorParameters = function () { return []; };
    PodeComponent.propDecorators = {
        "usuario": [{ type: Input },],
        "role": [{ type: Input },],
    };
    return PodeComponent;
}());
export { PodeComponent };
//# sourceMappingURL=pode.js.map