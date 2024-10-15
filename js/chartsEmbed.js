// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Embed donut chart
vegaEmbed('#category-donut-chart', 'js/topCategories_donutChart.json', {actions: false}).catch(console.warn);

// Embed bar chart
vegaEmbed('#top-channels-bar-chart', 'js/topChannels_barGraph.json', {actions: false}).catch(console.warn);

// Embed proportional symbol map
vegaEmbed('#global-subscribers-map', 'js/topCount_subs_map.json', {actions: false}).catch(console.warn);

// Embed lollipop chart
vegaEmbed('#top-earning-lollipop-chart', 'js/topEarning_lollipopChart.json', {actions: false}).catch(console.warn);

// Embed upload frequency histogram
vegaEmbed('#upload-freq-histogram', 'js/uploadFreq_histogram.json', {actions: false}).catch(console.warn);

// Embed line graph for monthly active users
vegaEmbed('#active-users-line-graph', 'js/activeUsers_lineGraph.json', {actions: false}).catch(console.warn);

