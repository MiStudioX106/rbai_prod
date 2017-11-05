import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


import { Member } from '../member';

declare var $: any;

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {


  section: any;
  members: Member[];
  faculty: Member[] = [];
  staff: Member[] = [];

  private sub: any;
  private init = true;


  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {


    this.sub = this.route.params.subscribe(params => {
      if (params['section']) {
        this.section = params['section'];
        console.log('cons:' + this.section);
        if (document.readyState === 'complete' && this.init == false) {
          this.goSection(this.section);
        }

      }
    });

  }


  ngAfterViewInit() {
    if (this.section) {
      this.goSection(this.section);
      this.init = false;
    }
  }

  ngOnInit() {

    this.getMembers();

    expandTabPanel();
    $(window).resize(function () {
      expandTabPanel()
    });
    $('.owl-carousel').owlCarousel({
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        1337: {
          items: 2
        }
      }
    })
    function expandTabPanel() {
      if ($(window).width() <= 1182) {
        $("#department_introduction ul.nav").hide();
        $(".introduction_content .tab-pane").addClass('in active');
        return;
      }
      $("#department_introduction ul.nav").show();
      $(".introduction_content .tab-pane").removeClass('in active');
      var activeTabPanelId = $(".nav li.active a").attr('href');
      $(activeTabPanelId).addClass('in active');
    }
  }

  goSection(section: string): void {
    console.log(section);
    // var element = document.getElementById(section);
    // element.scrollIntoView();
    window.location.hash = section;
  }

  getMembers(): void {
    this.apiService
      .getMembers()
      .subscribe(data => {
        this.members = data;
        this.sort();
      });
  }

  sort(): void {
    for (var i = 0; i < this.members.length; i++) {
      if (this.members[i].type == 'faculty') {
        this.faculty.push(this.members[i]);
      } else if (this.members[i].type == 'staff') {
        this.staff.push(this.members[i]);
      }
    }
  }
}
