import { Component, SimpleChanges } from '@angular/core';
import { SelectTypeComponent } from '../select-type/select-type.component';
import { Router } from '@angular/router';
import { IssuesService } from '../services/issues.service';
import { Issue } from '../interfaces/issues';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [SelectTypeComponent, CommonModule],
  templateUrl: './issues.component.html'
})
export class IssuesComponent {

  issues: Issue[] = []

  constructor(private router:Router, private issuesService: IssuesService){}

  goToAddIssues(){
    this.router.navigate(['/issues/add']);
  }

  ngOnInit():void{
    this.issuesService.getIssues().subscribe((issuesList)=>{
     this.issues = issuesList;
    })
  }

  ngOnChanges(changes:SimpleChanges):void{
    this.issuesService.getIssues().subscribe((issuesList)=>{
      this.issues = issuesList;
    })
  }

  delete(id:string){
    this.issuesService.deleteIssue(id).subscribe({
      next: ()=>
      this.router.navigate(['/issues'])
    });
  }
}
