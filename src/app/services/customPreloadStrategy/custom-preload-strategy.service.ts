import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomPreloadStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if (route.data && route.data.preload) {
      console.log(`Preloaded: ${route.path}`);

      return load(); // Strategy de préchargement
      
    }

    return of(null); // Strategy lazy loading
  }
}
