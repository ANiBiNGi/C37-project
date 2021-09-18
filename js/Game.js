class Game {
  constructor(){
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
play(){
  form.hide()
  text("Game Starts", 100, 100)
  Player.getplayerinfo() 
if(allPlayers !== undefined){
  var index = 0;
  var x = 0;
  var y;
  for(var plr in allPlayers){
    index = index + 1;
    x = x + 200;
    y = displayHeight - allPlayers[plr].distance;
    cars[index - 1].x = x;
    cars[index - 1].y = y;
    if(index === player.index){
      //cars[index].shapeColor = "red";
      camera.position.x = displayWidth/2
      camera.position.y = cars[index -1].y
    }
  }
}

if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance = player.distance + 50;
player.update();
}
drawSprites();

}
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200,40,40)
    car2 = createSprite(300,200,40,40)
    car3 = createSprite(500,200,40,40)
    car4 = createSprite(700,200,40,40)
    cars = [car1,car2,car3,car4]
    
  }
}