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
  name : string = 'Init';

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit() {
 
  }

  loadData(){
    alert(this.name);
    console.log('name : ' + this.name);
    this.name = '';
  }

}
