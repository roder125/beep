import { NgModule } from "@angular/core/src/metadata/ng_module";
import { IonicModule } from "ionic-angular/module";
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
    declarations: [LoginFormComponent],
    imports: [IonicModule],
    exports: [LoginFormComponent]
})
export class ComponentsModule{
    
}