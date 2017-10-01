import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import './introduction.js';
declare var $: any;

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {


  section: any;
  private sub: any;
  private init = true;
  constructor(private route: ActivatedRoute, private router: Router) {


    this.sub = this.route.params.subscribe(params => {
      if (params['section']) {
        this.section = params['section'];
        console.log('cons:' + this.section);
        if(document.readyState === 'complete' && this.init == false){
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

}
