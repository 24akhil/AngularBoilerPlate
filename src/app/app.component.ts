import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';
import { LoadingService } from './shared/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyMart';

  constructor(private http: HttpClient,
    private load: LoadingService) { }

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
    // this.load.showLoader(true);
    // setTimeout(() => {
    //   this.load.showLoader(false);

    // }, 5000);

  };

}
