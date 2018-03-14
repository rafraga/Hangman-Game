var wins_counter = 0;
var wins_keys = [];
var loses_counter = 0;
var loses_keys = [];
var guesses_left_counter = 6;
var guitar_models = [["fendersquierbullet","fender squier bullet"],["gibsonlespaulstandard","gibson les paul standard"],["gibsonsgzootsuit","gibson sg zoot suit"],["hagstromdeluxe","hagstrom deluxe"],["jacksonrr3","jackson rr3"]]
var won_var = "LOSE"
var right_choices = []
random_index = Math.floor(Math.random() * guitar_models.length) + 1;
guitar_file = (guitar_models[random_index][0]).toLowerCase();
guitar = (guitar_models[random_index][1]).toLowerCase();
guitar_name_array = guitar.split('');
guitar_unique_list = []

$("#myAudio").html("<embed loop='true' src='" + guitar_file + ".mp3' hidden='true' type='video/quicktime'></embed>")

var a = new Audio()
a.src = "assets/sounds/" + guitar_file + ".mp3"
a.play()

for (var i in guitar_file) {
    if (guitar_unique_list.includes(guitar_file[i])) {
    } else {
    guitar_unique_list.push(guitar_file[i])
    }
};

guitar_length = guitar_unique_list.length;

name_to_print = [];
for (var i in guitar_name_array) {
    if (guitar_name_array[i] == " "){
        name_to_print.push(" ")
    } else {
        name_to_print.push("_ "); 
        };
    }; 
    
$("#random_key_display").html("<h2 style='word-spacing: 20px ! important;'>" + name_to_print.join('') + "" + "</h2>");

$("#whichkey").on("keydown", function( event ) {
    if (wins_keys.includes((event.key).toLowerCase()) || loses_keys.includes((event.key).toLowerCase())) {
    } else {
        if (guitar.includes((event.key).toLowerCase())) {
            right_choices.push((event.key).toLowerCase());
            wins_counter = wins_counter + 1;
            var won_var = "IS";
            letter_color = "green";
            wins_keys.push((event.key).toLowerCase());
    
        } else {
            loses_counter = loses_counter + 1;
            guesses_left_counter = guesses_left_counter - 1;
            var won_var = "IS NOT";
            letter_color = "red";
            loses_keys.push((event.key).toLowerCase());
        };
        name_to_print = []
        for (var i in guitar_name_array) {
            if (guitar_name_array[i] == " "){
                name_to_print.push(" ")
            } else {
                if (right_choices.includes(guitar_name_array[i])) {
                    name_to_print.push(guitar_name_array[i] + " ");
                } else {
                    name_to_print.push("_ "); 
                };
            };  
        };
        whichkey.value = "";
        $("#score").html("<b><h6>TOTAL SCORE</b></h6>");
        $("#random_key_display").html("<h3 style='word-spacing: 20px ! important;'>" + name_to_print.join('') + "" + "</h3>");
        $("#log").html("You typed " + event.key.toUpperCase() + ", and this key <font color='" + letter_color + "'>" + won_var + "</font> part of the guitar name!");
        $("#wins").html("<h6>"+ wins_counter +" correct guesses so far: " + wins_keys.join(',') +"</h6>");
        $("#loses").html("<h6>"+ loses_counter +" wrong guesses so far: " + loses_keys.join(',') +"</h6>");
        $("#guesses_left").html("<h6>Guesses Left: " + guesses_left_counter + "" + "</h6>");
        if (loses_counter == 1) { 
            $("#hang").html("<img src='assets/images/hang1.jpg'>"); 
            };
        if (loses_counter == 2) { 
            $("#hang").html("<img src='assets/images/hang2.jpg'>"); 
            };
        if (loses_counter == 3) { 
            $("#hang").html("<img src='assets/images/hang3.jpg'>"); 
            };
        if (loses_counter == 4) { 
            $("#hang").html("<img src='assets/images/hang4.jpg'>"); 
            };
        if (loses_counter == 5) { 
            $("#hang").html("<img src='assets/images/hang5.jpg'>"); 
            };
        if (loses_counter == 6) { 
            $("#hang").html("<img src='assets/images/hang6.jpg'>"); 
            };
        if (wins_counter >= guitar_length) { 
            $("#keys").html("<div style='color:green; border-style: none; ! important;'><h6>YOU WON!<br> <img src='assets/images/" + guitar_file + ".jpg' height='50%'><br>Click on RESTART to reset the game."); 
            };
        if (loses_counter >= 6) {
            $("#keys").html("<div style='color:red; border-style: none; ! important;'><h6>GAME OVER! YOU LOST!<br><img src='assets/images/" + guitar_file + ".jpg' height='50%'><br>Click on RESTART to reset the game."); 
            };      
    } 
  });

$('#restart').click(function() {
    location.reload();
});