var labelFormat = {
  outer: {
    format: 'none',
    pieDistance: 20,
  },
  inner: {
    format: 'label-percentage2',
    hideWhenLessThanPercentage: 3,
  },
  mainLabel: {
    color: '#ffffff',
    font: 'helvetica',
    fontSize: 18,
  },
  percentage: {
    color: '#ffffff',
    font: 'helvetica',
    fontSize: 20,
    decimalPlaces: 0,
  },
  value: {
    color: '#ffffff',
    font: 'helvetica',
    fontSize: 18,
  },
  lines: {
    enabled: true,
    style: 'straight',
  },
  truncation: {
    enabled: true,
  },
};

function createPieChart(divID, chartTitle, chartData, tooltipFormatString) {
  var pie = new d3pie(divID, {
    header: {
      title: {
        text: chartTitle,
        fontSize: 24,
        font: 'open sans',
      },
      titleSubtitlePadding: 9,
    },
    size: {
      canvasWidth: 590,
      pieOuterRadius: '90%',
    },
    data: {
      sortOrder: 'value-desc',
      content: chartData,
    },
    labels: labelFormat,
    tooltips: {
      enabled: true,
      type: 'placeholder',
      string: tooltipFormatString,
    },
  });
  return pie;
}
