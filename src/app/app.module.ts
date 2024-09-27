import { NgModule } from '@angular/core';
import {
  JsonPipe,
  AsyncPipe,
  DecimalPipe,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconSetService } from '@coreui/icons-angular';