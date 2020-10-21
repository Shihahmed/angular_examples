import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DatabaseService } from './Services/database.service';
import { NavigationTreeComponent } from './navigation-tree/navigation-tree.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavigationTreeComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, pathMatch: 'full',
        children: [
          { path: 'report/:groupid/:reportid', component: ReportComponent }
        ]
      },

      {
        path: 'home', component: HomeComponent,
        children: [
          { path: 'report/:groupid/:reportid', component: ReportComponent }
        ]
      },


      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

    ])
  ],
  providers: [DatabaseService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
