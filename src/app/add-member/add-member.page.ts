import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { MemberServiceService } from '../services/member-service.service';




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
    dob: Date.now().toString(),
    houseAddress: 'string',
    email: 'string',
    mobileNumber: 'string',
    altMobileNumber: 'string',
    fatherName: 'string',
    motherName: 'string',
    photoURL: 'string',
    dateCreated: Date.now().toString(),
    dateModified: Date.now().toString()
  };

  items: Observable<any[]>;


  constructor(private firestore: AngularFirestore, private route: Router, private memberService: MemberServiceService) {
    // this.items = this.firestore.collection('members').valueChanges();
  }

  ngOnInit() {
  }

  add(member){
    console.log('AddMember | add()');
    const id = this.firestore.createId();
    //const memberCollection = this.firestore.collection<Member>('members');
    this.member.id = id;

    if (this.memberService.addMember(this.member)){
      console.log('AddMember | add() | Member Saved Succefully ');
      alert('Member Saved Succefully');
      this.route.navigateByUrl('/tabs/tabs/tab1');
    }else{
      alert('Error Occured. Try Again Later');
    }

  }

}
