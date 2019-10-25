import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './snake/components/game/game.component';
import { BoardComponent } from './snake/components/board/board.component';
import { ScoresComponent } from './snake/components/scores/scores.component';
import { NavigationComponent } from './snake/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    ScoresComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
