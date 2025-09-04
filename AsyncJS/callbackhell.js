// A function to simulate getting data from a server
function simulateAsyncTask(data, delay, callback) {
  setTimeout(() => callback(null, data), delay);
}

// The Callback Hell
getUser(1, function(err, user) {
  if (err) {
    console.error("Error getting user:", err);
    return;
  }
  console.log("User:", user);
  getPosts(user.id, function(err, posts) {
    if (err) {
      console.error("Error getting posts:", err);
      return;
    }
    console.log("Posts:", posts);
    getComments(posts[0].id, function(err, comments) {
      if (err) {
        console.error("Error getting comments:", err);
        return;
      }
      console.log("Comments:", comments);
      // This can keep going deeper and deeper... 
      // getLikes(comments[0].id, function(err, likes) { ... });
    });
  });
});

// Helper function definitions
function getUser(id, callback) {
  simulateAsyncTask({ id: 1, name: 'John Doe' }, 1000, callback);
}
function getPosts(userId, callback) {
  simulateAsyncTask([{ id: 101, title: 'Post 1' }], 1000, callback);
}
function getComments(postId, callback) {
  simulateAsyncTask([{ id: 1001, text: 'Nice post!' }], 1000, callback);
}