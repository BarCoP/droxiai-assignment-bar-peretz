import {Component, input} from '@angular/core';
import {InboxRequestItem} from "../../../domain/mock-requests";
import {CardComponent} from "../../../../../shared/components/card/card.component";

@Component({
  selector: 'app-prescription-request',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './prescription-request.component.html',
  styleUrl: './prescription-request.component.css'
})
export class PrescriptionRequestComponent {
  requestData = input.required<InboxRequestItem>();
}
