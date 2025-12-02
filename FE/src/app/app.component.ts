import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InboxComponent} from "./inbox/feature/inbox/inbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart Inbox';
}
