import "./../css/output.css";
import { getUserDataByUserName, getUsersByUserName } from "./api";
import {
  generateUsersList,
  toggleLoader,
  renderFullName,
  renderUserAvatar,
  renderUserProfession,
  renderUserOrigin,
  renderUserRepos,
  renderUserFollowers,
  renderUserFollowing,
  renderUserId,
  renderJoinedDate,
  renderUserBio,
} from "./helpers";
// Steps
// 1 - Select Input
// 2 - Add EventListener on Input
// 3 - Get Value from input when user types anything

const userInput = document.getElementById("userInput");
const userList = document.getElementById("userList");
const userSearchForm = document.getElementById("userSearchForm");
const searchPage = document.getElementById("searchPage");

let isLoading = false;

const userData = [
  {
    login: "aastha2112",
    id: 138298132,
    node_id: "U_kgDOCD5DFA",
    avatar_url: "https://avatars.githubusercontent.com/u/138298132?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/aastha2112",
    html_url: "https://github.com/aastha2112",
    followers_url: "https://api.github.com/users/aastha2112/followers",
    following_url:
      "https://api.github.com/users/aastha2112/following{/other_user}",
    gists_url: "https://api.github.com/users/aastha2112/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/aastha2112/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/aastha2112/subscriptions",
    organizations_url: "https://api.github.com/users/aastha2112/orgs",
    repos_url: "https://api.github.com/users/aastha2112/repos",
    events_url: "https://api.github.com/users/aastha2112/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/aastha2112/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  },
];
function userProfile(userName) {
  isLoading = true;

  toggleLoader(isLoading);

  if (isLoading) {
    searchPage.classList.add("hidden");
  }

  getUserDataByUserName(userName).then((userData) => {
    isLoading = false;
    toggleLoader(isLoading);
    renderFullName(userData.name);
    renderUserAvatar(userData.avatar_url);
    renderUserProfession(userData.company);
    renderUserOrigin(userData.location);
    renderUserRepos(userData.public_repos);
    renderUserFollowers(userData.followers);
    renderUserFollowing(userData.following);
    renderUserId(userData.login);
    renderJoinedDate(userData.created_at);
    renderUserBio(userData.bio);
    console.log(userData);
  });
}

function fetchAndRenderSearchUsers(userName) {
  getUsersByUserName(userName).then((users) => {
    const topTenUsers = users.items.slice(0, 10);
    userList.innerHTML = generateUsersList(topTenUsers);
    const selectUserBtns = Array.from(
      document.getElementsByClassName("selectUser")
    );

    selectUserBtns.forEach((user) => {
      user.addEventListener("click", (name) => {
        const loginId = name.target.dataset.userName;
        userProfile(loginId);
      });
    });
  });
}

userInput.addEventListener("input", (event) => {
  const userName = event.target.value;
  fetchAndRenderSearchUsers(userName);
});

userSearchForm.addEventListener("submit", () => {
  const userName = userInput.value;

  userProfile(userName);
});
