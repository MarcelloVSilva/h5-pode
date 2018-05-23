import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pode} from './pode.function' 

const HTML_TEMPLATE = `
<div *ngIf="pode">
  <ng-content></ng-content>
</div>
`;

 
@Component({
  selector: 'pode',
  template: HTML_TEMPLATE
})
export class PodeComponent {
    _pode: boolean;
    _role: string;
    _usuario: string;
    constructor() {}
    
    @Input()
    get usuario(): string {
      return this._usuario;
    }
  
    set usuario(val: string) {
      this._usuario = val;
    }
  
    @Input()
    get role(): string {
      return this._role;
    }
  
    set role(val: string) {
      this._role = val;
      this.checkRole();
    }
  
    public set pode(val: boolean){
      this._pode = val
    }
    checkRole() {
      this.pode = Pode(this._usuario, [this._role]);
    }
  
  }