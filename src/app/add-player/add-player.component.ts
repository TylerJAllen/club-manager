import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  providers: [PlayerService]
})
export class AddPlayerComponent implements OnInit {
  @Input() childAdding: boolean;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name: string, author: string, description: string, image: string){
    // var newPlayer: Player = new Player(name, author, description, image);
    var newPlayer: Player = new Player(name);
    this.playerService.addPlayerToDB(newPlayer);

    this.router.navigate(['']);
  }
}
