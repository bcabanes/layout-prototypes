import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// app
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations   : [
    AppComponent,
    DialogComponent
  ],
  entryComponents: [ DialogComponent ],
  imports        : [
    BrowserModule,
    BrowserAnimationsModule, // For Material animations.

    SharedModule
  ],
  providers      : [],
  bootstrap      : [ AppComponent ]
})
export class AppModule {
}
