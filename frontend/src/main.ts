import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule.forRoot([])
    )
  ]
})