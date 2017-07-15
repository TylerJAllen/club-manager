import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {
  @Input() childAdding: boolean;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  // submitForm(name: string, author: string, description: string, image: string){
  // var newPlayer: Player = new Player(name, author, description, image);
  submitForm(name: string, position: string, jersey: number, experience: number, image: string, description: string){
    var newPlayer: Player = new Player(name, position, jersey, experience, image, description);
    this.playerService.addPlayerToDB(newPlayer);

    this.router.navigate(['']);
  }
}
