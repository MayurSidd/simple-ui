import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { TopHighlightsComponent } from './components/top-highlights/top-highlights.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ToDoListComponent,
    WeatherForecastComponent,
    TopHighlightsComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
