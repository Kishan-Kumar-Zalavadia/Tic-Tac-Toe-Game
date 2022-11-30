import { Component, OnInit } from '@angular/core';
import { Themes } from '../themes';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  squares: any = [];
  xIsNext = true;
  winner = '';
  counter = 0;
  isDraw = '';
  freshPage=true;
  
  themes = new Themes();

  constructor(private _themeService: ThemeServiceService) {
  }
  ngOnInit(): void { 

  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner='';
    this.isDraw='';
    this.counter=0;
    this.freshPage=false;
  }

  get player(){
    return this.xIsNext?'X':'O';
  }

  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.player);
      this.xIsNext=!this.xIsNext;
      this.counter++;
    }
    this.winner=this.calculuateWinner();

    if(!this.winner && this.counter==9)
    this.isDraw='yes';

  }

  calculuateWinner(){
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a]===this.squares[b] && this.squares[a]===this.squares[c]){
        return this.squares[a];
      }
    }
    return null;
  }


  style={}
  clr={}
  theme(num:number){
    this._themeService.setIndex(num);
    this.style={
      // 'background': this.themes.theme[num][0],
      // 'color': this.themes.theme[num][1]
      'background-image': this.themes.theme[num][1],
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }
    this.clr={
      'color': this.themes.theme[num][0],
      'background-color': this.themes.theme[num][2]
    }
  }
  
  



}
