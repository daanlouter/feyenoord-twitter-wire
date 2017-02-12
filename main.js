var Twitter = require('twitter');
var fs = require('fs');
var accounts = ['Clasie_Official','miquelnelom', 'VilhenaTonny', 'AchahbarAnass', 'ImmersLex', 'kennethvermeer1', 'mattssteen', 'Feyenoord', 'Kuyt', 'jenstoornstra', 'colin_kazim08', 'Bilaaaaaall7', 'Rodnylc', 'JoeySleegers', 'WDammers', 'svenvanbeek16', 'LucasWoudenberg', 'RubenSchaken', 'The_real_Gio']; 

var client = new Twitter({
  consumer_key: 'fSPVnEwrKkbPRqW4kWyXUQIOs',
  consumer_secret: 'z64Dc7ITzHTbhsVlk6X0cTOwdUnYEdsK7qYiV5xtkFZoMhvxKf',
  access_token_key: '14869848-hO7uVS8PWqOTAcCE2eEGggFMahX8pcPDnxO9ekQhd',
  access_token_secret: 'MBDDtLcXSwbcXxeX0Ll3LkOUPIrlpAWBRnVBnx6jeLi4K'
});

var data = [];
var z = 0;
var query = 'guardian.co.uk/world/interactive/2013/may/26/firestorm-bushfire-dunalley-holmes-family';


function getTweets(currentId){
	var params = {
		screen_name: accounts[currentId],
		count: 200,
		skip_status: true
	};
	client.get('friends/list', params, function(error, tweets, response){
		console.log(error);
	  if (!error) {

	  	data.push({
	  		player: accounts[currentId],
	  		friends: tweets
	  	})
	  }
	});
	// console.log(currentId);
	if(currentId < accounts.length){
		getTweets(currentId + 1);
	}else{
		fs.writeFile('data.json',data)
	}
}

getTweets(0);