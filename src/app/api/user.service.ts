import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  databaseObj!: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "slb.db";
  // Handle Update Row Operation
  updateActive: boolean | undefined;
  to_update_item: any;

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    })
  }

  isCordova() {
    let isDevice: boolean = false
    if (this.platform.is("cordova") && !this.platform.is("mobileweb")) {
      isDevice = true
    }
    return isDevice
  }

  // Create DB if not there
  createDB() {
    if (this.isCordova()) {
      this.sqlite.create({
        name: this.database_name,
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.databaseObj = db;
        })
        .catch((e: any) => {
          console.log("error " + JSON.stringify(e))
        });
    }
  }

  // Create table
  createTable(table_name: any) {
    if (this.isCordova()) {
      this.databaseObj.executeSql(`
      CREATE TABLE IF NOT EXISTS ${table_name}  (pid INTEGER PRIMARY KEY, Name varchar(255))
      `, [])
        .then(() => {
          console.log('Table Created!');
        })
        .catch((e: any) => {
          console.log("error " + JSON.stringify(e))
        });
    }
  }

  //Inset row in the table
  insertRow(data: any, table_name: any) {
    // Value should not be empty
    if (!data) {
      return;
    }

    if (this.isCordova()) {
      this.databaseObj.executeSql(`
      INSERT INTO ${table_name} (Name) VALUES ('${JSON.stringify(data)}')
    `, [])
        .then(() => {
          this.getRows(table_name);
        })
        .catch((e: any) => {
          console.log("error " + JSON.stringify(e))
        });
    }
  }

  // Retrieve rows from table
  getRows(table_name: any) {
    return new Promise((resolve, reject) => {
      if (this.isCordova()) {
        let row_data: any = [];
        this.databaseObj.executeSql(`
      SELECT * FROM ${table_name}
      `
          , [])
          .then((res: any) => {
            if (res.rows.length > 0) {
              for (var i = 0; i < res.rows.length; i++) {
                row_data.push(res.rows.item(i));
              }
              resolve(row_data)
            }
          })
          .catch((e: any) => {
            reject(e)
          });
      } else {
        reject("Could not run on web")
      }
    });
  }

  // Delete single row 
  deleteRow(item: any, table_name: any) {
    this.databaseObj.executeSql(`
        DELETE FROM ${table_name} WHERE pid = ${item.pid}
      `
      , [])
      .then((res: any) => {
        console.log("Row Deleted!");
        this.getRows(table_name);
      })
      .catch((e: any) => {
        console.log("error " + JSON.stringify(e))
      });
  }

  // Enable update mode and keep row data in a variable
  enableUpdate(item: any) {
    this.updateActive = true;
    this.to_update_item = item;
  }

  // Update row with saved row id
  updateRow(pid: any, data: any, table_name: any) {
    if (this.isCordova()) {
      this.databaseObj.executeSql(`
        UPDATE ${table_name}
        SET Name = '${data}'
        WHERE pid = ${pid}
      `, [])
        .then(() => {
          this.updateActive = false;
          this.getRows(table_name);
        })
        .catch((e: any) => {
          console.log("error " + JSON.stringify(e))
        });
    }
  }
}
