import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getBooks(cat){
    let params = new HttpParams().set('search', cat);
    params = params.append('mime_type','image/jpeg')
    return this.http.get('http://skunkworks.ignitesol.com:8000/books',{ params:params})
  }

  getFilterData(cat,filter){
    let params = new HttpParams().set('search', cat);
    params = params.append('mime_type','image/jpeg')
    params = params.append('search', filter)
    return this.http.get('http://skunkworks.ignitesol.com:8000/books',{ params:params})
  }

}
