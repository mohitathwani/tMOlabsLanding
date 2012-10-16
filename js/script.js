$(function(){
	
	var note = $('#note');
	var ts = (new Date(2012, 9, 17)).getTime() + 20*24*60*60*1000;

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
		
				message += "Our designer(s) and developer(s) are working their a**es off ! We hope to bring you a limited beta verion of TeraMO.in before the countdown ends. Cheers !";
			
			note.html(message);
		}
	});
	
});
