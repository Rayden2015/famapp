import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  member: Member = {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    otherNames: 'string',
    dob: 'string',
    houseAddress: 'string',
    email: 'string',
    mobileNumber: 'string',
    altMobileNumber: 'string',
    fatherName: 'string',
    motherName: 'string',
    photoURL: 'string'
  };

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('members').valueChanges();
  }

  ngOnInit() {
  }

  update(){
    console.log('AddMember | update()');
  }

}
