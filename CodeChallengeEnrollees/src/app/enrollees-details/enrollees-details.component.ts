import { Component, OnInit } from '@angular/core';
import { EnrolleeService } from '../enrollee.service';
import { Enrollee } from '../enrollee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollees-details',
  templateUrl: './enrollees-details.component.html',
  styleUrls: ['./enrollees-details.component.css']
})
export class EnrolleesDetailsComponent implements OnInit {

  id: string;
  enrollee: Enrollee;

  constructor(private route: ActivatedRoute, private router: Router, private enrolleeService: EnrolleeService) { }

  ngOnInit() {
    console.log('inside init');
    this.enrollee = new Enrollee();
    this.id = this.route.snapshot.params['id'];
    console.log('fetching id ' + this.id);
    this.enrolleeService.getEnrollee(this.id)
      .subscribe(data => {
        console.log(data);
        this.enrollee = data;
      }, error => {
      console.log(error);
    });
  }

  list() {
    this.router.navigate(['enrollees']);
  }

}
