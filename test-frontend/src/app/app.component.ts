import { Component } from '@angular/core';
import {CountSignesService} from './count-signes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  myText: string;
  count: Number;
  isDisabled = false;
  constructor(private textService: CountSignesService) {}


  countSignes(){
    this.textService
      .getSignesCount(this.myText)
      .subscribe((data:any)=>{
        this.count = data;
      })
  }
}
