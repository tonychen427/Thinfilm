import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { v4 as uuid } from "uuid";

const STORAGE_KEY = "notes";

@Injectable()
export class NoteProvider {
  constructor(public storage: Storage) {}

  deleteNoteById(noteId) {    
    return this.storage.get(STORAGE_KEY).then(result => {
      if (result) {
        let updateList = result.filter(item => item.id !== noteId);
        return this.storage.set(STORAGE_KEY, updateList);
      }
    });
  }

  updateNote(payload) {
    this.storage.get(STORAGE_KEY).then(val => {
      let json = val || [];
      for (var k = 0; k < json.length; ++k) {
        if (json[k]["id"] === payload.id) {
          json[k]["title"] = payload.title;
          json[k]["context"] = payload.context;
        }
      }
      return this.storage.set(STORAGE_KEY, json);
    });
  }

  saveNote(payload) {
    this.storage.get(STORAGE_KEY).then(val => {
      let data = val || [];
      data.unshift({
        id: uuid(),
        title: payload.title,
        context: payload.context
      });
      this.storage.set(STORAGE_KEY, data);
    });
  }

  getAllNotes() {
    return this.storage.get(STORAGE_KEY);
  }
}
