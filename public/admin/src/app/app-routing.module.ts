
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberEditComponent } from './member-edit/member-edit.component';
import { MembersComponent } from './members/members.component';
import { RecruitEditComponent } from './recruit-edit/recruit-edit.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { MaillistComponent } from './maillist/maillist.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';


const routes: Routes = [
  {
    path: 'member-add/:type',
    component: MemberEditComponent
  },
  {
    path: 'member-edit/:id',
    component: MemberEditComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'recruitments',
    component: RecruitmentsComponent
  },
  {
    path: 'recruit-add/:type',
    component: RecruitEditComponent
  },
  {
    path: 'recruit-edit/:id',
    component: RecruitEditComponent
  },
  {
    path: 'news-add/:type',
    component: NewsEditComponent
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent
  },
  {
    path: 'news-list/:type',
    component: NewsListComponent
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent
  },
  {
    path: 'maillist',
    component: MaillistComponent
  },{
    path: 'documents',
    component: DocumentsComponent
  },{
    path: 'document-add/:doctype/:type',
    component: DocumentEditComponent
  },
  {
    path: 'document-edit/:doctype/:id',
    component: DocumentEditComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
