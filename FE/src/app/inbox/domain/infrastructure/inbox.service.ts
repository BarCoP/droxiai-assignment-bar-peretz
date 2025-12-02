import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InboxRequest {
  id: string;
  type: string;
  patientName?: string;
  requestDate?: string;
  lastModifiedDate?: string;
  description?: string;
  estimatedTimeSec?: number;
  isUrgent?: boolean;
  isRead?: boolean;
  labels?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  private base = '/requests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.base);
  }

  // for that scope in the assignments we do not need call to specific ID,
  // using getAll() for fetching all requests whenever inbox component is loaded.
  getById(id: string): Observable<InboxRequest> {
    return this.http.get<InboxRequest>(`${this.base}/${id}`);
  }
}
