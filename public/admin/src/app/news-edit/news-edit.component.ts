import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { AdminApiService } from '../admin-api.service';
//
import { ApiService } from '../../../../client/src/app/api.service';
import { News } from '../../../../client/src/app/news';
import './news-edit.js';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  news: News;
  type: string;
  editMode: boolean;
  id: any;
  private sub: any;

  constructor(
    private apiService: ApiService,
    private adminApiService: AdminApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //edit or create
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        console.log(params['id'])
        //edit news
        this.id = params['id'];
        this.editMode = true;
        this.getNews(this.id);
      } else if (params['type']) {
        //create news
        this.news = {
          type: params['type'], subType: '', publisher: '', title: '', content: ''
        }
        console.log(params['type'])
      } else {
        console.log('error');
      }
    });
  }


  getNews(id): void {
    this.apiService
      .getNews(id)
      .subscribe(data => {
        this.news = data;
      });
  }


  updateNews(): void {
    this.adminApiService
      .updateNews(this.id, this.news)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('編輯成功');
        }
      });
  }

  deleteNews(): void {
    this.adminApiService
      .deleteNews(this.id)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('刪除成功');
        }
      });
  }

  createNews(): void {
    this.adminApiService
      .createNews(this.news)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        } else {
          alert('新增成功');
        }
      })
  }
}