// // app.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class AppService {
//   private apiUrl = 'http://35.238.227.148:5000/answer'; // Replace with your backend API URL

//   constructor(private http: HttpClient) {}

//   sendMessage(question: string) {
//     return this.http.post(this.apiUrl, { question });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private backendUrl = 'http://35.238.227.148:5000/answer';

  constructor(private http: HttpClient) {}

  sendQuestion(question: string): Observable<any> {
    return this.http.post(this.backendUrl, { question });
  }
}

