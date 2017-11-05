import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
//
import { environment } from '../../environments/environment';
//
import { AdminApiService } from '../admin-api.service';
//
import { Maillist } from '../maillist';
import { Mail } from '../mail';





@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {

  maillist: Maillist[];
  mail: Mail = {to: '', subject: '', content: '', attachment: ''};
  uploaderError: string;

  public uploader: FileUploader = new FileUploader({ url: environment.adminUrl + '/upload/email/attachment' });
  
  constructor(
    private adminApiService: AdminApiService
  ) { 
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      response = JSON.parse(response);
      if (response.error_code != '0') {
        return this.uploaderError = response.err_desc;
      }
      this.mail.attachment = response.filename;
      console.log(this.mail);
    };
  }

  ngOnInit() {
    this.getMaillist();
  }

  getMaillist(): void {
    this.adminApiService
      .getMaillist()
      .subscribe(data => {
        this.maillist = data;
        console.log(this.maillist);
      });
  }

  onChange(id): void {
    // console.log("Test_" + id);
    this.mail.to = id ;
  }

  sendMail(): void {
    console.log('3');
    this.adminApiService
      .sendMail(this.mail)
      .subscribe(data => {
        console.log(data);
      });
  }

}
