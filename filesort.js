
var sortObj = {

			typeMov: [],
			typeJpg: [],
			typeMp4: [],
			typeAvi: [],
			typePng: [],
			typeMpeg: [],
			typeGif: [],
		    files : ["pavans_first_birthday.mov",
						"owens_asleep_at_the_computer.jpg",
						"michael_fights_a_polar_bear.mp4",
						"nate_road_rage.avi",
						"ruby_skydiving.jpeg",
						"ken_getting_his_black_belt.png",
						"dan_winning_underground_street_race.mov",
						"its_hard_to_come_up_with_file_names.gif",
						"seriously_this_is_taking_too_long.mpeg",
						"i_wonder_how_many_of_these_i_should_have.png",
						"probably_a_few_more.avi",
						"nutmeg_is_clawing_my_sneakers_again.mp4",
						"cat_i_will_destroy_you.gif",
						"i_wish_we_had_a_dog.jpg",
						"stop_looking_at_me_like_that_nutmeg.mpeg",
						"aww_i_cant_hate_you.png",
						"omg_my_sneakers.avi",
						"cat_you_are_the_worst.mp4"
					],


			fileSorter: function(){

				for (var i = 0; i < sortObj.files.length; i++) {
					
					var stringArray = sortObj.files[i].split('.');
					var concatStr;
					console.log(stringArray);

					if(stringArray[1] == 'mp4'){
					concatStr = stringArray[0] + '.' + stringArray[1];
					this.typeMp4.push(concatStr);
					}
					else if(stringArray[1] == 'avi'){
					concatStr = stringArray[0] + '.' + stringArray[1];
					this.typeAvi.push(concatStr);
					}
					else if(stringArray[1] == 'png'){
					concatStr = stringArray[0] + '.' + stringArray[1];
					this.typePng.push(concatStr);
					}
					else if(stringArray[1] == 'mpeg'){
					concatStr = stringArray[0] + '.' + stringArray[1];
					this.typeMpeg.push(concatStr);
					}
					else if(stringArray[1] == 'gif'){
						concatStr = stringArray[0] + '.' + stringArray[1];
						this.typeGif.push(concatStr);
					}
					else if(stringArray[1] == 'mov'){
						concatStr = stringArray[0] + '.' + stringArray[1];
						this.typeMov.push(concatStr);
					}
					else if(stringArray[1] == 'jpg'){
					concatStr = stringArray[0] + '.' + stringArray[1];
					this.typeJpg.push(concatStr);
					}
					else{
						console.log('File didnt fit...')
					}
					}
				

			}








};

// file types: mov, jpg, mp4, avi, jpeg, mpeg
sortObj.fileSorter();

console.log('mov: ' + sortObj.typeMov);
console.log('gif: ' + sortObj.typeGif);
console.log('mpg: ' + sortObj.typeMpg);
console.log('png: ' + sortObj.typePng);
console.log('mp4: ' + sortObj.typeMp4);
console.log('avi: ' + sortObj.typeAvi);
console.log('jpg: ' + sortObj.typeJpg);
