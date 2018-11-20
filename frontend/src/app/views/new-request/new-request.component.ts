import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSelected(selection: string): boolean {
    return (<HTMLSelectElement>document.getElementById('select-category')).value === selection;
  }

}
