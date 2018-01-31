function init() {
    function init() {
    var stage = new createjs.Stage("dolly");
    var circle = new createjs.Shape();
        circle.graphics.beginFill("Red").drawCircle(0, 0, 70);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        createjs.Tween.get(circle, { loop: true })
  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
  .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
  .to({ alpha: 0, y: 225 }, 100)
  .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
  .to({ x: 100 }, 800, createjs.Ease.getPowInOut(5));
  createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);
function loadImage() {
  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", handleFileComplete);
  preload.loadFile("resources/images/rocket.jpeg");
}
  function handleFileComplete(event) {
  document.body.appendChild(event.result);
}
  }
  }