import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
    declarations: [AppComponent, AddUserComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
