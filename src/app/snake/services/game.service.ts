import { Injectable } from '@angular/core';
import { CellModel } from '../models/cell-model';

@Injectable()
export class GameService {

  score: number;
  level: number;
  game_lost = false;
  game_won = false;
  visited_count = 0
  pos: number;
  board: CellModel[];

  new_game(level=1) {
    this.score = 0;
    this.level = level;
    this.pos = 50;
    this.board = new Array(100).fill(null).map(_ => new CellModel());
    this.board[this.pos].current = true;

    // put some bombs
    for (let i=0; i < level; i++) {
      this.board[Math.floor(Math.random()*100)]._has_bomb = true;
    }

  }

  // game end
  get game_ended() {
    return this.game_lost || this.game_won;
  }
  
  // navigation
  up() {
    const new_pos = this.pos - 10;
   
    if(new_pos >= 0) {
      this.move(new_pos);
    }
  }

  down() {
    const new_pos = this.pos + 10;

    if(new_pos < 100) {
      this.move(new_pos);
    }

  }

  left() {
    const new_pos = this.pos -1;
   
    if(new_pos %10 != 9) {
      this.move(new_pos);
    }

  }

  right() {
    const new_pos = this.pos + 1;

    if(new_pos %10 != 0) {
      this.move(new_pos);
    }
  }

  move(new_pos: number) {

    if(this.game_ended) {
      return;
    }

    if(this.board[new_pos].visited) {
      return;
    }

    if(this.board[new_pos].has_bomb) {
      this.game_lost = true;
      return;
    }

    if(this.visited_count == (100 - this.level - 1)) {
      this.game_won = true;
      return;
    }

    this.board[this.pos].current = false;
    this.board[this.pos].visited = true;
    this.board[new_pos].current = true;
    this.pos = new_pos;
    this.score++;
  }

}
