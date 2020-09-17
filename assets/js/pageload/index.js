  // **** Your JavaScript code goes here ****
  d3.csv('./assets/data/education.csv').then(function(dataset) {	 
	 educationUpdate(dataset);
	});
	
function educationUpdate(dataset){
	const eduList =d3.select("#education-div").selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class","tl-item pub-item with-icon");		
		
		
	eduList.append("span")
		.attr("class","item-section")
		.text(function(d, i) { return d.Year});
		
	eduList.append("div")
		.attr("class","elem-wrapper")
		.append("i")
		.attr("class","oli oli-diploma");
		
	const edItem=eduList.append("div")
						.attr("class","content-wrapper");
	
	edItem.append("h3")
		.attr("class","title")
		.text(function(d, i) { return d.Degree});
		
	edItem.append("div")
		.attr("class","description")
		.append("p")
		.text(function(d, i) { return d.University});
}


