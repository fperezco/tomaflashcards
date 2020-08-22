import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompleteSqlService } from '../services/complete-sql.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss']
})
export class FolderPage implements OnInit {
  public folder: string;
  
  content: any;
  users: any;
  dbEngine: any;

  constructor(private activatedRoute: ActivatedRoute,
    private sql: CompleteSqlService,
    private sqlite: SQLite
    ) { }

  ngOnInit() {
    this.initializeEngine();
    console.log("hola pacoooo");
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.sql.openDB("vengaya.db")
    .then(() =>
    {
      console.log("base de datos inicializada");
      this.sql.executeStatement('CREATE TABLE IF NOT EXISTS userstest3(id INTEGER PRIMARY KEY, user TEXT)');
      //CreateTable("sampleTable", "Column1 TEXT NOT NULL, Column2 TEXT NOT NULL"))
    }
    )
    .then(() => {
      console.log("tabla creada, insertamos");
      this.sql.executeStatement(`INSERT INTO userstest3(id, user) VALUES (3, 'eeeefjuasdfdsan')`);
    })
    .then(() => {
      console.log("insercion completada");
    })
    .catch(err => console.error(err));






    //this.dbEngine = this.sql.initDBEngine();

    //check if database exists
    //let databaseExists = this.dbEngine.createDBIfNoExits("testing.db");
    //this.load();
    //this.getResults();

    //this works with navite but the other with web 
/*     this.sqlite.create({
      name: 'datayeaaa.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
    
      })
      .catch(e => console.log(e)); */

  }

  async initializeEngine(){
/*     console.log("initialize engine...");
    let res = await this.sql.init();
    console.log("create tables...");
    await this.load(res); */
/* console.log("invocada inicializacion del motor...");
    let hello = this.sql.init();
    hello
    .then(response => {
      console.log("respuesta de motor inicializado");
      this.sql = response;
      this.load();
    }); */
}


  async ionViewDidLoad () {
/*     await this.sql.dbInstance.executeSql('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, name)');
    await this.sql.dbInstance.executeSql("INSERT INTO user(id, user) VALUES (1, 'Suraj')");
    let users = await this.sql.dbInstance.executeSql('SELECT * FROM user');
    console.log(users); */
 }

  async load(){
    console.log("loading...");
    await this.sql.dbInstance.executeSql('CREATE TABLE IF NOT EXISTS userstest3(id INTEGER PRIMARY KEY, user TEXT)');
    await this.sql.dbInstance.executeSql(`INSERT INTO userstest3(id, user) VALUES (1, 'juan')`);
    await this.sql.dbInstance.executeSql(`INSERT INTO userstest3(id, user) VALUES (2, 'Pepe')`);
    let users = await this.sql.dbInstance.executeSql('SELECT * FROM userstest3');
    console.log(users);
    //console.log(users.rows[0]);
    this.users = users.rows;
 }

 async getResults(){
  let users = await this.sql.dbInstance.executeSql('SELECT * FROM userstest2');
  console.log(users);
  console.log(users.rows[0]);
  this.users = users.rows;
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

/*       this.createDatabase();
      this.sqliteManagementService.create( {title:"tarea1", completed:"true"});
      this.sqliteManagementService.create( {title:"tarea2", completed:"false"}); */
    };

    //console.log("contenido archivo" + this.content);
  }


/*   createDatabase(){
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
  } */

/*   getAllTasks(){
    this.sqliteManagementService.getAll()
    .then(tasks => {
      this.content = tasks;
    })
    .catch( error => {
      console.error( error );
    });
  } */



}
