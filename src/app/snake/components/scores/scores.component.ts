import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  constructor(public bl: GameService) { }

  game_ended_message() {
    if(this.bl.game_lost) {
       return "Game Over";
    }
    if(this.bl.game_won) {
      return "You Win !";
    }
  }

  ngOnInit() {
  }

}
