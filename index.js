
const ctx = document.getElementById('real-time-chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], 
        datasets: [
            {
                label: 'Real-Time Data',
                data: [], 
                borderColor: 'blue',
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            },
        },
    },
});


function addDataPoint(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);

    chart.update();
}

let time = 0;
setInterval(() => {
    
    const newData = Math.random() * 100;
    addDataPoint(chart, time, newData);

    
    time++;
}, 1000); 
