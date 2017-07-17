import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;
  playerId: string = null;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService, private router: Router) { }

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

  beginUpdatingPlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
    this.router.navigate(['']);
  }

  beginDeletingPlayer(playerToDelete) {
    this.playerService.deletePlayer(playerToDelete);
    this.router.navigate(['/roster-page']);
  }
}
