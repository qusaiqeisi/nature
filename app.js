//console.log ('qusai')

var wadiRam= prompt('please enter the time now');

if(wadiRam >= 18){
  document.write('Good Evening');
  document.write('<img src="https://cf.bstatic.com/images/hotel/max1024x768/159/159016236.jpg">');
}else if(wadiRam >= 12){
  document.write('Good Afternoon');
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd1K_9Taf2Z4Wh95Hd8kfkXpigEQFFYBSUg&usqp=CAU">')
}else if (wadiRam >= 0){
  document.write('Good Morning');
  document.write('<img src="https://cf.bstatic.com/images/hotel/max1024x768/236/236994988.jpg">')
}