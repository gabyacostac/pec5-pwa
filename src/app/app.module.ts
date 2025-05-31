import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworkDetailComponent } from './components/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';

@NgModule({
  declarations: [AppComponent, ArtworkListComponent, ArtworkDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [[provideHttpClient(withFetch())]],
  bootstrap: [AppComponent],
})
export class AppModule {}
