import { Injectable } from '@angular/core';
import { Issue } from '../interfaces/issues';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[]=[]

  private url: string = "http://localhost:3000/api/issues";

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.url}`);
  }

  deleteIssue(id: string):Observable<Object>{
    return this.http.delete<Object>(`${this.url}/${id}`)
  }

  addIssue(issue: Omit<Issue,'id'>): Observable<Issue> {
    return this.http.post<Issue>(this.url,issue)
  }

  updateIssue(id: number, issue: Omit<Issue,'id'>):Observable<Issue>{
    return this.http.put<Issue>(`${this.url}/${id}`,issue)
  }
}
