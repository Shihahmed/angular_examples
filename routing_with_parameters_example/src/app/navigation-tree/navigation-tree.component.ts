import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-navigation-tree',
  templateUrl: './navigation-tree.component.html',
  styleUrls: ['./navigation-tree.component.css']
})
export class NavigationTreeComponent implements OnInit {

  groups: Group[];

  constructor(public databaseService: DatabaseService, private route: ActivatedRoute,
    private router: Router) {

      this.databaseService.groups.subscribe(groups => this.groups = groups);

  }

  ngOnInit() {
  }

  gotoItems(groupid, reportid) {
    this.router.navigate(['/home/report',   groupid, reportid ]);
  }


  getAllGroups() {

    this.databaseService.getAllGroups().subscribe((data: Group[]) => {
      console.log(data);
     this.groups = data;
    });

  }


}
