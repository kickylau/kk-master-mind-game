1. download react starter app
2. front end: splash + home page set up
3. npm install
4. npm start
5. npm install react-router-dom --save

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to
import { Routes ,Route } from 'react-router-dom';

<Route path="/" component={Home} />
to

<Route path='/' element={<Home/>} />
In react-router-dom, you also do not need to use the exact in the Route declaration.

https://www.moreonfew.com/attempted-import-error-switch-is-not-exported-from-react-router-dom/

6. npm install use-sound

7. Autoplay Policy Changes no longer allow autoplay without user interaction first.

Muted autoplay is always allowed.
Autoplay with sound is allowed if:
User has interacted with the domain (click, tap, etc.).
On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
The user has added the site to their home screen on mobile or installed the PWA on desktop.
Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.
The only way to bypass this would be your mouse movement implementation

8. Connect API to generate random 4 numbers
