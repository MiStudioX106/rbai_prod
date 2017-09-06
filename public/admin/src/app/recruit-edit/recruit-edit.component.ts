import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { environment } from '../../environments/environment';
//
import { AdminApiService } from '../admin-api.service';
//
import { RecruitContentComponent } from '../../../../client/src/app/recruit-content/recruit-content.component';
import { ApiService } from '../../../../client/src/app/api.service';
import { Recruit } from '../../../../client/src/app/recruit';
import './recruit-edit.js';
//

@Component({
  selector: 'app-recruit-edit',
  templateUrl: './recruit-edit.component.html',
  styleUrls: ['./recruit-edit.component.css']
})
export class RecruitEditComponent implements OnInit {

  editMode: boolean;
  id: any;
  type: string;
  recruit: Recruit;
  private sub: any;

  constructor(
    private apiService: ApiService,
    private adminApiService: AdminApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.getRecruit(this.id);
      } else if (params['type']) {
        this.recruit = { type: params['type'], title: '', content: '' }
      } else {
        console.log('error');
      }
    });
  }

  getRecruit(id): void {
    this.apiService
      .getRecruit(id)
      .subscribe(data => {
        this.recruit = data;
      });
  }

  createRecruit(): void {
    this.adminApiService
      .createRecruit(this.recruit)
      .subscribe(data => {
        this.recruit = data;
      });
  }

  updateRecruit(): void {
    this.adminApiService
      .updateRecruit(this.id, this.recruit)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
      });
  }

  deleteRecruit(): void {
    this.adminApiService
      .deleteRecruit(this.id)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
      });
  }


}
