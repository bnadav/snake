import { Injectable } from '@angular/core';
import { CellModel } from '../models/cell-model';

@Injectable()
export class GameService {

  score: number;
  level: number;
  game_over = false;
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

  // navigation
  up() {
    const new_pos = this.pos - 10;

    if(new_pos < 0 || this.board[new_pos].visited) {
      return;
    }

    if(this.board[new_pos].has_bomb) {
      this.game_over = true;
    }

    this.pos = new_pos;
    this.score++;
  }

  down() {
    const new_pos = this.pos + 10;

    if(new_pos > 99 || this.board[new_pos].visited) {
      return;
    }

    if(this.board[new_pos].has_bomb) {
      this.game_over = true;
    }

    this.pos = new_pos;
    this.score++;
  }

  left() {
    const new_pos = this.pos -1;

    if(new_pos %10 == 9 || this.board[new_pos].visited) {
      return;
    }

    if(this.board[new_pos].has_bomb) {
      this.game_over = true;
    }

    this.pos = new_pos;
    this.score++;
  }

  right() {
    const new_pos = this.pos + 1;

    if(new_pos %10 == 0 || this.board[new_pos].visited) {
      return;
    }

    if(this.board[new_pos].has_bomb) {
      this.game_over = true;    }

    this.pos = new_pos;
    this.score++;
  }
}
