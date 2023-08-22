import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from './services/enroll.service';

@NgModule({
    declarations: [AppComponent, AngularComponent, JavascriptComponent],
    imports: [BrowserModule, FormsModule],
    providers: [EnrollService],
    bootstrap: [AppComponent],
})
export class AppModule {}
