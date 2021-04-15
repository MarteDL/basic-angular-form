
import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }
  languages = ['html', 'css', 'js', 'php', 'C#', 'Java'];
  friendModel = new Friend(null, null, null, null, null);
  private addFriendService: AddFriendService;

  // tslint:disable-next-line:typedef
  onSubmit(friend: Friend) {
    this.addFriendService.addFriend(friend).subscribe(data => 'it worked', error => 'it didn\'t work');
    }
}
