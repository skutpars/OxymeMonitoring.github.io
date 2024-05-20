document.addEventListener('DOMContentLoaded', (event) => {
    const ctx1 = document.getElementById('flow-rate-chart').getContext('2d');
    const flowRateChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Flow Rate',
                data: [0, 10, 5, 2, 20, 30, 45],
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctx2 = document.getElementById('pressure-rate-chart').getContext('2d');
    const pressureRateChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Pressure Rate',
                data: [30, 20, 40, 25, 50, 70, 55],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
