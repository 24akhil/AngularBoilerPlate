import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyMart';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // var data = {
    //   name: 'John Doe',
    //   title: 'Engineer'
    // };
    // console.log(data);
    // this.http.post('https://ng-demohttp.firebaseio.com/posts.json', data)
    //   .subscribe(resData => {
    //     console.log(resData);
    //   });


   
  };

}
