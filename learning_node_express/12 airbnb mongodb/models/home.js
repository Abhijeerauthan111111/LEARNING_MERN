const { ObjectId } = require('mongodb');
const { getdb } = require('../util/database.js');

const registeredhomes = [];

module.exports = class Home {
  constructor(housename, price, rating, location, photourl, features, description, _id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.description = description;
    this.rating = rating;
    this.photourl = photourl;
    this.features = features;

    if (_id) {
      this._id = new ObjectId(String(_id));
    }
  }

  save() { // this save also helps to edit the house
    const db = getdb();
    if (this._id) { // update existing code
      return db.collection("homes").updateOne({ _id: this._id }, { $set: this });
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchall() {
    const db = getdb();
    return db.collection("homes").find().toArray();
  }

  static findbyid(homeid) {
    console.log("Came to fetch id", homeid);
    const db = getdb();
    return db.collection("homes").find({ _id: new ObjectId(String(homeid)) }).next();
  }

  static deletebyid(homeid) {
    const db = getdb();
    return db.collection("homes").deleteOne({ _id: new ObjectId(String(homeid)) });
  }
}
