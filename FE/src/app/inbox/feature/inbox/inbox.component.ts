import {Component, inject, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {Observable} from "rxjs";
import {InboxRequest, InboxService} from "../../domain/infrastructure/inbox.service";
import {demoRequest, InboxRequestItem} from "../../domain/mock-requests";
import {PrescriptionRequestComponent} from "./prescription-request/prescription-request.component";

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [MatIconModule, PrescriptionRequestComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit {

  #inboxService = inject(InboxService);
  $requests!: Observable<InboxRequest[]>;
  requestsDemo: InboxRequestItem[] = demoRequest;

  ngOnInit(): void {
    // this.$requests = this.#inboxService.getAll();
    //
    // this.$requests.subscribe(data => {
    //   console.log('Fetched requests:', data);
    // });
  }
}
