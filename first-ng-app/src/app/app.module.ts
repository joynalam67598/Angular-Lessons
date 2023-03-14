import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SetBackgroundDirective } from './CustomsDirectives/set-background.directive';

@NgModule({
    declarations: [AppComponent, SetBackgroundDirective],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
