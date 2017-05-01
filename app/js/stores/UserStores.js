import { EventEmitter } from 'events';
import firebase from 'firebase';
import _ from 'lodash';

// Firebase Configuration
const config = {
  apiKey: 'AIzaSyDtu3u2w6xrFQ9dwy_FLNdvOrIXiIUrfsg',
  authDomain: 'fast-news-fd83b.firebaseapp.com',
  databaseURL: 'https://fast-news-fd83b.firebaseio.com',
  projectId: 'fast-news-fd83b',
  storageBucket: 'fast-news-fd83b.appspot.com',
  messagingSenderId: '180417168863',
};

// Initialize firebase
firebase.initializeApp(config);

// Set the database collection
const ref = firebase.database().ref('/');

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      data: this.getData(),
    };
    console.log(this.state.data);
  }

  getData() {
    const data = [];
    ref.once('value', (snap) => {
      data.push(JSON.stringify(snap.val()));
    });
    return data;
  }

  getOne() {
    this.filtered = _.find(this.state.data, ['fname', 'bamidele']);
    console.log(this.sData);
    return this.filtered;
  }

}

const userStore = new UserStore();
export default userStore;
