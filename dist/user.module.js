import { NgModule } from '@angular/core';
import { PodeProvider } from './providers/pode';
import { PodeComponent } from './components/pode';
import { IonicModule } from 'ionic-angular';
var UserModule = (function () {
    function UserModule() {
    }
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule,
            providers: [PodeProvider]
        };
    };
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        PodeComponent
                    ],
                    exports: [
                        PodeComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    UserModule.ctorParameters = function () { return []; };
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=user.module.js.map