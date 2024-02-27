import { User } from './userEvents.js';

const user1 = new User();
function saveToDatabase(content) {
  console.log('Save to database: ');
}

function sendNotification(content) {
  console.log('Notification is sent:');
}

function updateTimeline(content) {
  console.log('Your timeline is updated: ');
}
user1.addListener('postCreated', saveToDatabase);
user1.addListener('postCreated', sendNotification);
user1.addListener('postCreated', updateTimeline);

user1.createPost('This is my post');