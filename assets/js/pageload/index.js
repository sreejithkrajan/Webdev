  // **** Your JavaScript code goes here ****
  d3.csv('./assets/data/education.csv').then(function(dataset) {	 
	 educationUpdate(dataset);
	});
	
	
	d3.csv('./assets/data/experience.csv').then(function(dataset) { 		
		experienceUpdate(dataset);		
	});
	
	
d3.csv('./assets/data/publications.csv').then(function(dataset) { 		
		publicationsUpdate(dataset);
		
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


function experienceUpdate(dataset){
	const eduList =d3.select("#experience-div").selectAll("div")
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
		.attr("class",function(d, i) { return d.icon});
		
	const edItem=eduList.append("div")
						.attr("class","content-wrapper");
	
	edItem.append("h3")
		.attr("class","title")
		.text(function(d, i) { return d.Position});
		
	edItem.append("div")
		.attr("class","description")
		.append("p")
		.text(function(d, i) { return d.Company});
}


function publicationsUpdate(dataset){
	const pubList =d3.select("#recent-pub-div").selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class","pub-item with-icon");
		
		pubList.append("div")
		.attr("class","elem-wrapper")
		.append("i")
		.attr("class","oli oli-bookmark");
		
		const pubItem=pubList.append("div")
						.attr("class","content-wrapper");
						
		pubItem.append("h3")
		.attr("class","title")
		.text(function(d, i) { return d.Title});
		
		const pubDetails=pubItem.append("div")
					.attr("class","description");
		
		pubDetails.append("div")
		.attr("class","citation")
		.text(function(d, i) { return d.Citation});
		
		pubDetails.append("div")
		.attr("class","citation")
		.text(function(d, i) { return d.Authors});
		
		pubDetails.append("a")
		.attr("class","link-with-icon")
		.attr("href",function(d, i) { return d.Link})
		.text("Publisher's website")
		.append("i")
		.attr("class","fa fa-external-link");			
						
}