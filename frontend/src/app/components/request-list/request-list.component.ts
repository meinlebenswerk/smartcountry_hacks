import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterService} from '../../services/filter.service'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  constructor(private httpClient:HttpClient, public filterService:FilterService) {
  }

  ngOnInit() {

  }

}
