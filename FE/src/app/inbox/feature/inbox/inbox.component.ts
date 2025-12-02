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


  // since the connection to the BE did not worked, this code is commented out
  // but whenever BE env is ready and run, we use the service, extract data to
  // requests with subscribe and then inject it as we already have in the template
  ngOnInit(): void {
    // this.$requests = this.#inboxService.getAll();
    //
    // this.$requests.subscribe(data => {
    //   console.log('Fetched requests:', data);
    // });
  }
}
