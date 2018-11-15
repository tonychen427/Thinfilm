import { Component } from "@angular/core";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { NavController } from "ionic-angular";
import { NewNotePage } from "../note/form";
import { ListNotePage } from "../note/list";

const url = 'https://thinfilmnfc.com';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {}
  createNote() {
    this.navCtrl.push(NewNotePage);
  }
  viewNote() {
    this.navCtrl.push(ListNotePage);
  }
  launchThinfilm() {
    const options: InAppBrowserOptions = { zoom: 'no' };
    this.inAppBrowser.create(url, '_blank', options);
  }
}
