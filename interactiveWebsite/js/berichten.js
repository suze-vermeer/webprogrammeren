$(document).ready(function(){
// add chatbericht
$(".addChatBericht").click(function() {
	var input = $("#inputChatBericht").val();
	
	var inputChatIsEmpty = $.trim($('#inputChatBericht').val());

	if(inputChatIsEmpty.length !== 0) {
		var chatbericht = "<div class='chatbericht right'><div class='omschrijving'>"+input+"</div></div>";
		$("#chatberichten").append(chatbericht);
	// input field wordt geleegd
	$("#inputChatBericht").val('');
	$("#error").text('');
} else {
	$("#error").text('Het veld is niet ingevuld.');
}
});

// verwijder chatbericht
$("body").on("click", "a.removeChatBericht", function(){
	$(this).closest('.chatbericht').remove();
});

});