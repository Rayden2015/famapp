import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Member} from '../shared/member';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private members: Observable<Member[]>;
  private MemberCollection: AngularFirestoreCollection<Member>;

  constructor(private afs: AngularFirestore) {
    this.MemberCollection = this.afs.collection<Member>('members');
    this.members = this.MemberCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getMembers(): Observable<Member[]> {
    return this.members;
  }

  getMember(id: string): Observable<Member> {
    return this.MemberCollection.doc<Member>(id).valueChanges().pipe(
        take(1),
        map(Member => {
          Member.id = id;
          return Member;
        })
    );
  }

  addMember(Member: Member): Promise<DocumentReference> {
    return this.MemberCollection.add(Member);
  }

  updateMember(Member: Member): Promise<void> {
    return this.MemberCollection.doc(Member.id).update(Member);
  }

  deleteMember(id: string): Promise<void> {
    return this.MemberCollection.doc(id).delete();
  }
}
