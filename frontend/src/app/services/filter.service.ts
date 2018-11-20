import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  statusInProgressEquivalents = [
    'In Bearbeitung', 'in Bearbeitung',
    'Wird bearbeitet', 'wird bearbeitet',
    'Offen', 'offen',
    'Ausstehend', 'ausstehend',
    'In Progress', 'in progress'
  ];

  statusDoneEquivalents = [
    'Abgeschlossen', 'abgeschlossen',
    'Geschlossen', 'geschlossen',
    'Erledigt', 'erledigt',
    'Bearbeitet', 'bearbeitet',
    'Fertiggestellt', 'fertiggestellt'
  ];

  currentStatusFilter = 'all';  // all, open, done

  constructor() {
  }

  applyFilter(statusFilter) {
    this.currentStatusFilter = statusFilter;
  }

  getCurrentStatusFilter() {
    return this.currentStatusFilter;
  }

  isFilteredOut(status):boolean {
    if (this.currentStatusFilter === 'all') {
      return false;
    } else if ((this.currentStatusFilter === 'open') &&
      (this.statusInProgressEquivalents.includes(status))) {
      return false;
    } else {
      if ((this.currentStatusFilter === 'done') &&
        (this.statusDoneEquivalents.includes(status))) {
        return false;
      } else {
        return true;
      }
    }
  }

}
