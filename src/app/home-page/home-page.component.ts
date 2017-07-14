import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [PlayerService]
})
export class HomePageComponent implements OnInit {
  adding: boolean = false;
  players: FirebaseListObservable<any[]>;
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
  startAdding()
  {
    this.adding = true;
  }

  goToPlayerDetailPage(clickedPlayer) {
   this.router.navigate(['players', clickedPlayer.$key]);
 };

}
