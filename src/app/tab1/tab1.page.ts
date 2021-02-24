import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { MemberServiceService } from "../services/member-service.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  members: any;
  membersBackup: any[];

  constructor(private memberService: MemberServiceService, private router: Router) {
    this.members = this.memberService.getMembers();
    console.log(this.members);
  }

  loadData() {}

  async filterMemberList(evt) {
    this.membersBackup = this.members;
    const searchItem = evt.srcElement.value;
    console.log("searchItem,", searchItem);

    if (!searchItem) {
      return;
    } else {
      console.log("Filtering");
      this.members = this.members.filter((currentMember) => {
        if (currentMember.firstName && searchItem) {
          return (
            currentMember.firstName.includes(searchItem) ||
            currentMember.lastName.includes(searchItem)
          );
        }
      });
    }
  }

  openMemberDetailPage(id){
    this.router.navigateByUrl(`/tabs/tabs/tab1/${id}`);
  }
}
