$(function() {
	// Initial list of tasks
	var taskList = [
		{"name":"Test Task #1","date":"2012-12-01","assigned":"John Doe"},
		{"name":"Test Task #2","date":"2012-12-02","assigned":"John Doe"},
		{"name":"Test Task #3","date":"2012-12-03","assigned":"John Doe"},
		{"name":"Test Task #4","date":"2012-12-04","assigned":"John Doe"},
		{"name":"Test Task #5","date":"2012-12-05","assigned":"John Doe"},
		{"name":"Test Task #6","date":"2012-12-06","assigned":"John Doe"},
		{"name":"Test Task #7","date":"2012-12-07","assigned":"John Doe"}
	];
	var table = $('#task-table tbody')[0];
	var columnCount = Object.keys(taskList[0]).length;
	var addNewRow = function(task){
		row = table.insertRow(-1);
        for (key in task) {
            var cell = row.insertCell(-1);
            cell.innerHTML = task[key];
        }
	}
	//Insert rows for each task in the list and append to existing table
	for (var i = 0; i < taskList.length; i++) {
		addNewRow(taskList[i]);
    }
	/*$.ajax({
	  url: 'data.json',
	  success: function(data){
		  console.log(data);
	  }
	});*/
	//Insert the form data as a new row into the table
	$('#add-task').off('click').on('click', function(){
		var newTask = {'name': $('#task-name').val(),'date':$('#due-date').val(),'assigned':$('#assigned-user').val()};
		taskList.push(newTask);
		addNewRow(newTask);
	});
});
