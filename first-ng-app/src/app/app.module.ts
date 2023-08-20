import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SetBackgroundDirective } from './CustomsDirectives/set-background.directive';
import { HighlightDirective } from './CustomsDirectives/highlight.directive';
import { HoverDirective } from './CustomsDirectives/hover.directive';
import { BetterhighlightDirective } from './CustomsDirectives/betterhighlight.directive';
import { ClassDirective } from './CustomsDirectives/class.directive';

@NgModule({
    declarations: [AppComponent, SetBackgroundDirective, HighlightDirective, HoverDirective, BetterhighlightDirective, ClassDirective],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
