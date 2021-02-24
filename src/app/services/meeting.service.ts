import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import { Meeting } from '../shared/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meeting: Observable<Meeting[]>;
  private MeetingCollection: AngularFirestoreCollection<Meeting>;

  constructor(private afs: AngularFirestore) {
    this.MeetingCollection = this.afs.collection<Meeting>('meetings');
    // this.members = this.MeetingCollection.valueChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //       });
    //     })
    // );
    this.meeting = this.MeetingCollection.valueChanges();
  }

  getMeetings(): Observable<Meeting[]> {
    return this.meeting;
  }

  getMeeting(id: string){
    return this.afs.collection('members', ref => ref.where('id', '==', id)).valueChanges();
  }

  addMember(meeting: Meeting): Promise<DocumentReference> {
    return this.MeetingCollection.add(meeting);

  }

  updateMember(meeting: Meeting): Promise<void> {
    return this.MeetingCollection.doc(meeting.id).update(this.meeting);
  }

  deleteMember(id: string): Promise<void> {
    return this.MeetingCollection.doc(id).delete();
  }
}
