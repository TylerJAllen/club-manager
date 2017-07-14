import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
    this.router.navigate(['']);

  }
}
