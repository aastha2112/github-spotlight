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
const backBtn = document.getElementById("backBtn");

let isLoading = false;

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
  });
}

function fetchAndRenderSearchUsers(userName) {
  if (!userName) {
    return;
  }
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

let currentIndex = null;
document.addEventListener("keydown", (event) => {
  const selectUserBtns = Array.from(
    document.getElementsByClassName("selectUser")
  );

  if (event.key === "ArrowUp") {
    if (!currentIndex || currentIndex === 0) {
      currentIndex = selectUserBtns.length - 1;
    } else {
      currentIndex -= 1;
    }
    if (selectUserBtns.length > 0) {
      selectUserBtns[currentIndex].focus();
    }
  } else if (event.key === "ArrowDown") {
    if (currentIndex === null || currentIndex === selectUserBtns.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }

    if (selectUserBtns.length > 0) {
      selectUserBtns[currentIndex].focus();
    }
  }
});
