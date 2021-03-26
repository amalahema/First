import { Component,OnInit,Inject } from '@angular/core';//@inject is an iterface
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion }  from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  dish:Dish;
  dishErrMess: string;
  promotion:Promotion;
  leader: Leader;
  constructor(private dishService:DishService,
    private promotionService: PromotionService,
    private leaderService:LeaderService,@Inject('baseURL') private baseURL)//inject two service and make it available
   { }                                                    //provided url(localhost)& basic url(dishes)

  ngOnInit() 
  {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
      errmess => this.dishErrMess =<any>errmess);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
  }

}
