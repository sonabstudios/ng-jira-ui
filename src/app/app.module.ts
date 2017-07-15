import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issues/issue-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
         MdCardModule, 
         MdMenuModule, 
         MdToolbarModule, 
         MdIconModule,
         MdInputModule, 
         MdGridListModule, 
         MdTooltipModule, 
         MdSnackBarModule, 
         MdSlideToggleModule } from '@angular/material';

import { JiraService } from './services/jira.service';
import { IssueComponent } from './issue/issue.component'

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdSlideToggleModule
  ],
  providers: [JiraService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
