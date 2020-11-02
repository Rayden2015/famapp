import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  members: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    this.members = firestore.collection('members').valueChanges();
  }

  loadData(){
  }

}


