/**
 * Created by Jacob on 9/12/16.
 */
function rotateScript(sceneNode)
{
    // Constants
    // var rotationSpeed = sceneNode.userData["rotationSpeed"];
    // var frameRate = 60.0;
    // sceneNode.rotateOnAxis(YAXIS, rotationSpeed/frameRate);
}
function mouseMoveEvent(mouseX, mouseY) {
    var yRotation = ((mouseX-window.innerWidth/2)/(window.innerWidth/2))*90;
    var xRotation = ((mouseY-window.innerHeight/2)/(window.innerHeight/2))*90;
    var eye = currentScene.children[3];
    eye.rotation.y = degree2rad(yRotation);
    eye.rotation.x = degree2rad(xRotation);
}
function touchMoveEvent(xPos, yPos){
    var yRotation = ((xPos-window.innerWidth/2)/(window.innerWidth/2))*90;
    var xRotation = ((yPos-window.innerHeight/2)/(window.innerHeight/2))*90;
    var eye = currentScene.children[3];
    eye.rotation.y = degree2rad(yRotation);
    eye.rotation.x = degree2rad(xRotation);
}
function degree2rad(degree){
    return degree*(Math.PI/180);
}