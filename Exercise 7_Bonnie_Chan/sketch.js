var bacx = 140;
var bacy = 140;
var pana = 800;
var panb = 800;
var crackx = 300;
var cracky = 90;
var cartonx = 300;
var cartony = 400;
var raweggx = 600;
var raweggy = 570;
var cookbacx = 1300;
var cookbacy = 200;
var friedeggx = 700;
var friedeggy = 560;
var tablex = 1100;
var tabley = 100;
var platex = 1150;
var platey = 150;
var breadx = 200;
var bready = 270;
var toasterx = 250;
var toastery = 700;
var breadslicex = 250;
var breadslicey = 660;
var toastedx = 1500;
var toastedy = 260;

function preload() {
 rawbacon = loadImage("photo/Raw Bacon.png");
 fryingpan = loadImage("photo/Frying Pan.png");
 fridge = loadImage("photo/Fridge.png");
 crackedegg = loadImage("photo/Cracked Egg.png");
 eggcarton = loadImage("photo/Egg Carton.png");
 rawegg = loadImage("photo/Raw Egg.png");
 cookedbacon = loadImage("photo/Cooked Bacon.png");
 friedegg = loadImage("photo/Fried Egg.png");
 table = loadImage("photo/Table.jpg");
 plate = loadImage("photo/Plate.png");
 bread = loadImage("photo/Bread.png");
 toaster = loadImage("photo/Toaster.png");
 breadslice = loadImage("photo/Bread Slice.png");
 toasted = loadImage("photo/Toasted Bread.png");
}

function setup() {
 createCanvas(4000, 1500);
}

function draw() {
 var time = millis();
 background(255);

 image(table, tablex, tabley, 500, 500);
 image(table, tablex + 300, tabley, 500, 500);
 image(plate, platex, platey, 400, 400);
 image(fridge, 0, 0);
 image(bread, breadx, bready, 90, 90);
 image(eggcarton, cartonx - (eggcarton.width / 2), cartony - (eggcarton.height / 2), 110, 110);
 image(toaster, toasterx, toastery, 250, 220);
// text("Current second: \n" + time, 100, 100);


 //At the beginning, the raw bacon is sitting in the fridge and the pan is just sitting there
 if (time >= 0 && time <= 3000) {
  bacx = 140;
  bacy = 140;
  image(rawbacon, bacx, bacy); //bacx = 140 and bacy = 140
  image(fryingpan, pana - (fryingpan.width / 2), panb - (fryingpan.height / 2)); //pana = 800 and panb = 800
 }

 if (time >= 3000) {
  panb += 10;
  //  image(rawbacon, bacx, bacy);
  image(fryingpan, (pana - (fryingpan.width / 2)), panb - (fryingpan.height / 2));
  bacy += 7;

  // image(rawbacon,bacx - (rawbacon.width/2),bacy);
  console.log(bacy);
 }
 //If panb is greater than 1000 it will return to panb = 600
 if (panb >= 1000) {
  panb = 600;
  // bacy = 650;
  //If the pan leaves the window it will bounce back 
  if ((panb >= 1000) && (bacy >= 950)) {
   panb = -20;
   bacy = -7;
   // image(rawbacon, bacx, bacy);
  }
 }
 //After 9 seconds, the pan will return to its starting position and the cooked bacon will show up on the table
 if (time >= 8000) {
  panb = 800;
  image(cookedbacon, cookbacx, cookbacy, 100, 100);
 }
 //After 4 seconds, the bacon will move to bacx = 800 and bacy = 600
 if ((time >= 3000) && (time <= 8000)) {
  bacx = 700;
  bacy = 650;
  image(rawbacon, bacx, bacy);
  image(rawbacon, bacx, bacy + 50);
 }
 if (time >= 8000) {
  bacx = 140;
  bacy = 140;
  image(rawbacon, bacx, bacy);
 }
 //Second piece of bacon appears on plate
 if (time >= 8000) {
  panb = 800;
  image(cookedbacon, cookbacx, cookbacy, 100, 100);
  image(cookedbacon, cookbacx, cookbacy + 60, 100, 100);
 }

 if ((time >= 8000) && (time <= 9000)) {
  image(crackedegg, crackx, cracky);
 }
 if ((time >= 9000) && (time <= 13000)) {
  image(rawegg, raweggx, raweggy);
 }
 if ((time >= 13000) && (time <= 15000)) {
  image(friedegg, friedeggx, friedeggy, 200, 200);
 }
 if (time >= 15000) {
  image(friedegg, friedeggx + 600, friedeggy - 250, 150, 150);
 }
 if ((time >= 15000) && (time <= 17000)) {
  image(breadslice, breadslicex, breadslicey, 200, 200);
  image(toaster, toasterx, toastery, 250, 220);
 }

 if ((time >= 17000)) {
  image(toasted, toastedx, toastedy, 200, 200);
  toastedy = 300;
  image(toasted, toastedx, toastedy, 200, 200);
 }
 
 if ((time >= 17000) && (time <= 26000)){
  textSize(30);
  text("Time to make the sandwich!", 500, 100);
 }
 /*
 if (time >= 20000) {
  toastedx = 1500;
  toastedy = 110;
  image(toasted, toastedx, toastedy + 100, 200, 200);
}
*/
/*
//if ( time >= 25000){
 //toastedx = 1500;
 toastedy = 100;
 image(toasted, toastedx, toastedy, 200,200);
}
*/
  if (time >= 22000){
  cookbacx = 1550;
  cookbacy = 330;
  image(cookedbacon, cookbacx, cookbacy,100,100);
  image(cookedbacon, cookbacx, cookbacy + 60, 100,100);
 }
 
if (time >= 24000){
  friedeggx = 1550;
  friedeggy = 330;
  image(friedegg, friedeggx, friedeggy, 150,150);
}
if (time >= 25000){
  image(toasted, toastedx + 20, toastedy + 20, 200,200);

}
if ( time >= 26000){
 textSize(100);
 text("DONE!", 700,100);
}


}