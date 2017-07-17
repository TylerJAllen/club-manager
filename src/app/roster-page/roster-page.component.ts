import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss'],
  providers: [PlayerService]
})
export class RosterPageComponent implements OnInit {
  adding: boolean = false;
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
  startAdding() {
    this.adding = true;
  }

  goToPlayerDetailPage(clickedPlayer) {
   this.router.navigate(['players', clickedPlayer.$key]);
 };

}
