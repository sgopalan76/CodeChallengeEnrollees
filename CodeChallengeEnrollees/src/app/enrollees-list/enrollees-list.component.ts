import { Component, OnInit } from '@angular/core';
import { EnrolleeService } from '../enrollee.service';
import { Enrollee } from '../enrollee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollees-list',
  templateUrl: './enrollees-list.component.html',
  styleUrls: ['./enrollees-list.component.css']
})
export class EnrolleesListComponent implements OnInit {
  enrollees: Observable<Enrollee[]>;
  searchValue: string;
  totalRecords: string;
  page = 1;
  public errorMsg: string;

  constructor(private enrolleeService: EnrolleeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    console.log('inside reloadData...');
    this.enrolleeService.getEnrolleesList()
                                          .subscribe( data => this.enrollees = data,
                                                      error => this.errorMsg = error
                                            );
  }

  testData() {
    console.log('here');
  }

  enrolleeDetails(id: string) {
    this.router.navigate(['details', id]);
  }

  updateEnrollee(id: string) {
    console.log('inside enrollee list update ' + id);
    this.router.navigate(['update', id]);
  }

}
