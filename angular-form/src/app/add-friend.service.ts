import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private http: HttpClient;
  private url = '';

  constructor(http: HttpClient) {
    this.http = http;
  }

  method: any; addFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.url, friend);
  }

}
