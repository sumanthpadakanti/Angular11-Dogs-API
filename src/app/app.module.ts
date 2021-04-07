import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { DogsService } from "./my-dashboard/dogs.service";
import { FormsModule } from "@angular/forms";
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

const appRoutes: Routes = [
  { path: "first-page", component: MyDashboardComponent }
];

@NgModule({
  declarations: [AppComponent, MyNavComponent, MyDashboardComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    DogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
