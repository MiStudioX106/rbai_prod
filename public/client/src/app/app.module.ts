import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


//Service
import { ApiService } from './api.service';

//Pipe
import { SafePipe } from './safe.pipe';

//admin Component
import { ButtonEditComponent } from '../../../admin/src/app/button-edit/button-edit.component';

//Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { DepartmentsComponent } from './departments/departments.component';

import { NewsListviewComponent } from './news-listview/news-listview.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DegreeRequirementsComponent } from './degree-requirements/degree-requirements.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { FullMenuComponent } from './full-menu/full-menu.component';
import { DocumentComponent } from './document/document.component';
import { RecruitContentComponent } from './recruit-content/recruit-content.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsTypePipe } from './news-type.pipe';
import { ExamTypePipe } from './exam-type.pipe';

import { OwlModule } from 'ng2-owl-carousel';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    CarouselComponent,
    CardComponent,
    HomeComponent,
    MembersComponent,
    DepartmentsComponent,
    NewsListviewComponent,
    IconMenuComponent,
    RecruitmentsComponent,
    IntroductionComponent,
    DegreeRequirementsComponent,
    DocumentListComponent,
    FullMenuComponent,
    DocumentComponent,
    RecruitContentComponent,
    SafePipe,
    ButtonEditComponent,
    NewsContentComponent,
    NewsTypePipe,
    ExamTypePipe,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OwlModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
