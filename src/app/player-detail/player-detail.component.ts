import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: string = null;
  edit: boolean = false;
  showProperties: boolean = true;
  playerToDisplay;
  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private playerService: PlayerService) {

  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = (urlParameters["$key"]);
    });
    this.playerToDisplay = this.playerService.findPlayerDetail(this.playerId);

    this.playerService.findPlayerDetail(this.playerId).subscribe(dataLastEmittedFromObserver => {
      this.playerToDisplay = dataLastEmittedFromObserver;
      console.log(this.playerToDisplay);
    })

  }
  editPlayer(){
    this.edit = true;
    this.showProperties = false;
  }
  beginDeletingPlayer(selectedPlayer) {
    this.playerService.findPlayerDetail(this.playerId).subscribe(dataLastEmittedFromObserver => {
      this.playerToDisplay = dataLastEmittedFromObserver;
      this.playerService.deletePlayer(this.playerToDisplay);
    });
    this.router.navigate(['']);
  }
}
