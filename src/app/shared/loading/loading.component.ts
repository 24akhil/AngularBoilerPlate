import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public _isShow: boolean;
  constructor(private loadServ: LoadingService) {

    loadServ._show.subscribe(data => {
      this._isShow = data.valueOf();
    });
  }

  ngOnInit(): void {
  }

}
