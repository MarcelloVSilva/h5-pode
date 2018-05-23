import { NgModule, ModuleWithProviders } from '@angular/core';

import { PodeProvider } from './providers/pode';
import { PodeComponent } from './components/pode';

import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        PodeComponent
    ],
    exports: [
        PodeComponent
    ]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [PodeProvider]
        };
    }
}
