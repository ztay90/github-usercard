/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/ztay90`)
.then( (response) => {
  const newGithubCard = githubCard(response)
  cards.appendChild(newGithubCard)
})
.catch((err) => {
  console.log('error')
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

const cards = document.querySelector('.cards')

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach( (user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then( (response) => {
  const newFollower = githubCard(response)
  cards.appendChild(newFollower)
  })
  .catch((err) => {
  console.log('error')
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function githubCard(obj) {
  const gitCard = document.createElement('div')
  gitCard.classList.add('card')

  const imgUrl = document.createElement('img')
  imgUrl.src = obj.data.avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const h3Name = document.createElement('h3')
  h3Name.classList.add('name')
  h3Name.textContent= obj.data.name

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = obj.data.login

  const userLocation = document.createElement('p')
  userLocation.textContent = `Location: ${obj.data.location}`

  const profile = document.createElement('p')
  profile.textContent = 'Profile: '

  const profileLink = document.createElement('a')
  profileLink.href = obj.data.url
  profileLink.textContent = obj.data.url

  const userFollowers = document.createElement('p')
  userFollowers.textContent = `Followers: ${obj.data.followers}`

  const userFollowing = document.createElement('p')
  userFollowing.textContent = `Following: ${obj.data.following}`

  const userBio = document.createElement('p')
  userBio.textContent = `Bio: ${obj.data.bio}`

  gitCard.appendChild(imgUrl)
  gitCard.appendChild(cardInfo)
  cardInfo.appendChild(h3Name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  return gitCard
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
