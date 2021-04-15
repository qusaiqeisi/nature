//console.log ('qusai')
alert('welcom to wadiram');

var wadiRum= prompt('please enter the camp name?!');

var wadiRum= prompt('please enter your time?!');

if(wadiRum >= 18){
  document.write('Good Evening');
  document.write('<img src="https://cf.bstatic.com/images/hotel/max1024x768/159/159016236.jpg">');
}else if(wadiRum >= 12){
  document.write('Good Afternoon');
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd1K_9Taf2Z4Wh95Hd8kfkXpigEQFFYBSUg&usqp=CAU">')
}else if (wadiRum >= 0){
  document.write('Good Morning');
  document.write('<img src="https://cf.bstatic.com/images/hotel/max1024x768/236/236994988.jpg">')
}
//while(wadiRam !== 'mars'&& wadiRam !== 'bedouin'){
  //wadiRam = prompt('Please enter the name mars or bedouin');
//}

//var userChoose;


//if(wadiRum === 'mars'){
//userChoose='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoak-JfCYdONQ2EiwN3xl3cGaeqvmjqEi4Zw&usqp=CAU">';
//}else if (wadiRum === 'bedouin'){
  userChoose='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw6YJR55FzWF2dDjgluO-ns4qyEi80RKDAA&usqp=CAU">';
//}
//document.writ(userChoose);

//var imagesNumber= prompt('How many image do you want???';

	for(var i=0 ; i < imagesNumber; i++){
	 document.write(userChoose);
	}

