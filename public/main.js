//window.console&&console.log('foo');

$(document).ready(function() {
	console.log("Document Ready");

	$(document).on('click', '#getstones', function() {
		console.log("Get Stones Clicked");
		$.ajax({
			type: "GET",
			url: "/stones",
			dataType: "json",
			success: function(data){console.log(data)}
		});
	});

	$(".tombstone").on('click', '#update_1', function () {
		console.log($("#url").val());
		var json = collectTombstone();
		updateObject(json);
	});

	function setStones(tombstone) {
		console.log("setStones");
		
	};

	function updateObject(tombstone) {
		$.ajax({
			type: "POST",
			url: "/stones",
			dataType: 'json',
			data: JSON.stringify(tombstone)
		});
	};

	function collectTombstone() {
		var json = {
			title: $('#title').val(), 
			id: $('#id').val(),
			type: $('#type').val(),
			url: $('#url').val(),
			status: $('#status').val(),
		}
		return json;
	};

});

