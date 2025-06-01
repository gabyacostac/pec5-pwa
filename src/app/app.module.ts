import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworkDetailComponent } from './components/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './shared/components/card/card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GridComponent } from './shared/components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkListComponent,
    ArtworkDetailComponent,
    SpinnerComponent,
    FooterComponent,
    CardComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
  ],
  providers: [[provideHttpClient(withFetch())]],
  bootstrap: [AppComponent],
})
export class AppModule {}
