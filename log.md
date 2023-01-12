1. download react starter app
2. splash + home page set up / front end

npm start
npm install
npm install react-router-dom --save
npm start

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from



<Route path="/" component={Home} />
to

<Route path='/' element={<Home/>} />
In react-router-dom, you also do not need to use the exact in the Route declaration.

https://www.moreonfew.com/attempted-import-error-switch-is-not-exported-from-react-router-dom/


1. Connect API to generate random 4 numbers

Bug1: SyntaxError: Unexpected non-whitespace character after JSON at position 2 - because its not json, its plain text - javascript fetch api plain text response
https://developer.mozilla.org/en-US/docs/Web/API/Response/text


bug2: useEffect runs infinite loop despite no change in dependencies - need [] empty array passed in as second paramater

“If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.”

Bug3 - react prevent useeffect running twice from running on mount — Something higher up the tree is unmounting and remounting -Remove <React.StrictMode> from index.js  - React StrictMode renders components twice on dev server

StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful). We can say StrictMode is a safety check to verify the component twice to detect an error.

The right question isn’t “how to run an Effect once”, but “how to fix my Effect so that it works after remounting”.

— sulotion - wrote clean up solution by using useRef - https://upmostly.com/tutorials/why-is-my-useeffect-hook-running-twice-in-react


Bug4: can not iterate the object[array] into the function- randomcode — how to access usestate property in react —>         let code = answer.randomCode


Bug5: how to show the result of guess?  ——  line 39&40   setAnswer(res)  return res


Bug6: how to pass in the color into number and saved into the states?  —
A div element doesn't have a value attribute, and so nothing can be passed through on the back of an event object for that particular click event.
 function addToGuess(color) {
        //console.log("curr guess initially", { guess })
        //console.log("choosing ", color)
        let num = colorMap[color]
        //console.log({guess})
        let newGuess = {guess}.guess.concat(num)
         //[2]
        setGuess(newGuess)
    }




Bug7: LRU to select most updated 4 colors
