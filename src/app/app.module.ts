import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './post.service';




@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PostService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
