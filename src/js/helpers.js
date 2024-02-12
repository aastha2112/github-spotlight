export function generateUsersList(users) {
  return users
    .map((user) => {
      return `<li class="flex m-1 border-b-2 border-[#1e293b] p-2 rounded-sm">
    <button class=" selectUser flex-1 flex items-stretch" data-user-name='${user.login}'>
      <img class="h-16 w-16 rounded-full" src="${user.avatar_url}" alt="${user.login}" data-user-name='${user.login}'> 
      <p class="flex flex-1 items-center justify-left pl-6 text-2xl" data-user-name='${user.login}'>${user.login}</p>

    </button>
  </li>`;
    })
    .join("");
}

export function toggleLoader(state) {
  const loader = document.getElementById("loader");
  const userProfile = document.getElementById("userProfile");
  const searchPage = document.getElementById("searchPage");

  if (state) {
    loader.classList.remove("hidden");
    searchPage.classList.add("hidden");
  } else {
    loader.classList.add("hidden");
    userProfile.classList.remove("hidden");
  }
}

export function renderFullName(fullName) {
  const userFullName = document.getElementById("fullName");
  userFullName.textContent = fullName;
}

export function renderUserAvatar(source) {
  const userDP = document.getElementById("userAvatar");
  userDP.src = source;
}

export function renderUserProfession(company) {
  const profession = document.getElementById("userProfession");
  const userCompany = document.getElementById("userCompany");
  if (!company) {
    userCompany.classList.add("hidden");
  } else {
    profession.textContent = company;
  }
}

export function renderUserOrigin(location) {
  const userLocation = document.getElementById("userLocation");
  const userOrigin = document.getElementById("userOrigin");
  if (!location) {
    userOrigin.classList.add("hidden");
  } else {
    userLocation.textContent = location;
  }
}

export function renderUserRepos(totalRepos) {
  const userRepos = document.getElementById("userRepos");
  userRepos.textContent = totalRepos;
}

export function renderUserFollowers(totalFollowers) {
  const userFollowers = document.getElementById("userFollowers");
  userFollowers.textContent = totalFollowers;
}

export function renderUserFollowing(totalFollowing) {
  const userFollowing = document.getElementById("userFollowing");
  userFollowing.textContent = totalFollowing;
}

export function renderUserId(userID) {
  const userLogin = document.getElementById("userID");
  userLogin.textContent = `@${userID}`;
  userLogin.href = `https://github.com/${userID}`;
}

export function renderJoinedDate(date) {
  const joinDate = document.getElementById("joiningDate");
  const dateOfJoining = new Date(date);
  const joiningDate = dateOfJoining.toDateString().slice(4);

  joinDate.textContent = `Joined ${joiningDate}`;
}

export function renderUserBio(bio) {
  const userBio = document.getElementById("userBio");
  userBio.textContent = bio;
}
