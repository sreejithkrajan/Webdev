  // **** Your JavaScript code goes here ****
	
d3.csv('./assets/data/publications.csv').then(function(dataset) { 		
		publicationsUpdate(dataset);
		
	});
	

function publicationsUpdate(dataset){
	const pubList =d3.select("#publications-div").selectAll("div")
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