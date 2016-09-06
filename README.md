# Game engine built with three.js that parses JSON files to set up scenes.
# Sprint1
Expansion of game engine built with Three.js. Implements additional light sources and materials.

<h2 id="sprint-1-lights-and-basic-materials"><a name="user-content-sprint-1-lights-and-basic-materials" href="#sprint-1-lights-and-basic-materials" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Sprint 1: Lights and Basic Materials</h2>
<h4 id="cs-4183-video-game-design-cs-4143-dr-david-cline"><a name="user-content-cs-4183-video-game-design-cs-4143-dr-david-cline" href="#cs-4183-video-game-design-cs-4143-dr-david-cline" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>CS 4183 : Video Game Design (CS 4143) <br/> Dr. David Cline</h4>
<p>Three.js has a number of light sources and materials that allow you to specify light sources and surface properties of objects in the scene.  In this sprint, you will extend the base game engine to load and render a more extensive set of light sources and object properties specified in an input file. This will involve adding functionality to the parser in the engine code. </p>
<hr />
<h4 id="sprint-backlog-item-1-light-sources"><a name="user-content-sprint-backlog-item-1-light-sources" href="#sprint-backlog-item-1-light-sources" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Sprint Backlog Item 1 - Light sources</h4>
<ul>
<li>
<p>Implement parser functions to create different kinds of lights.  Use the code from the parser that loads directional lights as an example.  Your code must be able to load the following kinds of lights, along with their supporting properties:</p>
<ul>
<li>Ambient lights</li>
<li>Point lights</li>
<li>Hemisphere lights</li>
<li>Spot lights</li>
</ul>
</li>
<li>
<p>Make sure that your engine can load the example files related to each of these light types. </p>
</li>
<li>
<p>Hint: typically, you would add a function for each of the light types, and also add code in parseSceneNode to call those functions. </p>
</li>
</ul>
<hr />
<h4 id="sprint-backlog-item-3-material-types"><a name="user-content-sprint-backlog-item-3-material-types" href="#sprint-backlog-item-3-material-types" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Sprint Backlog Item 3 - Material types</h4>
<ul>
<li>
<p>As released, the parser only supports MeshLambertMaterial.  Implement parser functions to load and render different kinds of materials.  In particular, you should be able to load the following materials:</p>
<ul>
<li>MeshBasicMaterial</li>
<li>MeshPhongMaterial</li>
</ul>
</li>
<li>
<p>Make sure that your engine can load the example files related to the materials.</p>
</li>
</ul>
<hr />
<h4 id="sprint-backlog-item-4-new-scenes"><a name="user-content-sprint-backlog-item-4-new-scenes" href="#sprint-backlog-item-4-new-scenes" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Sprint Backlog Item 4 - New Scenes</h4>
<ul>
<li>
<p>Make a scene or scenes that demonstrate the new capabilities of the engine, including lights and both new types of materials.</p>
</li>
<li>
<p>One of the scenes must animate the scene in some way using a script.</p>
</li>
</ul>
<hr />
<h4 id="sprint-backlog-item-5-web-deployment-and-handin"><a name="user-content-sprint-backlog-item-5-web-deployment-and-handin" href="#sprint-backlog-item-5-web-deployment-and-handin" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Sprint Backlog Item 5 - Web Deployment and Handin</h4>
<ul>
<li>
<p>Get your latest engine install working from a web server, such as CSX.</p>
</li>
<li>
<p>Demonstrate your scenes to the instructor, running from this web server.</p>
</li>
<li>
<p>Zip up your sprint files (code and scenes) into a single .zip file (not .rar!) and turn it in to D2L.</p>
</li>
</ul>
<hr />
<h4 id="grade-breakdown"><a name="user-content-grade-breakdown" href="#grade-breakdown" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Grade Breakdown</h4>
<ul>
<li>
<p>Getting the example scenes running in your engine: 40%</p>
</li>
<li>
<p>Making animated input scene: 35%</p>
</li>
<li>
<p>Deploying your solution so it is web accessible: 25%</p>
</li>
</ul>
<hr />
<h4 id="hints"><a name="user-content-hints" href="#hints" class="headeranchor-link" aria-hidden="true"><span class="headeranchor"></span></a>Hints</h4>
<ul>
<li>
<p>Have fun, and think creatively.</p>
</li>
<li>
<p>Use the example scenes as a guide, or a starting point.</p>
</li>
<li>
<p>Remember that if a scene is not working, it could be the input file or the engine code.</p>
</li>
<li>
<p>Any time you make even a small change, test it. It is much easier to debug 1 small change 50 times than 100 changes once, especially in JSON and Javascript.</p>
</li>
<li>
<p>As always, if you get stuck or have questions, consult with the instructor.</p>
</li>
</ul></article></body></html>