$("img").click( function()
{
	var text = ($(this).attr("src"))
	$(this).attr("src", $(this).attr("data-alt"));
	$(this).attr("data-alt", text);

})