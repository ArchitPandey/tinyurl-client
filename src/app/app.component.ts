import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { TinyurlService } from './tinyurl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    submittedOnce : boolean;
    longurl  : string;
    shorturl : string;
    showshorturldiv : boolean;

    constructor(private tinyurlservice: TinyurlService) {
      this.submittedOnce = false;
      this.longurl = '';
      this.shorturl = '';
      this.showshorturldiv = false;
    }

    onClick() : void {
      this.tinyurlservice.getTinyURL(this.longurl).subscribe( 
        {
          next: (x) => this.processSuccessResponse(x),
          error : (err) => console.log(`error fetching tinyurl for ${this.longurl} ; err - ${err}`) 
        }
      );
    }

    processSuccessResponse(response  : HttpResponse<string>) : void {
      let status : number = response.status;
      
      if(status == 200) {     //ok
        let body : string = response.body;
        this.shorturl = `http://localhost:7070/tinyurl/${body}`;
        this.showshorturldiv = true;
      } else {
        
      }

    }

}
