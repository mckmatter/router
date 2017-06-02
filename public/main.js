//window.console&&console.log('foo');

$(document).ready(function() {
	console.log("Document Ready");

	/*
	var objs = getPayload();

	function appendHTML() {

	$('.tombstone').append("<div class=\'form-wrapper\'>" +
		"<input type=\'text\' id=\'" + objs.streamObject_1.title
		)

	var url = [{txt1:$("#url").val()}];

	*/

	$(".tombstone").on('click', '#update_1', function () {
		console.log($("#url").val());
		var json = collectTombstone();
		updateObject(json);
	});

	function updateObject(tombstone) {
		$.ajax({
			type: "POST",
			url: "/submit",
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


	//Function that will return all stone objects
	function getPayload() {
		
		var typeArray = ["RTSP", "RTMP"];
		var realmArray = ["Destination", "Source"];
		var statusArray = ["Active", "Disabled"];

		var streamObject_1 = {
			title: "Source 1",
			id: 0,
			realm: 1,
			type: 1,
			url: "rtsp:/stream/stream",
			status: 1,
		}

		var streamObject_2 = {
			title: "Source 2",
			id: 1,
			realm: 2,
			type: 2,
			url: "rtmp:/stream/stream",
			status: 2,
		}

		var initialPayload = [streamObject_1, streamObject_2];
		return initialPayload;
	};

	

});

