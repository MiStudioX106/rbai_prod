import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';

//other Library
import { CKEditorModule } from 'ng2-ckeditor';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

//Pipe
import { SafePipe } from './safe.pipe';

//Client Service
import { ApiService } from '../../../client/src/app/api.service';

//Client Component
import { DocumentListComponent } from '../../../client/src/app/document-list/document-list.component';
import { CardComponent } from '../../../client/src/app/card/card.component';
import { RecruitContentComponent } from '../../../client/src/app/recruit-content/recruit-content.component';
import { NewsContentComponent } from '../../../client/src/app/news-content/news-content.component';


//Service
import { AdminApiService } from './admin-api.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

//Component
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MembersComponent } from './members/members.component';
import { RecruitEditComponent } from './recruit-edit/recruit-edit.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsTypePipe } from './news-type.pipe';
import { ExamTypePipe } from './exam-type.pipe';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { MaillistComponent } from './maillist/maillist.component';
import { DocumentsComponent } from './documents/documents.component';
import { CallbackComponent } from './callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SafePipe,
    RecruitmentsComponent,
    CardComponent,
    MemberEditComponent,
    MembersComponent,
    RecruitEditComponent,
    FileSelectDirective,
    DocumentListComponent,
    RecruitmentsComponent,
    RecruitContentComponent,
    ButtonAddComponent,
    ButtonEditComponent,
    DocumentEditComponent,
    NewsEditComponent,
    NewsContentComponent,
    NewsListComponent,
    NewsTypePipe,
    ExamTypePipe,
    AdminMenuComponent,
    MaillistComponent,
    DocumentsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [ApiService, AdminApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
