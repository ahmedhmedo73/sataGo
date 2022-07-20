import { Injectable } from "@angular/core";
import {
  NavigationDropdown,
  NavigationItem,
  NavigationLink,
  NavigationSubheading,
} from "../interfaces/navigation-item.interface";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  items: NavigationItem[] = [];

  private _openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this._openChangeSubject.asObservable();

  constructor(private http: HttpClient) {}

  triggerOpenChange(item: NavigationDropdown) {
    this._openChangeSubject.next(item);
  }

  getSidenav() {
    return this.http
      .get(`${environment.endpoint}/mainmenu/indexbyrole`)
      .toPromise();
  }

  isLink(item: NavigationItem): item is NavigationLink {
    // return item.type === "link";
    return item.path.length > 1;
  }

  isDropdown(item: NavigationItem): item is NavigationDropdown {
    // return item.type === "dropdown";
    return item.path === "#";
  }

  isSubheading(item: NavigationItem): item is NavigationSubheading {
    // return item.type === "subheading";
    return item.path === "";
  }
}
