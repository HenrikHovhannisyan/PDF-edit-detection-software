function success() {
    if (document.getElementById("login").value === "" || document.getElementById("pas").value === "") {
        document.getElementById('continue').disabled = true;
    } else {
        document.getElementById('continue').disabled = false;
    }
}


function chart(id, labels, data, label) {
    new Chart(document.getElementById(id), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(77, 255, 223, 1)',
                    'rgba(77, 161, 255, 1)',
                ],
                label: label,
                borderColor: "#157DFC",
                fill: false
            },
            ]
        },
        options: {}
    });
}


chart("jobsChart", [1, 2, 3, 4, 5, 6, 7], [10, 47, 24, 2, 5, 16, 9], "Jobs");
chart("usersChart", [1, 2, 3, 4, 5, 6, 7], [5, 5, 5, 5, 5, 5, 5], "Users");
chart("reportsChart", [1, 2, 3, 4, 5, 6, 7], [7, 7, 7, 7, 7, 7, 7], "Reports");