function updateYearMax(){
	var year_min = $(".ghost").attr('style').split('%')[0];
	var year_max = $(".ghost").attr('style').split('%')[1];

	var min = year_min.split(':')[1];
	var max = year_max.split(':')[1];

	var minf = parseFloat(min);
	var maxf = parseFloat(max);

	var cur_year = 2022;
	var mins = parseInt((cur_year - 1970)*minf/100 + 1970);
	var maxs = parseInt((cur_year - 1970)*maxf/100 +1 + 1970);

	$('#year-input-min').text(mins);
	$('#year-input-max').text(maxs);
}

function searchUni(){
  uni_name = document.getElementById("search-box").value;
  drawChart(uni_name);
}

function toggleSubview() {
	document.getElementById("subview_1").style.visibility = "hidden"; 
}