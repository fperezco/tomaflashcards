import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
import { browserDBInstance } from "./browser";

declare var window: any;
const SQL_DB_NAME = "database.db";

@Injectable({
  providedIn: "root",
})
export class CompleteSqlService {
  dbInstance: any;
  plataforma:any

  constructor(public sqlite: SQLite, private platform: Platform) {
    //this.init();
    console.log("constructor invocado plaform => ", platform);

    if (!platform.is("cordova")){
      console.log("constructor no es cordova");
    }
    else {
      console.log("constrcutor es cordova");
    }

  }

  executeStatement(statement){
    console.log("execute statement" + statement);
    console.log("dbinstance = ");
    console.log(this.dbInstance);
      this.dbInstance.executeSql(statement,[]);
  }


  initializeWebEngine(databaseName){
    return new Promise(function (resolve, reject) {
      console.log("es cordova");
      let db = window.openDatabase(databaseName, "1.0", "DEV", 5 * 1024 * 1024);
      //this.dbInstance = browserDBInstance(db);
      resolve(browserDBInstance(db));
    });
  }

  initializeMobileEngine(databaseName){
    return new Promise(function (resolve, reject) {
      console.log("es android!!");
      let sqllite = new SQLite();

        sqllite.create({
          name: databaseName,
          location: "default",
        })
        .then((db: SQLiteObject) => {
          console.log("sqlite object resolved")
          resolve(db);
        })
        .catch((e) => {
          console.log("ERRORK" + e);
          reject(e);
        }
        );
      //this.dbInstance = new sqlite3.Database(dbPath, err => err ? resolve() : reject(err));
      });
  }


/*   OpenDB(databaseName){
    return new Promise(function (resolve, reject) {
    })
  } */
  
  openDB(databaseName) {

    if (!this.platform.is("cordova")) {
      return this.initializeWebEngine(databaseName).then((response) => {
        this.dbInstance = response;
      });
    }
    else{
      return this.initializeMobileEngine(databaseName).then((response) => {
        this.dbInstance = response;
      });
    }

/*      return new Promise(function (resolve, reject) {

      if (!this.platform.is("cordova")) {
        console.log("es cordova");
        let db = window.openDatabase(databaseName, "1.0", "DEV", 5 * 1024 * 1024);
        this.dbInstance = browserDBInstance(db);
        resolve();
      } else {
        console.log("es android!!");
        this.sqlite
          .create({
            name: databaseName,
            location: "default",
          })
          .then((db: SQLiteObject) => {
            this.dbInstance = SQLiteObject;
            resolve();
          })
          .catch((e) => {
            console.log("ERRORK" + e);
            reject(e);
          }
          );
      }

      //this.dbInstance = new sqlite3.Database(dbPath, err => err ? resolve() : reject(err));
    });  */
  }



/*   init() {
    if (!this.platform.is("cordova")) {
      console.log("es cordova");
      let db = window.openDatabase(SQL_DB_NAME, "1.0", "DEV", 5 * 1024 * 1024);
      this.dbInstance = browserDBInstance(db);
      return this.dbInstance;
    } else {
      console.log("es android!!");
      /*       this.dbInstance = await this.sqlite.create({
        name: SQL_DB_NAME,
        location: 'default'
      }); */

/*       this.sqlite
        .create({
          name: SQL_DB_NAME,
          location: "default",
        })
        .then((db: SQLiteObject) => {
          this.dbInstance = SQLiteObject;
          return this.dbInstance;
        })
        .catch((e) => console.log("ERRORK" + e));
    } */
//  } 
}
