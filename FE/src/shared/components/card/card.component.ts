import {Component, computed, input} from '@angular/core';
import {InboxRequestItem} from "../../../app/inbox/domain/mock-requests";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe} from "@angular/common";
import {MINUTES_FOR_ADDING_PLUS_SIGN, MINUTES_IN_HOUR} from "./card.constants";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatIconModule,
    DatePipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardData = input.required<InboxRequestItem>();

  iconName$= computed(() => {
    const type = this.cardData().type;
    switch(type){
      case 'renewal':
        return 'medicine';
      case 'freeText':
        return 'message';
      case 'labReport':
        return 'icon_labs';
      default:
        return 'description';
    }

  })

  estimatedTimeMin$ = computed(() => {
    const ans = Math.ceil(this.cardData().estimatedTimeSec / MINUTES_IN_HOUR)
    return ans > MINUTES_FOR_ADDING_PLUS_SIGN ? ans + '+' : ans;
  })
}
