async function loaddata() {
    $("#chart").remove();

    // remove option value="" from select id datashow
    $('#datashow option[value=""]').remove();

    var chartcontent = document.getElementById("chart-content");

    var datashow = document.getElementById("datashow").value;
    var data = await fetch("statistik.json");
    var json = await data.json();

    if (datashow !== "") {
        // create button loading bootstrap to chart
        var loading = document.createElement("button");
        loading.id = "loading";
        loading.className = "btn btn-primary";
        loading.setAttribute("type", "button");
        loading.setAttribute("disabled", "disabled");
        var span1 = document.createElement("span");
        span1.className = "spinner-border spinner-border-sm";
        span1.setAttribute("aria-hidden", "true");
        loading.appendChild(span1);
        var span2 = document.createElement("span");
        span2.setAttribute("role", "status");
        span2.id = "status";
        span2.innerHTML = " Loading...";
        loading.appendChild(span2);
        chartcontent.appendChild(loading);
    }

    // create div chart
    var chart = document.createElement("div");
    chart.id = "chart";
    chartcontent.appendChild(chart);

    if (datashow == 1) {
        console.log(json[0].title);

        var options = {
            series: [
                {
                    name: json[0].title,
                    data: json[0].data,
                },
            ],
            chart: {
                type: "bar",
                height: 700,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            xaxis: {
                categories: json[0].categories,
                title: {
                    text: "Jumlah Tim",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            yaxis: {
                title: {
                    text: "Provinsi",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            colors: json[0].colors,
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Tim";
                    },
                },
            },
            title: {
                text: json[0].title,
                align: "center",
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "12px",
                    colors: ["#000"],
                },
                offsetX: -5,
            },
            legend: {
                enabled: false,
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    } else if (datashow == 2) {
        console.log(json[1].title);

        var options = {
            series: [
                {
                    name: json[1].title,
                    data: json[1].data,
                },
            ],
            chart: {
                type: "bar",
                height: 700,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            xaxis: {
                categories: json[1].categories,
                title: {
                    text: "Jumlah Mahasiswa",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            yaxis: {
                title: {
                    text: "Jumlah Mahasiswa",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            colors: json[1].colors,
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Mahasiswa";
                    },
                },
            },
            title: {
                text: json[1].title,
                align: "center",
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "12px",
                    colors: ["#000"],
                },
                offsetX: -5,
            },
            // legend: {
            //     position: "top",
            // },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    }
}
