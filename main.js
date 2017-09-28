$(function() {
	var taskList = [
		{"name":"Test Task #1","date":"12/01/2012","assigned":"John Doe"},
		{"name":"Test Task #2","date":"12/02/2012","assigned":"John Doe"},
		{"name":"Test Task #3","date":"12/03/2012","assigned":"John Doe"},
		{"name":"Test Task #4","date":"12/04/2012","assigned":"John Doe"},
		{"name":"Test Task #5","date":"12/05/2012","assigned":"John Doe"},
		{"name":"Test Task #6","date":"12/06/2012","assigned":"John Doe"},
		{"name":"Test Task #7","date":"12/07/2012","assigned":"John Doe"}
	];
	var table = $('#task-table tbody')[0];
	var columnCount = Object.keys(taskList[0]).length;
	for (var i = 0; i < taskList.length; i++) {
        row = table.insertRow(-1);
        for (key in taskList[i]) {
            var cell = row.insertCell(-1);
            cell.innerHTML = taskList[i][key];
        }
    }
	/*$.ajax({
	  url: 'data.json',
	  success: function(data){
		  console.log(data);
	  }
	});*/
	$('#add-task').off('click').on('click', function(){
		var table = $('#task-table tbody')[0];
		row = table.insertRow(-1);
		var cell = row.insertCell(-1);
        cell.innerHTML = $('#task-name').val();
		var cell = row.insertCell(-1);
        cell.innerHTML = $('#due-date').val();
		var cell = row.insertCell(-1);
        cell.innerHTML = $('#assigned-user').val();
	});
	
});