import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// @Component({
//     selector: 'my-app',
//     template: `
            
//     `
// })


@NgModule({
    declarations: [
      AppComponent     
    ],
    imports: [
      BrowserModule,
      HttpClientModule
    
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}