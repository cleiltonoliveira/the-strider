import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private template: any

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('postTitle'))
      let templateName = params.get('postTitle') || ''

      fetch(`assets/content/${templateName}.html`).then(res => res.text()).then(data => {
        this.template = this.sanitizer.bypassSecurityTrustHtml(data);
      })
    })
  }

  getDynamicTemplate(): any {
    return this.template
  }
}
