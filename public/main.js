//window.console&&console.log('foo');

$(document).ready(function() {
	console.log("Document Ready");

	var url = [{txt1:$("#url").val()}];

	$(document).on('click', '#test', function () {
		console.log($("#url").val());
		$.ajax({
			type: "POST",
			url: "/submit",
			dataType: 'json',
			data: JSON.stringify({id: $('#url').val()})
		});
	});

});

