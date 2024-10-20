<!-- let hiScore = Number(localStorage.getItem("hi-score"));
scoreDisplay.textContent = hiScore;

localStorage.setItem("hi-score", JSON.stringify(hiScore));

<h3>Hi-Score: <span id="hi-score"></span></h3> -->

This is a simple idling game based around making cookies.
The user is tasked with making as many cookies as possible; these cookies can be used to buy upgrades that will automatically increase the cookie-count every second.

Requirements:

- Used fetch to obtain upgrade data from the provided API, all of the upgrades from the API update the cookie count.
- Ensured functions have been used effectively to keep code organised and reusable.
- Implemented event listeners to handle user interactions with button clicks.
- Used local storage to save and restore the cookie count and cps.
- Used setInterval to increment the cookie count and manage the game state each second; this is the basic game logic.
- Managed the game state by saving the cookie count and cps to the local storage. Updated the DOM ('cpsDisplay' and 'scoreDisplay') to reflect the current game state.

Stretch tasks:

- Consolidated upgrade management by managing all upgrades in a single function ('upgradeLogic' function). This function was then called within the 'createUpgrades' function.

Challenges faced:

- Improving UX with animations, sound effects, or other visual effects.
- Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.
- Implementing error handling using try/catch.
- Creating a menu for users to adjust game options like sound effects or display preferences.
- I did not get to work on the stretch tasks within the time-frame.

Extra things I would like to add:

- A Reset button and a Hi-Score that saves the user's personal best to the local storage. This can be retrieved after resetting the cookie-count and cps with the reset button.
- A 'net' cookie-count that displays the total amount of cookies produced, not including cookies spent on upgrades. This can be used for the Hi-Score.

Deployment:

- Add, commit and push to GitHub.
- Go to GitHub project repo ->Settings ->Pages ->Build and Deployment ->Branch ->main. Save changes.
- https://[wnqifw28349].github.io/[SD0015]/week-3-cookie-clicker
