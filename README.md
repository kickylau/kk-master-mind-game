## Welcome To Kicky's The Simpsons Mastermind!

This is a classic code-breaking board game with The Simpsons theme in a 90's arcade game style. Fun for friends and family to play with!

</br>

## Application Architecture

Built with the React frontend framework using JavaScript, and deployed onto Heroku for hosting.

</br>


## Technologies Used

### Frontend
* React.js
* JavaScript
* HTML
* CSS

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
   <a href="https://mastermind-kk.herokuapp.com/"> 
<img height="50" height="50" alt="logo" src="https://user-images.githubusercontent.com/94200416/213108684-2c6f743e-2f1b-42d3-ade8-ab2ed7ddd52a.png">
  </a>

<h3 align="center"> Kicky's Mastermind  </h3>

  <p align="center">
    <a href="https://mastermind-kk.herokuapp.com/"><strong>Explore the website »</strong></a>
  </p>
</div>

</br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
        <ul>
        <li><a href="#thought-process">Thought Process</a></li>
      </ul>
      <ul>
        <li><a href="#code-structure">Code Structure</a></li>
      </ul>
    </li>
   <li><a href="#usage">Usage</a></li>
   <li><a href="#extensions">Extensions</a></li>
      <ul>
        <li><a href="#implemented-extensions">Implemented Extensions</a></li>
      </ul>
      <ul>
        <li><a href="#attempted-extensions">Attempted Extensions</a></li>
      </ul>
    <li><a href="#contact">Requirements</a></li>
    <li><a href="#contact">Setup</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

</br>


<!-- ABOUT THE PROJECT -->
## About The Project

I grew up in the 90s as a huge fan of The Simpsons as well as arcade games. I wanted to bring this flavor to the Mastermind board game in an interative and immersive way for users to have fun. It's a simple game that you will never get bored with. 


<!-- Key Features -->
**Key Features**

* Classic The Simpsons theme with sound and animated components.
* Easy to read rules section.
* Donut Palette to guess the Mastermind code.
* Additional challenge modes for higher difficulty.
* Bart and Lisa pegs to represent when a guess has the correct position and color.
* Arrows to indicate the current turn and number of turns remaining. 
* Buttons to clear the code guess and disabled submitting a guess when there aren't enough donuts in the guess.
* Timer to keep track of the time elapsed for each game.


<p align="right">(<a href="#top">back to top</a>)</p>

</br>

<!-- Thought Process -->
**Thought Process**

Before starting this project, I actually never heard about the Mastermind game before. In order to better understand how it worked, I played many online Mastermind games to get hands-on experience and quickly familiarize myself. Whilst playing these various Mastermind versions, I observed some user interface elements that could be improved when developing my own version.

* Rules
   1. Rules are too complicated to understand which could create a barrier of entry for first-time users. 
   2. The rules section is not visible or convenient enough for users to review frequently, especially for a first-time player who doesn't remember the rules. Users have to keep flipping back and forth, scrolling down, or opening other pages to check them.

* Game Board Design 
   1. In terms of selecting pegs (or numbers) it's unclear whether users should click the empty row to fill the pegs, or to drag from the available peg board to the row, or to click the pegs to select them.
   2. In terms of re-selecting pegs, it was sometimes also unclear whether to re-select all over again or just a single one. Some of the designs have "delete" options which is a plus. 

* Overall Interface Design
   1. Most of the online Mastermind games follow a similar basic board structure with colored pegs and black/white pegs, with pretty basic and simple designs. The outside of the game board itself was often mostly plain text without too much user interaction. 


Therefore, a simple but interactive game that is friendly to first-time player, rules are well explained and easy to look up, eyecatching game interface design came up to my mind. 

Considering the scale and structure of the game, I decided to not use backend to store data or Redux to manage the state. This is a purely frontend application using React with JavaScript language. 

Growing up in 90s, I am still obsessed with arcade games in the malls. Also as a Simpsons fan, I decided to build this game in 90's Arcade Game style with The Simpsons theme. The game design captured the inspiration from every piece of the Simpsons - classic theme song as background music, blue sky as the animation background, an iconic Homer expression whenever users win or lose, donuts to represent colored pegs, and Bart and Lisa representing traditional black/white pegs. The fonts use a retro pixelated style, and there is a arcade game machine backdrop to wrap around the game board. Major color selections fit with the Simpsons theme colors of yellow, blue, red, green. 


<p align="right">(<a href="#top">back to top</a>)</p>

</br>


<!-- Code Structure -->
**Code Structure**

```
└── src
    ├── assets
    │   ├── audioAndVideo
    │   ├── fonts
    │   ├── img
    |
    ├── components
    |   ├── Game
    |       ├── Board
    |           ├── DonutBoard
    |           ├── Row
    |       ├── ChallengeMode
    |           ├── ChallengeMode.js
    |       ├── Controls
    |           ├── Guess
    |           ├── NewGame
    |       ├── Music
    |           ├── Music.js
    |       ├── ResultModal
    |           ├── ResultModal.js
    |       ├── Rules
    |           ├── Rules.js
    |       ├── Timer
    |           ├── Timer.js
    |       ├── Game.css
    |       ├── Game.js
    |
    |   │── SplashPage
    |       ├── SplashPage.css
    |       ├── SplashPage.js
    |
    |── App.js
    |── index.js

```

<p align="right">(<a href="#top">back to top</a>)</p>

</br>


<!-- USAGE EXAMPLES -->
## Usage


* User is directed to the splash page where they can enter the game through the title, logo, and "Enter Game" button. 
<img alt="enter-game" src="https://user-images.githubusercontent.com/94200416/213113062-f1891603-433a-4cba-8f09-a0a7ec3fbd66.gif">

</br>


* Once entered, user is directed to the main game page. User can click the "RULES" button to check out the rules.
<img alt="rules" src="https://user-images.githubusercontent.com/94200416/213113883-480c48b5-f4ea-4520-91e6-9267d76da9a3.gif">

</br>


* User can select 3 different challenge modes with the "LEVEL" button.
<img alt="rules" src="https://user-images.githubusercontent.com/94200416/213116397-dda47b02-ac09-451d-9b4b-fef9b2d126be.gif">

</br>


* User can start the game by choosing colored donuts from the palette on the left side of the arcade game container. Once the game starts, the timer also starts counting. Bart and Lisa peg(s) reveal information on how many donuts are in the correct position and/or color.
<img alt="mode" src="https://user-images.githubusercontent.com/94200416/213115147-c2ca84ae-cdd9-4677-aca9-1dc61a3f1cd9.gif">

</br>


* User can also clear the current guess by clicking the red "X" button.
<img alt="clear" src="https://user-images.githubusercontent.com/94200416/213116745-dd2887ab-ee51-42d2-9d4c-89c03961a617.gif">

</br>


* After winning or losing the game, a Simpsons sound and animation effect appears with correct donut result.
<img alt="win" src="https://user-images.githubusercontent.com/94200416/213117236-9b395811-7e81-419b-ba44-ceb8153af38b.gif">
<img alt="lose" src="https://user-images.githubusercontent.com/94200416/213117538-1734ea0b-28b4-44c3-b97c-ce647821ac88.gif">

</br>


* Background theme music auto plays once the game has started, and user can choose to "Pause" or "Stop" the music.
<img alt="music" src="https://user-images.githubusercontent.com/94200416/213117834-e0db697d-1a2a-41e2-be79-6d83f15e9d3d.gif">

</br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Extensions -->
**Extensions**

* Implemented Extensions 
   1. A "difficulty level" with three modes - "Easy" with 4 donuts, "Medum" with 5 donuts, and "Hard" with 6 donuts.
   2. Graphical components are enhanced with animations, sounds, hover effects, and consistent theming styles. 
   3. Numbers/Pegs are changed into distinct colorful donuts.
   4. A timer for the time elapsed in each game. 
   5. A "Rules" pop-up modal that is convenient for first-time players to access. 
   6. A music player with controls for users to play/pause/stop the music. 
   7. A "delete" option when users need to re-select the current donut guess.
   8. A disabled guess submission button when users did not fill out the entire donut guess row.
   9. A splash page.


* Future TODO Extensions
   1. Ability to pick a character amongst The Simpsons family to start the game.
   2. Way to calculate the final game score. 
   3. Public Leaderboard rankings with the player's name and score that is powered by Google Firebase in the backend.
   4. Multiplayer mode instead of one player vs. computer.
   5. Support to reveal hints to the player.
   6. A.I computer auto play to help with guesses.


</br>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Requirements -->
## Requirements

* node ^16.0.0
* npm ^8.0.0

</br>

<!-- Setup -->
## Setup
1. Clone this repository (only this branch)

```bash
git clone https://github.com/kickylau/kk-master-mind-game.git
```

2. Install dependencies
```bash
npm install
```

3. Running the Project
```bash
npm start
```

4. Open Local Host 3000 in the browser
```bash
http://localhost:3000/
```

***

<br>



<!-- CONTACT -->
## Contact

Kicky Liu - [GitHub](https://github.com/kickylau)

Project Repo Link: [https://github.com/kickylau/kk-master-mind-game](https://github.com/kickylau/kk-master-mind-game)

Project Link: [https://mastermind-kk.herokuapp.com/](https://mastermind-kk.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
