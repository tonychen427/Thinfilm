import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { NoteProvider } from "../../../providers/notes";

import { NewNotePage } from "../form";

@Component({
  selector: "page-home",
  templateUrl: "list.html",
})
export class ListNotePage {
  notes: Array<object> = [];

  constructor(
    public navCtrl: NavController,
    public noteProvider: NoteProvider
  ) {}

  ionViewDidEnter() {
    this.noteProvider.getAllNotes().then(val => {
      this.notes = val;
    });
  }

  delete(data) {
    this.noteProvider.deleteNoteById(data.id).then(updateList => {
      this.notes = updateList;
    });
    // this.storage.get('notes').then(val => {
    //   let updateList = val.filter(item => item.id !== data.id);
    //   this.notes = val;
    //   this.storage.set('notes', updateList);
    // });
  }

  edit(data) {
    console.log(data);
    this.navCtrl.push(NewNotePage, data);
  }
}
