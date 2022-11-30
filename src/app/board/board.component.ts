import { Component, Input, OnInit } from '@angular/core';
import { Themes } from '../themes';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() value: 'X' | 'O' | undefined
  themes = new Themes();
  index!:number
  constructor(private _themeService: ThemeServiceService) { 

  }

  
  boardColor={}
  ngOnInit(): void {
    this.index=this._themeService.getIndex()
    console.log(this.index)
    if(this.index>=0)
    this.boardColor={
      'background-color': this.themes.theme[this.index][0]
    }
  }

  
  

}
