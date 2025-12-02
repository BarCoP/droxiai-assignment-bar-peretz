import { request as dummyRequests } from '../models/dummy1.model';

export class RequestService {
    constructor() {}

    public getAllRequests() {
        return dummyRequests;
    }

    public getRequestById(id: string) {
        // return dummyRequests.find((r: any) => String(r.id) === String(id));
    }
}
