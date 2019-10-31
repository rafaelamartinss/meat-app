import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "./../restaurants/restaraunts.service";
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restautant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  
  constructor(private RestaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.RestaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
