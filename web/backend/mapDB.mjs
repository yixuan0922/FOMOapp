import sqlite3 from "sqlite3";
// import path from "path";
// import axios from '../../node_modules/axios';

// var sqlite3 = sqlite3

const DB_PATH = `${process.cwd()}/database.sqlite`;
// const DB_PATH = `./database.sqlite`;
// const PT = './queryHist.sqlite';

export const mapDB = {
  tableName: "mapDB",
  db: null,
  ready: null,

  create: async function (
    lat,
    long,
    name,
    description,
  ) {
    // await this.ready;

    console.log("creating record")
    
    const query = `INSERT into ${this.tableName} 
    (lat, long, name, description)
    VALUES (?, ?, ?, ?)
    RETURNING id;
    `;
    
    
    const rawResults = await this.__query(query, [
      lat,
      long,
      name,
      description,
    ]);
    
    console.log("create complete")
    return rawResults;

  },

  getAll: async function (){
    const query = `
      SELECT * from ${this.tableName}
    `;

    const rawResults = await this.__query(query);

    console.log(rawResults) // -> returns 
                            // [ { id: 1, lat: '1', long: '1', name: 'test', description: 'test' } ]

    return rawResults;

  },

  getOne: async function (currlat, currlong){
    const query = `
      SELECT * from ${this.tableName}
      WHERE lat = ? and long = ?
    `; 

    const rawResults = await this.__query(query, [
        currlat,
        currlong,
      ]);

    return rawResults;

  },
  

  // Checker 
  __hasTable: async function () {
    const query = `
      SELECT name FROM sqlite_schema
      WHERE
        type = 'table' AND
        name = ?;
    `;
    const rows = await this.__query(query, [this.tableName]);
    return rows.length === 1;
  },

  // Setter

  /* Initializes the connection with the app's sqlite3 database */
  init: async function () {
    /* Initializes the connection to the database */
    // this.db = this.db ?? new sqlite3.Database(DEFAULT_DB_FILE);
    // if (!this.db){

    console.log("init db")
    
    this.db = new sqlite3.Database(DB_PATH);
    console.log(this.db)
    // }

    const resReady = await this.__hasTable();

    if (resReady) {
      this.ready = Promise.resolve();

      /* Create the QR code table if it hasn't been created */
    } else {
      const query = `
        CREATE TABLE ${this.tableName} (
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
          lat TEXT NOT NULL,
          long TEXT NOT NULL,
          name TEXT NOT NULL,
          description TEXT NOT NULL
        )
      `;

      /* Tell the various CRUD methods that they can execute */
      this.ready = this.__query(query);
    }
  },

    // Query func
  __query: function (sql, params = []) {

    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  },


}