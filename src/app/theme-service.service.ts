import { Injectable } from '@angular/core';
import { Themes } from './themes';
@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  themes = new Themes();
  constructor() { 
  }
  index!:number;
  setIndex(num:number){
    this.index=num;
    console.log(this.index)
  }
  getIndex(){
    return this.index;
  }
  
}
