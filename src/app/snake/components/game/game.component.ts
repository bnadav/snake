import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [GameService],
})
export class GameComponent implements OnInit {

  constructor(public bl:GameService) { 
    this.bl.new_game(2);
  }

  ngOnInit() {
    
  }

}
