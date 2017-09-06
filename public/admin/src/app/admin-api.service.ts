import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
//
import { environment } from 'environments/environment';
import { News } from '../../../client/src/app/news';
import { Member } from '../../../client/src/app/member';
import { Recruit } from '../../../client/src/app/recruit';
import { Mail } from '../../../admin/src/app/mail';
import { Document } from '../../../client/src/app/document';

@Injectable()
export class AdminApiService {

  private newsUrl = environment.adminUrl + '/news';
  private memberUrl = environment.adminUrl + '/member';
  private recruitUrl = environment.adminUrl + '/recruit';
  private maillistUrl = environment.adminUrl + '/maillist';

  //20170329
  private mailUrl = environment.adminUrl + '/mail';

  private documentUrl = environment.adminUrl ;

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  createNews(news: News) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.newsUrl, JSON.stringify(news), { headers: headers })
      .map(response => response.json())
  }

  updateNews(id: string, news: News) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.newsUrl + '/' + id, JSON.stringify(news), { headers: headers })
      .map(response => response.json())
  }

  deleteNews(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(this.newsUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  createMember(member: Member) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.memberUrl, JSON.stringify(member), { headers: headers })
      .map(response => response.json())
  }

  updateMember(id: string, member: Member) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.memberUrl + '/' + id, JSON.stringify(member), { headers: headers })
      .map(response => response.json())
  }

  deleteMember(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(this.memberUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  createRecruit(recruit: Recruit) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.recruitUrl, JSON.stringify(recruit), { headers: headers })
      .map(response => response.json())
  }

  updateRecruit(id: string, recruit: Recruit) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.recruitUrl + '/' + id, JSON.stringify(recruit), { headers: headers })
      .map(response => response.json())
  }

  deleteRecruit(id: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(this.recruitUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

  getMaillist() {
    return this.http.get(this.maillistUrl)
      .map(response => response.json());
  }

  //20170329
  sendMail(mail: Mail) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.mailUrl, JSON.stringify(mail), { headers: headers })
      .map(response => response.json())

  }
  //2017/05/25
  createDocument(document: Document,doctype) {
    var headers = new Headers();
    this.documentUrl=environment.adminUrl+'/'+doctype;
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.documentUrl, JSON.stringify(document), { headers: headers })
      .map(response => response.json())
  }

  updateDocument(id: string, document: Document,doctype) {
    var headers = new Headers();
    this.documentUrl=environment.adminUrl+'/'+doctype;
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.documentUrl + '/' + id, JSON.stringify(document), { headers: headers })
      .map(response => response.json())
  }

  deleteDocument(id: string,doctype) {
    var headers = new Headers();
    this.documentUrl=environment.adminUrl+'/'+doctype;
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(this.documentUrl + '/' + id, { headers: headers })
      .map(response => response.json())
  }

}
