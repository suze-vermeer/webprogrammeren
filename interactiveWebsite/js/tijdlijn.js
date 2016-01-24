//$(document).ready(function(){

	//add post
	//$(document).on('click', '#add', function(){
	//	var message = document.getElementById('message').value;
	//	$("#timeline").append("<article><p>" +message+ "</p><button class='verwijder'>Verwijderen</button>		</p></article>")
	//});



	//delete post
	//$(document).on('click', '.verwijder', function(){
	//	$(this).parent().slideUp()
	//	$(this).remove()
	//});



// add comments van pizza voorbeeld
			$(document).ready(function(){
				
				// voeg status toe
				$(".addMessage").on("click", function(){
					var input = $("#inputMessage").val();
					var pizza = "<div class='bestelling'><div class='omschrijving'>"+input+"</div><div class='waardering'><div class='likes'>1</div><div class=''><a href='#' class='addLike'>Like</a></div></div><div class='addComments'><input type='text' class='inputComment'/><button class='addComment'>Voeg toe</button></div><div class='comments'></div>";
					$("#bestellingen").append(pizza);
					if (input == "") {
					document.getElementById('antwoord').innerHTML = "U heeft geen status ingevuld"
					}
				});

				// like de pizza
				$("body").on("click", ".addLike", function(){
					var likes = $(this).parent().siblings(".likes").text();
					likes++;
					$(this).parent().siblings(".likes").text(likes);
				});

				// voeg comment aan status toe

				$("body").on("click", ".addComment", function(){
					var input = $(this).siblings(".inputComment").val();
					var comment = "<div class='comment'><div class='message'>"+input+"</div><div class='commentControl'><a href='#' class='removeComment'>Verwijder</a></div></div>";
					$(this).parent().siblings(".comments").append(comment);
					if (input == "") {
					document.getElementById('antwoord2').innerHTML = "U heeft geen commentaar ingevuld"
					}
				});				

				$("body").on("click", "a.removeComment", function(){
					$(this).closest('.comment').remove();
				});

				$("body").on("click", "a.removePizza", function(){
					$(this).closest('.bestelling').remove();
				});

//if (input == "") {
		//document.getElementById('antwoord').innerHTML = "U heeft een veld leeggelaten"
	//}

			});	


