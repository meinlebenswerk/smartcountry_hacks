import {ChangeDetectorRef, Component, Input, OnInit, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterService} from '../../services/filter.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-list-dynamic',
  templateUrl: './request-list-dynamic.component.html',
  styleUrls: ['./request-list-dynamic.component.scss']
})
export class RequestListDynamicComponent implements OnInit, OnChanges{
  @Input() data: any[];


  constructor(private httpClient:HttpClient, private filterService:FilterService, private router:Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    //this.data = [{type:"abc",data:"yesterday",status:"in bearbeitung",id:"100"}]
  }

  ngOnChanges(changes) {
  }

  show_details(id){
    //="request-details" [queryParams]="{request-id: request.request_id}"
    this.router.navigate(['/request-details'], { queryParams: {"request-id": id})
  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
