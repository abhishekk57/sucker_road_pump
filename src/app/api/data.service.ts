import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public items: any = [];

  constructor() {
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
  }

  filterItems(searchTerm:any) {
    return this.items.filter((item:any) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}