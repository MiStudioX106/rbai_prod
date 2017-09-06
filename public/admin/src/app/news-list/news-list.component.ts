import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//
import { ApiService } from '../../../../client/src/app/api.service';
import { News } from '../../../../client/src/app/news';


import './news-list.js'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() type: string;

  fullMode: boolean;
  private sub: any;

  newsList: News[];


  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.type == null) {
      this.sub = this.route.params.subscribe(params => {
        if (params['type'])
          this.type = params['type'];
        this.fullMode = true;

      });
    }
    this.getNewsList(this.type);
  }

  getNewsList(type): void {
    this.apiService
      .getNewsList(type)
      .subscribe(data => {
        this.newsList = data;
      });
  }

  goAddPage() {
    this.router.navigate(['/news-add', this.type]);
  }


}
