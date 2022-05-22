# photo-tagging

[LIVE DEMO](https://photo-tagging-36de1.web.app)

<h3>Project Details:</h3>
<p>This project is a part of the Full Stack JavaScript path of The Odin Project's curriculum.</p>
<p>The objective of this project was to learn how to use Firebase as a backend provider.</p>
<p>For this project, I have opted to use only the hosting/Firestore database services. This was more than enough to achieve the goal I had in mind, which was to prevent players from being able to find information on the client about the locations of "subimages" within the document. Currently it is more of a "Where's Waldo" app than a photo tagging app, but the data is structured in such a way that it can easily be adapted to any image with "subimages" users can find.</p>
<p>In addition, I opted to write this app in vanilla JS as I had just finished working with React quite a lot and I wanted to shake off the rust of working with vanilla DOM manipulation.</p>

<h3>Feature List:</h3>
- Read-only database file for coordinate validation against user "map" clicks<br>
- Write-protected database file for leaderboard entries - not perfect, but good enough for now<br>
- Versatile API that can be adapted to any kind of "map" where users are intended to find things at specific x/y coordinates<br>
- Testing/setup module that shows a visual representation of the clickable area, allowing for rapid development of new "maps"<br>

<h3>Created With:</h3>
Vanilla JavaScript (ES6)<br>
Webpack<br>
Firebase Firestore<br>
Firebase Hosting<br>

