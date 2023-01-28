import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './static-pages/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './auth/auth.module';
import { TechniquesModule } from './techniques/techniques.module';
import { ProfileComponent } from './profile/profile.component';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { PipeModule } from './app-pipe.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './static-pages/footer/footer.component';
import { CtaRowComponent } from './static-pages/cta-row/cta-row.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    TechniquesModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    PipeModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    ProfileComponent,
    HomeComponent,
    SideNavComponent,
    MenuComponent,
    FooterComponent,
    CtaRowComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
