// FROM PASSPORT.JS
else {
  console.log('USER IS UNIQUE, creating new user')
  let newUser = new User()
  newUser.local.email = email
  newUser.local.password = newUser.encrypt(password)
  newUser.local.firstName = req.body.firstName
  newUser.local.lastName = req.body.lastName
  newUser.local.zip = req.body.zip

  newUser.save(err => {
    if (err) throw err
    return callback(null, newUser)
  })
}




        //FROM passport.js
            {
              console.log('USER IS UNIQUE, creating new user')
              User.create({
                email: email,
                password: password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                zip: req.body.zip
              }).then(newUser => {
                newUser.save(err => {
                  if (err) throw err
                  console.log('made new user')
                  return callback(null, newUser)
                })
              })
            }



// from user/signup.hbs


        <p>
          <input id="choice1" class="with-gap" name="orgName" type="radio" value:"General Assembly" checked />
          <label for="choice1">General Assembly</label>
          <input id="choice2" class="with-gap" name="orgName" type="radio" value:"DC Tech Meetup"/>
          <label for="choice2">DC Tech Meetup</label>
        </p>


// troubleshooting
// original entire match/index.hbs view file

<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        {{#if currentUser}}
          <ul>
            <h4 class="header col s12 light">Hello {{currentUser.local.firstName}}! Welcome to {{currentUser.local.orgName}} on Uncommon Joe</h4>
            <h4 class="header col s12 light">Click <button class="btn waves-effect waves-light" type="submit" formmethod="POST" formaction="/match/index" name="matchPost">Match
              <i class="material-icons right">assignment_ind</i></button> when you are ready!</h4>
          </ul>

          <p class="card">
            {{> 'match'}}
          </p>

          {{#if messages.length}}
            {{#each messages}}
              <div class="card">
                <div class="card-content">
                  <span class="card-title">
                    {{ content }}
                  </span>
                </div>
                <div class="card-action">
                  <a href="/user/{{ author.id }}" class="">{{ author.local.email }}</a>
                  <span>{{ createdAt }}</span>
                </div>
              </div>
            {{/each}}
          {{/if}}

            <div class="card">
              <div class="card-content">
                <h4 class="card-title">Add a comment:</h6>
                <form method="PUT" action="/match/{{id}}?_method=PUT" class="row">
                  <p class="input-field inline col s10">
                    <label for="content"></label>
                    <input type="text" name="content" id="">
                  </p>
                  <p class="input-field inline col s2">
                    <input class="btn" type="submit" value="Submit">
                  </p>
                </form>
              </div>
            </div>
          {{else}}
            <p>No Matches yet!</p>
            <h4 class="header col s12 light">Join organizations and match for a cup of Uncommon Joe.</h4>
            <h4 class="header col s12 light"><a href="/user/login">Log in</a> or sign up <a href="/user/signup">here</a>.</h4>
          {{/if}}

      </div>
    </div>
  </div>
  <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"></div>
</div>
