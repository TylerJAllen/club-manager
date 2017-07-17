
import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
   }

   getPlayers(){
     return this.players;
   }

   addPlayerToDB(newPlayer: Player){
     this.players.push(newPlayer);
   }

   findPlayerDetail(key: string){
     return this.database.object('players/' + key);
   }

   updatePlayer(playerToUpdate){
     var playerEntryInDB = this.findPlayerDetail(playerToUpdate.$key);
     playerEntryInDB.update({name: playerToUpdate.name,
                            position: playerToUpdate.position,
                            jersey: playerToUpdate.jersey,
                            experience: playerToUpdate.experience,
                            image: playerToUpdate.image,
                            description: playerToUpdate.description});
   }

   deletePlayer(playerToDelete){
     var playerEntryInDB = this.findPlayerDetail(playerToDelete.$key);
     playerEntryInDB.remove();
   }
}
