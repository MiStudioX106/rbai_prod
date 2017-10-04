import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
//
import { environment } from '../../environments/environment';
//
import { AdminApiService } from '../admin-api.service';
//
import { CardComponent } from '../../../../client/src/app/card/card.component';
import { ApiService } from '../../../../client/src/app/api.service';
import { Member } from '../../../../client/src/app/member';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  editMode: boolean;
  id: any;
  type: string;
  member: Member;
  uploaderError: string;

  private sub: any;
  public uploader: FileUploader = new FileUploader({ url: environment.adminUrl + '/upload/img/member' });

  constructor(
    private apiService: ApiService,
    private adminApiService: AdminApiService,
    private route: ActivatedRoute
  ) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      response = JSON.parse(response);
      if (response.error_code != '0') {
        return this.uploaderError = response.err_desc;
      }
      this.member.imgUrl = response.filename;
    };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.getMember(this.id);
      } else if (params['type']) {
        this.member = { type: params['type'], name: '', title: '', experts: '', education: '', office: '', exts: '', email: '', imgUrl: '' }
      } else {
        console.log('error');
      }
    });
  }

  getMember(id): void {
    this.apiService
      .getMember(id)
      .subscribe(data => {
        this.member = data;
      });
  }

  createMember(): void {
    this.adminApiService
      .createMember(this.member)
      .subscribe(data => {
        this.member = data;
      });
  }

  updateMember(): void {
    this.adminApiService
      .updateMember(this.id, this.member)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
      });
  }

  deleteMember(): void {
    this.adminApiService
      .deleteMember(this.id)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
      });
  }

}
