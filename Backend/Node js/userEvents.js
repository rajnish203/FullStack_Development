import *  as Event from 'events';
export class User extends Event.EventEmitter {
  createPost(content) {
    console.log('The post is created');
    this.emit('postCreated');
  }
}
