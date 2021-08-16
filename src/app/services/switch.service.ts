import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// environment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  constructor(private http: HttpClient) {
    console.log('*** Service Running ***');
  }

  getLED() {
    return this.http.get<any>(environment.URL_API);
  }

  updateLED(led: Object) {
    
    return this.http.post<Object>(`${environment.URL_API}`, led);
  }
}
