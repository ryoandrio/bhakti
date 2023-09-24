async function loaddata() {
    $("#chart").remove();

    // remove option value="" from select id datashow
    $('#datashow option[value=""]').remove();

    var chartcontent = document.getElementById("chart-content");

    var datashow = document.getElementById("datashow").value;
    var data = await fetch("penduduk.json");
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
            },
            yaxis: {
                title: {
                    text: "Kecamatan",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            colors: json[0].colors,
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Jiwa";
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
                position: "top",
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
                {
                    name: json[2].title,
                    data: json[2].data,
                },
            ],
            chart: {
                type: "bar",
                height: 1400,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            xaxis: {
                categories: json[1].categories,
            },
            yaxis: {
                title: {
                    text: "Kecamatan",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            colors: ["#548CFF", "#D96098"],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Jiwa";
                    },
                },
            },
            title: {
                text: "Jumlah Penduduk Menurut Jenis Kelamin",
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
                position: "top",
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    } else if (datashow == 3) {
        console.log(json[4].title);

        var options = {
            series: [
                {
                    name: json[4].title,
                    data: json[4].data,
                },
                {
                    name: json[5].title,
                    data: json[5].data,
                },
            ],
            chart: {
                type: "bar",
                height: 700,
                stacked: true,
                stackType: "100%",
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                    },
                },
            },
            xaxis: {
                categories: json[4].categories,
            },
            yaxis: {
                title: {
                    text: "Kelompok Umur",
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            colors: ["#548CFF", "#D96098"],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " Jiwa";
                    },
                },
            },
            title: {
                text: "Jumlah Penduduk Menurut Kelompok Umur",
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
                position: "top",
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    } else if (datashow == 4) {
        console.log(json[3].title);

        var options = {
            series: json[3].data,
            chart: {
                width: 600,
                type: "donut",
                toolbar: {
                    show: true,
                },
            },
            labels: json[3].categories,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                    },
                },
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            value: {},
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "12px",
                    colors: ["#fff"],
                },
            },
            colors: json[3].colors,
            title: {
                text: json[3].title,
                align: "center",
            },
            legend: {
                position: "top",
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    } else if (datashow == 5) {
        console.log(json[6].title);

        var options = {
            series: json[6].data,
            chart: {
                width: 600,
                type: "donut",
                toolbar: {
                    show: true,
                },
            },
            labels: json[6].categories,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                    },
                },
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            value: {},
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "12px",
                    colors: ["#fff"],
                },
            },
            colors: json[6].colors,
            title: {
                text: json[6].title,
                align: "center",
            },
            legend: {
                position: "top",
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    } else if (datashow == 6) {
        console.log(json[7].title);

        var options = {
            series: [
                {
                    name: json[7].title,
                    data: json[7].data,
                },
            ],
            chart: {
                width: 700,
                type: "radar",
                toolbar: {
                    show: true,
                },
            },
            labels: json[7].categories,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                    },
                },
            ],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            value: {},
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "12px",
                    colors: ["#000"],
                },
            },
            colors: json[7].colors,
            title: {
                text: json[7].title,
                align: "center",
            },
            legend: {
                position: "top",
            },
            fill: {
                opacity: 0.2,
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        $("#loading").remove();
        chart.render();
    }
}
