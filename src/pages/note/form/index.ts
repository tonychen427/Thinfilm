import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

import { NoteProvider } from '../../../providers/notes';

@Component({
  selector: "page-home",
  templateUrl: "new.html",
})
export class NewNotePage {
  private note: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public noteProvider: NoteProvider,
    public navParams: NavParams) {
    this.note = this.formBuilder.group({
      id: [navParams.get('id') || ''],
      title: [navParams.get('title') || '', Validators.required],
      context: [navParams.get('context') || '']
    });
  }

  submitForm() {
    if (this.note.value.id === '') {
      this.noteProvider.saveNote(this.note.value);
    } else {
      this.noteProvider.updateNote(this.note.value);
    }
    this.navCtrl.pop();
  }
}
