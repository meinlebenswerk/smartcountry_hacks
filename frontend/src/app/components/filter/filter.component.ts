import {Component, OnInit, HostListener} from '@angular/core';
import {FilterService} from '../../services/filter.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  screenWidth = 0;

  constructor(private filterService:FilterService) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this.toggleDetails();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = event.target.innerWidth;

    this.toggleDetails();
  }

  toggleDetails() {
    var filterNode = document.getElementById('filters');
    if (this.screenWidth > 768) {
      filterNode.classList.add('always-open');
    } else {
      filterNode.classList.remove('always-open');
    }
  }

  filterByStatus(status) {    // all, open, done
    this.filterService.applyFilter(status);
  }

}
