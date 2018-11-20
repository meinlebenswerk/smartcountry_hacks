import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  distMin = 0;
  distMax = 8000;
  rating = 0;
  priceCategory = '';
  amenities = [];

  constructor() {
  }

  applyFilters(distMin, distMax, rating, price, amenities) {
    this.distMin = distMin;
    this.distMax = distMax;
    this.rating = rating;
    this.priceCategory = price;
    this.amenities = amenities;
  }

  getDistMin() {
    return this.distMin;
  }

  getDistMax() {
    return this.distMax;
  }

  getRating() {
    return this.rating;
  }

  getPriceCat() {
    return this.priceCategory;
  }

  getAmenities() {
    return this.amenities;
  }
}
