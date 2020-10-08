import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth-service.service';
import { Member } from '../shared/member';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  member: Member;

  constructor(public authService: AuthenticationService) {
  }

  loadData(){
  }

}
