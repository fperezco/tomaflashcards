import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SqliteManagementService } from '../sqlite-management.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  
  content: any;

  constructor(private activatedRoute: ActivatedRoute, public sqliteManagementService: SqliteManagementService, public sqlite: SQLite) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  fileSelected(ev) {
    let myFile = ev.target.files[0];
    let reader = new FileReader();

    reader.readAsText(myFile);
    reader.onload = (e) => {
      const fileContent: string = reader.result as string;
      console.log('fileContent:' + fileContent);
      const lines: string[] = fileContent.split('\n'); 

      console.log("lineassss");
      console.log(lines);

      this.createDatabase();
      this.sqliteManagementService.create( {title:"tarea1", completed:"true"});
      this.sqliteManagementService.create( {title:"tarea2", completed:"false"});
    };

    //console.log("contenido archivo" + this.content);
  }


  createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.sqliteManagementService.setDatabase(db);
      return this.sqliteManagementService.createTable();
    })
    .then(() =>{
      console.log("todo ok");
    })
    .catch(error =>{
      console.error(error);
    });
  }

  getAllTasks(){
    this.sqliteManagementService.getAll()
    .then(tasks => {
      this.content = tasks;
    })
    .catch( error => {
      console.error( error );
    });
  }



}
