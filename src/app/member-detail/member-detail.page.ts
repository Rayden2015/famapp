import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MemberServiceService } from "../services/member-service.service";
import { Member } from '../shared/member';

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.page.html",
  styleUrls: ["./member-detail.page.scss"],
})
export class MemberDetailPage implements OnInit {
  member: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberServiceService,
    private route: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.memberService.getMember(id).subscribe((data) => {
      this.member = data[0];
      console.dir(data[0]);
    });
  }

  deleteMember(id) {
    try {
      this.memberService.deleteMember(id);
      alert("Member Deleted Succesfully");
      this.route.navigateByUrl('/tabs/tabs/tab1');
    } catch (e) {
      console.error(e.message);
    }
  }

  updateMember() {}
}
