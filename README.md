## Welcome To Kicky's Simpson MasterMind !

This is a classic code-breaking board game with the Simpsons theme in 90s arcade game style. Fun for friends and family to play with!

</br>

## Application Architecture

Built with React frontend using JavsScript language, deployed to Heroku.

</br>


## Technologies Used

### Frontend
* React
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

<h3 align="center"> Kicky's MasterMind  </h3>

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
        <li><a href="#code-structure">Code Structure</a></li>
      </ul>
      <ul>
        <li><a href="#thought-process">Thought Process</a></li>
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

Growing up in the 90s, as a huge fan of the Simpsons and all other arcade games, I would like to bring this board game in a more interative and immersive way for users to explore. It's a leisure simple game that you will never get bored with. 



**Key Features**

* Classic Simpsons theme with sounds and animations.
* Easy access to guideline.
* Donut Palette to choose the guess.
* Different challenge mode.
* Bart and Lisa pegs to guide the next guess.
* Arrows to indicate the current and left guesses. 
* Delete option and disabled submitting function for better user experience. (?)
* Timer to keep track of each game.


<p align="right">(<a href="#top">back to top</a>)</p>

</br>


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



**Key Features**

<p align="right">(<a href="#top">back to top</a>)</p>

</br>



**Key Features**

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

***

<br>



<!-- CONTACT -->
## Contact

Kicky Liu - [GitHub](https://github.com/kickylau)

Project Repo Link: [https://github.com/kickylau/kk-master-mind-game](https://github.com/kickylau/kk-master-mind-game)

Project Link: [https://mastermind-kk.herokuapp.com/](https://mastermind-kk.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
