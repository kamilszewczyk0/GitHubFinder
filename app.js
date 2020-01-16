// Init github
const github = new Github;

//init ui
const ui = new UI;

// Search input + event listener
const searchUser = document.getElementById('searchUser').addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // clear profile
    ui.clearProfile();
  }
});