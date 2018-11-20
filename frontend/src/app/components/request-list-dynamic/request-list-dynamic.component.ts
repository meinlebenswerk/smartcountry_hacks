import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterService} from '../../services/filter.service'

@Component({
  selector: 'app-request-list-dynamic',
  templateUrl: './request-list-dynamic.component.html',
  styleUrls: ['./request-list-dynamic.component.scss']
})
export class RequestListDynamicComponent implements OnInit, OnChanges{
  @Input() data: any[];


  constructor(private httpClient:HttpClient, private filterService:FilterService) {
  }

  ngOnInit() {
    //this.data = [{type:"abc",data:"yesterday",status:"in bearbeitung",id:"100"}]
  }

  ngOnChanges(changes) {
  }

}
