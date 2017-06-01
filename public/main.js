//window.console&&console.log('foo');

$(document).ready(function() {
	console.log("Document Ready");

	var url = [{txt1:$("#url").val()}];

	$(".tombstone").on('click', '#update', function () {
		console.log($("#url").val());
		var json = {
			title: $('#title').val(), 
			id: $('#id').val(),
			type: $('#type').val(),
			url: $('#url').val(),
			status: $('#status').val(),
		};
		

		$.ajax({
			type: "POST",
			url: "/submit",
			dataType: 'json',
			data: JSON.stringify(json)
		});
	});

});

