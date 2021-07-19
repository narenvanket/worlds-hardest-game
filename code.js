var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1=createSprite(200,150,200,10)
var wall2=createSprite(200,300,200,10)
var wall3=createSprite(100,175,10,50)
var wall4=createSprite(100,275,10,50)
var wall5=createSprite(300,175,10,50)
var wall6=createSprite(300,275,10,50)
var wall7=createSprite(325,250,50,10)
var wall8=createSprite(325,200,50,10)
var wall9=createSprite(75,200,50,10)
var wall10=createSprite(75,250,50,10)
var wall11=createSprite(345,225,10,50)
var wall12=createSprite(45,225,10,50 )
var ding=createSprite(70,225,20,20)
var dong1=createSprite(125,275,20,20)
var dong2=createSprite(175,175,20,20)
var dong3=createSprite(225,275,20,20)
var dong4=createSprite(275,175,20,20)
dong1.shapeColor="brown"
dong2.shapeColor="brown"
dong3.shapeColor="brown"
dong4.shapeColor="brown"
ding.shapeColor="green"
dong1.setVelocity(0,-5)
dong2.setVelocity(0,5)
dong3.setVelocity(0,-5)
dong4.setVelocity(0,5)
var death=0

playSound( "assets/category_background/jazzy_beats.mp3",true)
function draw() {
   background("yellow")
   
   textSize(25)
   text("Death="+death ,240,115)
   dong1.bounceOff(wall1)
   dong1.bounceOff(wall2)
   dong2.bounceOff(wall1)
   dong2.bounceOff(wall2)
   dong3.bounceOff(wall1)
   dong3.bounceOff(wall2)
   dong4.bounceOff(wall1)
   dong4.bounceOff(wall2)
   if (keyDown(RIGHT)){
     ding.x=ding.x+2
   }
   if (keyDown("left")){
     ding.x=ding.x-2
   }
   if (ding.isTouching(dong1)||ding.isTouching(dong2)||ding.isTouching(dong3)||
   ding.isTouching(dong4)||ding.isTouching(wall11)||ding.isTouching(wall12)){
  ding.x=75;
  ding.y=225;
  death=death+1;
   }
   drawSprites();
   
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
