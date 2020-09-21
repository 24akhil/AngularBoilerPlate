import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public _show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoader(indicator: boolean) {
    this._show.next(indicator);
  }

  getLoader() {
    return this._show;
  }


}
