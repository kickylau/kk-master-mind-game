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
   1. Most of the online Mastermind games follow a similar basic board structure with colored pegs and black/white pegs. The game board size is as big as an iPhone screen with simple design. Outside of the game board is almost plain text without too much user interactions. 


Therefore, a simple but interactive game that is friendly to first-time player, rules are well explained and easy to look up, eyecatching game interface design came up to my mind. 

Considering the scale and structure of the game, I decided to not use backend to store data or Redux to manage the states. This is a pure frontend using React with JavaScript language. 

Growing up in 90s, I am still obsessed with arcade games in the malls. Also as a Simpsons fan, I decided to build this game in 90s Arcade Game style with the Simpsons theme. The game design captured the inspiration from every pieces of the Simpsons - classic theme song as background music, blue sky as animation background, iconic Homer expression whenever users win or lose, donuts to represent colored pegs, Bart and Lisa representing traditional black/white pegs. The fonts are using pixel style, as well as the arcade game machine to wrap the game board. Major color selections are Simpsons yellow, blue, red, green. 


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


* User would be brought to the splash page where user can enter through title, logo and "Enter Game" button. 
<img alt="enter-game" src="https://user-images.githubusercontent.com/94200416/213113062-f1891603-433a-4cba-8f09-a0a7ec3fbd66.gif">

</br>


* Once entered, user would be directed to the main game page. User can click the "Rules" button to checkout the rules.
<img alt="rules" src="https://user-images.githubusercontent.com/94200416/213113883-480c48b5-f4ea-4520-91e6-9267d76da9a3.gif">

</br>


* User can select 3 different challenge mode with the "Level" button.
<img alt="rules" src="https://user-images.githubusercontent.com/94200416/213116397-dda47b02-ac09-451d-9b4b-fef9b2d126be.gif">

</br>


* User can start the game by choosing colored donut palette on the left side of the arcade game container. Once game started, the timer would start counting. Bart and Lisa peg(s) would guide user's next guess during the game.
<img alt="mode" src="https://user-images.githubusercontent.com/94200416/213115147-c2ca84ae-cdd9-4677-aca9-1dc61a3f1cd9.gif">

</br>


* User can also clear the current guess by clicking the "Delete" button.
<img alt="clear" src="https://user-images.githubusercontent.com/94200416/213116745-dd2887ab-ee51-42d2-9d4c-89c03961a617.gif">

</br>


* A Simpson sound and animation effect with the donut result would show up after the win and lose.
<img alt="win" src="https://user-images.githubusercontent.com/94200416/213117236-9b395811-7e81-419b-ba44-ceb8153af38b.gif">
<img alt="lose" src="https://user-images.githubusercontent.com/94200416/213117538-1734ea0b-28b4-44c3-b97c-ce647821ac88.gif">

</br>


* Background theme music will auto play once game started, user can choose "Pause" or "Stop".
<img alt="music" src="https://user-images.githubusercontent.com/94200416/213117834-e0db697d-1a2a-41e2-be79-6d83f15e9d3d.gif">

</br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Extensions -->
**Extensions**

* Implemented Extensions 
   1. A "difficulty level" with three modes - "Easy" with 4 donuts, "Medum" with 5 and "Hard" with 6.
   2. All graphical components are added with animations, sounds, hover effects, and consistent style. 
   3. Numbers/Pegs are changed into distinct colorful donuts.
   4. A timer for the entire game. 
   5. A "Rules" pop-up modal that is convinient for first-time player to reach. 
   6. A music player for users to play/pause/stop. 
   7. A "delete" option when users need to re-select the current guess.
   8. A disabled submit function when users did not fill the entire row.  
   9. A splash page. 


* Attempted Extension ? Future? 
   1. Able to pick a player among the Simpsons family to start the game.
   2. Scores calculation and accumulation for each game. 
   3. Public Leaderboard with players own name and scores that is powered by google firebase.
   4. Multi players instead of one player vs. computer. 
   5. A.I computer auto play (?)
   6. Support to give hints. 


</br>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Requirements -->
## Requirements

* node ^15.0.0
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
