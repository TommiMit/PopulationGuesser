var nations_list = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia',
                    'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
                    'Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
                    'Ivory Coast','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China',
                    'Colombia','Comoros','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
                    'Dominican Republic','North Korea','Democratic Republic of the Congo','Ecuador','Egypt','El Salvador',
                    'Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia',
                    'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti',
                    'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel',
                    'Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia',
                    'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia',
                    'Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova',
                    'Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
                    'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama',
                    'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia',
                    'Rwanda','Saint Kitts and Nevis','Saint Lucia','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia',
                    'Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
                    'South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Vincent Grenadines','Palestine','Sudan',
                    'Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tonga',
                    'Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','UAE','UK','USA','Uganda','Ukraine',
                    'Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];
var nations_list_shuffle = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia',
                            'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
                            'Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
                            'Ivory Coast','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China',
                            'Colombia','Comoros','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica',
                            'Dominican Republic','North Korea','Democratic Republic of the Congo','Ecuador','Egypt','El Salvador',
                            'Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia',
                            'Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti',
                            'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel',
                            'Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia',
                            'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia',
                            'Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova',
                            'Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands',
                            'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama',
                            'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia',
                            'Rwanda','Saint Kitts and Nevis','Saint Lucia','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia',
                            'Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
                            'South Africa','South Korea','South Sudan','Spain','Sri Lanka','St Vincent Grenadines','Palestine','Sudan',
                            'Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tonga',
                            'Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','UAE','UK','USA','Uganda','Ukraine',
                            'Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];

var nation_dict = {'Afghanistan': '38928346', 'Albania': '2877797', 'Algeria': '43851044', 'Andorra': '77265', 'Angola': '32866272',
'Antigua and Barbuda': '97929', 'Argentina': '45195774', 'Armenia': '2963243', 'Australia': '25499884', 'Austria': '9006398',
'Azerbaijan': '10139177', 'Bahamas': '393244', 'Bahrain': '1701575', 'Bangladesh': '164689383', 'Barbados': '287375', 'Belarus': '9449323',
'Belgium': '11589623', 'Belize': '397628', 'Benin': '12123200', 'Bhutan': '771608', 'Bolivia': '11673021', 'Bosnia and Herzegovina': '3280819',
'Botswana': '2351627', 'Brazil': '212559417', 'Brunei': '437479', 'Bulgaria': '6948445', 'Burkina Faso': '20903273', 'Burundi': '11890784',
'Ivory Coast': '26378274', 'Cabo Verde': '555987', 'Cambodia': '16718965', 'Cameroon': '26545863', 'Canada': '37742154', 'Central African Republic': '4829767',
'Chad': '16425864', 'Chile': '19116201', 'China': '1439323776', 'Colombia': '50882891', 'Comoros': '869601', 'Costa Rica': '5094118',
'Croatia': '4105267', 'Cuba': '11326616', 'Cyprus': '1207359', 'Czech Republic': '10708981', 'Denmark': '5792202', 'Djibouti': '988000', 'Dominica': '71986',
'Dominican Republic': '10847910', 'North Korea': '25778816', 'Democratic Republic of the Congo': '89561403', 'Ecuador': '17643054', 'Egypt': '102334404', 'El Salvador': '6486205',
'Equatorial Guinea': '1402985', 'Eritrea': '3546421', 'Estonia': '1326535', 'Eswatini': '1160164', 'Ethiopia': '114963588', 'Fiji': '896445',
'Finland': '5540720', 'France': '65273511', 'Gabon': '2225734', 'The Gambia': '2416668', 'Georgia': '3989167', 'Germany': '83783942', 'Ghana': '31072940',
'Greece': '10423054', 'Grenada': '112523', 'Guatemala': '17915568', 'Guinea': '13132795', 'Guinea Bissau': '1968001', 'Guyana': '786552', 'Haiti': '11402528',
'Honduras': '9904607', 'Hungary': '9660351', 'Iceland': '341243', 'India': '1380004385', 'Indonesia': '273523615', 'Iran': '83992949',
'Iraq': '40222493', 'Ireland': '4937786', 'Israel': '8655535', 'Italy': '60461826', 'Jamaica': '2961167', 'Japan': '126476461',
'Jordan': '10203134', 'Kazakhstan': '18776707', 'Kenya': '53771296', 'Kiribati': '119449', 'Kuwait': '4270571', 'Kyrgyzstan': '6524195',
'Laos': '7275560', 'Latvia': '1886198', 'Lebanon': '6825445', 'Lesotho': '2142249', 'Liberia': '5057681', 'Libya': '6871292',
'Liechtenstein': '38128', 'Lithuania': '2722289', 'Luxembourg': '625978', 'Madagascar': '27691018', 'Malawi': '19129952',
'Malaysia': '32365999', 'Maldives': '540544', 'Mali': '20250833', 'Malta': '441543', 'Marshall Islands': '59190', 'Mauritania': '4649658',
'Mauritius': '1271768', 'Mexico': '128932753', 'Micronesia': '548914', 'Moldova': '4033963', 'Monaco': '39242', 'Mongolia': '3278290',
'Montenegro': '628066', 'Morocco': '36910560', 'Mozambique': '31255435', 'Myanmar': '54409800', 'Namibia': '2540905', 'Nauru': '10824',
'Nepal': '29136808', 'Netherlands': '17134872', 'New Zealand': '4822233', 'Nicaragua': '6624554', 'Niger': '24206644', 'Nigeria': '206139589',
'North Macedonia': '2083374', 'Norway': '5421241', 'Oman': '5106626', 'Pakistan': '220892340', 'Palau': '18094', 'Panama': '4314767',
'Papua New Guinea': '8947024', 'Paraguay': '7132538', 'Peru': '32971854', 'Philippines': '109581078', 'Poland': '37846611',
'Portugal': '10196709', 'Qatar': '2881053', 'Romania': '19237691', 'Russia': '145934462', 'Rwanda': '12952218', 'Saint Kitts and Nevis': '53199', 'Saint Lucia': '183627',
'Samoa': '198414', 'San Marino': '33931', 'Sao Tome and Principe': '219159', 'Saudi Arabia': '34813871', 'Senegal': '16743927', 'Serbia': '8737371', 'Seychelles': '98347',
'Sierra Leone': '7976983', 'Singapore': '5850342', 'Slovakia': '5459642', 'Slovenia': '2078938', 'Solomon Islands': '686884',
'Somalia': '15893222', 'South Africa': '59308690', 'South Korea': '51269185', 'South Sudan': '11193725', 'Spain': '46754778',
'Sri Lanka': '21413249', 'St Vincent Grenadines': '110940', 'Palestine': '5101414', 'Sudan': '43849260', 'Suriname': '586632', 'Sweden': '10099265', 'Switzerland': '8654622', 'Syria': '17500658',
'Tajikistan': '9537645', 'Tanzania': '59734218', 'Thailand': '69799978', 'Timor Leste': '1318445', 'Togo': '8278724', 'Tonga': '105695', 'Trinidad and Tobago': '1399488',
'Tunisia': '11818619', 'Turkey': '84339067', 'Turkmenistan': '6031200', 'Tuvalu': '11792', 'UAE': '9890402', 'UK': '67886011', 'USA': '331002651', 'Uganda': '45741007', 'Ukraine': '43733762',
'Uruguay': '3473730', 'Uzbekistan': '33469203', 'Vanuatu': '307145', 'Vatican City': '825 ', 'Venezuela': '28435940', 'Vietnam': '97338579', 'Yemen': '29825964',
'Zambia': '18383955', 'Zimbabwe': '14862924'}


var fail = new Audio("fail.wav"); // buffers automatically when created
var nations_list_shuffle;
var i = 0;
var score = 0;
var highscore = 0;
var dict = {};
var flag = 0;

function avvio(){

    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("highScore").innerHTML = "Highscore: " + highscore;
    let flagL = document.getElementById("flagL");
    nations_list_shuffle = shuffle(nations_list_shuffle);
    let first = nations_list_shuffle[0];
    flagL.innerHTML = first;
    document.getElementById('flagImgL').style.backgroundImage = 'url("flags/' + first + '.jpg")';
    document.getElementById('flagInfoL').innerHTML = "("+Math.floor(nation_dict[first]).toLocaleString('en-US')+")";
    

    let flagR = document.getElementById("flagR");
    let second = nations_list_shuffle[1];
    flagR.innerHTML = second;
    document.getElementById('flagImgR').style.backgroundImage = 'url("flags/' + second + '.jpg")';
    
}

function lower(){
     let first = nations_list_shuffle[i];
     let second = nations_list_shuffle[i+1];
     console.log("lower");
     console.log(Math.floor(nation_dict[first]));
     console.log(Math.floor(nation_dict[second]));
     if (Math.floor(nation_dict[first]) > Math.floor(nation_dict[second])){
        succ = new Audio("succ.wav"); // buffers automatically when created
        succ.play();
        score += 1;
        document.getElementById("score").innerHTML = "Score: " + score;
        i += 1;
        let first = nations_list_shuffle[i];
        flagL.innerHTML = first;
        document.getElementById('flagImgL').style.backgroundImage = 'url("flags/' + first + '.jpg")';
        document.getElementById('flagInfoL').innerHTML = "("+Math.floor(nation_dict[first]).toLocaleString('en-US')+")";

        let flagR = document.getElementById("flagR");
        let second = nations_list_shuffle[i+1];
        flagR.innerHTML = second;
        document.getElementById('flagImgR').style.backgroundImage = 'url("flags/' + second + '.jpg")';
     } else {
        fail = new Audio("fail.wav"); // buffers automatically when created
        fail.play();
        if (score > highscore) {
            highscore = score;
		}
        document.getElementById("highScore").innerHTML = "Highscore: " + highscore;

        console.log("a");
        nations_list_shuffle = shuffle(nations_list_shuffle);
        i = 0;
        score = 0;
        document.getElementById("score").innerHTML = "Score: " + score;

        let first = nations_list_shuffle[i];
        flagL.innerHTML = first;
        document.getElementById('flagImgL').style.backgroundImage = 'url("flags/' + first + '.jpg")';
        document.getElementById('flagInfoL').innerHTML = "("+Math.floor(nation_dict[first]).toLocaleString('en-US')+")";

        let flagR = document.getElementById("flagR");
        let second = nations_list_shuffle[i+1];
        flagR.innerHTML = second;
        document.getElementById('flagImgR').style.backgroundImage = 'url("flags/' + second + '.jpg")';
     }

}

function higher(){
     let first = nations_list_shuffle[i];
     let second = nations_list_shuffle[i+1];
     console.log("higher");
     if (Math.floor(nation_dict[first]) < Math.floor(nation_dict[second])){
        
        succ = new Audio("succ.wav"); // buffers automatically when created
        succ.play();
        score += 1;
        document.getElementById("score").innerHTML = "Score: " + score;
        i += 1;
        let first = nations_list_shuffle[i];
        flagL.innerHTML = first;
        document.getElementById('flagImgL').style.backgroundImage = 'url("flags/' + first + '.jpg")';
        document.getElementById('flagInfoL').innerHTML = "("+Math.floor(nation_dict[first]).toLocaleString('en-US')+")";

        let flagR = document.getElementById("flagR");
        let second = nations_list_shuffle[i+1];
        flagR.innerHTML = second;
        document.getElementById('flagImgR').style.backgroundImage = 'url("flags/' + second + '.jpg")';
     } else {
        fail = new Audio("fail.wav"); // buffers automatically when created
        fail.play();
        if (score > highscore) {
            highscore = score;
		}
        document.getElementById("highScore").innerHTML = "Highscore: " + highscore;

        console.log("a");
        nations_list_shuffle = shuffle(nations_list_shuffle);
        i = 0;
        score = 0;
        document.getElementById("score").innerHTML = "Score: " + score;

        let first = nations_list_shuffle[i];
        flagL.innerHTML = first;
        document.getElementById('flagImgL').style.backgroundImage = 'url("flags/' + first + '.jpg")';
        document.getElementById('flagInfoL').innerHTML = "("+Math.floor(nation_dict[first]).toLocaleString('en-US')+")";

        let flagR = document.getElementById("flagR");
        let second = nations_list_shuffle[i+1];
        flagR.innerHTML = second;
        document.getElementById('flagImgR').style.backgroundImage = 'url("flags/' + second + '.jpg")';
     }
}

function init(){
    nations_list_shuffle = shuffle(nations_list_shuffle);
    score = 0;
    i = 0;
    flag = 0;
    let game_container = document.getElementById("game_container");
    game_container.classList.remove('fade');
    let game = document.getElementById("game");
    game.style.display = "block";
    game.classList.remove('down');
    let results = document.getElementById("results");
    results.style.display = "none";
    let sect = document.getElementById("sect");
    sect.classList.remove("sect-result");
    sect.classList.add("sect");
    let start_button = document.getElementById("start");
    start_button.style.display = "none";
    document.getElementById("input_nation").focus();
    let score_num = document.getElementById("score");
    score_num.textContent = score;
    nations_list.forEach(e => dict[e] = 0);
    let first = nations_list_shuffle[0];
    let image_name = "flags/" + first + ".jpg";
    let image = document.getElementById("flag");
    image.src = image_name;
    image.name = first;
    document.getElementById("flag").innerHTML = "ciao";

    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + (18 * 60));

    // Update the count down every 1 second
    x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="time"
        if (seconds < 10){
            document.getElementById("time").innerHTML = minutes + ":0" + seconds;
        }
        else{
            document.getElementById("time").innerHTML = minutes + ":" + seconds;
        }


        // If the count down is finished, write some text
        if (distance <= 0 || flag == 1) {
            document.getElementById("time").innerHTML = "18:00";
            clearInterval(x);
            if(distance <= 0){
                result();
            }
        }
    }, 1000);
}


function check(e){

    var naz = document.getElementById("input_nation").value;
    let image = document.getElementById("flag");
    let nation_name = image.name;

    if (naz.toLowerCase() == nation_name.toLowerCase()){
        document.getElementById("input_nation").value = '';
        score = score + 1;
        let score_num = document.getElementById("score");
        score_num.textContent = score;
        dict[nation_name] = 1;
        next();
    }

}

function prev(){
    i = i - 1;
    if (i <= 0){
        i = 193;
    }
    document.getElementById("input_nation").value = "";
    let first = nations_list_shuffle[i];
    if (dict[first] == 0){
        let image_name = "flags/" + first + ".jpg";
        let image = document.getElementById("flag");
        image.src = image_name;
        image.name = first;
    }
    else{
        prev();
    }
}

function next(){

    i = i + 1;
    document.getElementById("input_nation").value = "";
    if (score < 194){
        if (i >= 194){
            i = 0;
        }
        let first = nations_list_shuffle[i];
        if (dict[first] == 0){
            let image_name = "flags/" + first + ".jpg";
            let image = document.getElementById("flag");
            image.src = image_name;
            image.name = first;
        }
        else{
            next();
        }
    }
    else {
        result();
    }
}

function result(){
    flag = 1;
    result_style();
    //display elements
    setTimeout(function() {
        let content = document.getElementById("game");
        content.style.display = "none";
        let results = document.getElementById("results");
        results.style.display = "block";
        let sect = document.getElementById("sect");
        sect.classList.remove("sect");
        sect.classList.add("sect-result");
        let score_num = document.getElementById("score_2");
        score_num.textContent = score;
        let perc = document.getElementById("perc");
        perc.textContent = (score/194 * 100).toFixed(1);
        table = document.getElementById("table_results");
        let x = 0;
        var row = table.insertRow();
        nations_list.forEach(elem => {
            let cell = row.insertCell();
            let image = document.createElement("img");
            let image_name = "flags/" + elem + ".jpg";
            image.src = image_name;
            cell.appendChild(image);
            let name = document.createElement("p");
            name.textContent = elem;
            if (dict[elem] == 0) {
                image.style.filter = "grayscale(100%)";
                image.setAttribute("onmouseover","changeColor_1(this)")
                image.setAttribute("onmouseout","changeColor_2(this)")
            }
            cell.append(name);
            x = x + 1;
            if (x % 5 == 0){
                row = table.insertRow();
            }
        })
    }, 1000);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function changeColor_1(elem){
    elem.style.filter = "grayscale(0%)";
}

function changeColor_2(elem){
    elem.style.filter = "grayscale(100%)";
}

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}