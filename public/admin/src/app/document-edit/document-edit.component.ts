import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
//
import { environment } from '../../environments/environment';
//
import { AdminApiService } from '../admin-api.service';
import { ApiService } from '../../../../client/src/app/api.service';
import { Document } from '../../../../client/src/app/document';
import { DocumentListComponent } from '../../../../client/src/app/document-list/document-list.component';


@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  editMode: boolean;
  id: any;
  type: string;
  document: Document;
  uploaderError: string;
  doctype: String;

  private sub: any;

  public documentuploader: FileUploader = new FileUploader({ url: environment.adminUrl + '/upload/doc/doc' });
  public examuploader: FileUploader = new FileUploader({ url: environment.adminUrl + '/upload/doc/exam' });
  public courseuploader: FileUploader = new FileUploader({ url: environment.adminUrl + '/upload/doc/course' });

  constructor(
    private router: Router,
    private apiService: ApiService,
    private adminApiService: AdminApiService,
    private route: ActivatedRoute
  ) {
    this.documentuploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      response = JSON.parse(response);
      if (response.error_code != '0') {
        return this.uploaderError = response.err_desc;
      }

      var dateFormat = require('dateformat');
      var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd");
      this.document.link = response.filelink;
      this.document.time = datetimestamp;

    };

    this.examuploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      response = JSON.parse(response);
      if (response.error_code != '0') {
        return this.uploaderError = response.err_desc;
      }

      var dateFormat = require('dateformat');
      var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd");
      this.document.link = response.filelink;
      this.document.time = datetimestamp;
    };

    this.courseuploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      response = JSON.parse(response);
      if (response.error_code != '0') {
        return this.uploaderError = response.err_desc;
      }

      var dateFormat = require('dateformat');
      var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd");
      this.document.link = response.filelink;
      this.document.time = datetimestamp;
    };
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.doctype = params['doctype'];
        this.getDocument(this.id, params['doctype']);
      } else if (params['type']) {
        this.document = { type: params['type'], title: '', time: null, link: '' }
        this.doctype = params['doctype'];
      } else {
        console.log('error');
      }
    });

  }
  //document
  getDocument(id, path): void {
    this.apiService
      .getDocument(id, path)
      .subscribe(data => {
        this.document = data;
        //console.log(this.document);
      });
  }
  createDocument(doctype): void {
    console.log(this.document);
    this.adminApiService
      .createDocument(this.document, doctype)
      .subscribe(data => {

        if (data.error_code == 0) {
          alert('新增成功');
          this.router.navigate(['/documents']);
        }
      });
  }

  updateDocument(doctype): void {
    this.adminApiService
      .updateDocument(this.id, this.document, doctype)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('編輯成功');
          this.router.navigate(['/documents']);
        }
      });
  }

  deleteDocument(doctype): void {
    this.adminApiService
      .deleteDocument(this.id, doctype)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('刪除成功');
          this.router.navigate(['/documents']);
        }
      });
  }

}
