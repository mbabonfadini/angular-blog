import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { IconsComponent } from './components/shared/icons/icons.component';
import { CardComponent } from './components/unics/card/card.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TitleComponent } from './components/shared/title/title.component';
import { InfocardComponent } from './components/unics/infocard/infocard.component';
import { AdvComponent } from './components/unics/adv/adv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    IconsComponent,
    CardComponent,
    ProjectComponent,
    ContactComponent,
    ChartsComponent,
    CalendarComponent,
    TitleComponent,
    InfocardComponent,
    AdvComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
