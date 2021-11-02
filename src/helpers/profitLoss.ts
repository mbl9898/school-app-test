export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Total Fee',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['rgba(145, 145, 145, 0.8)'],
      borderColor: ['rgba(145, 145, 145, 1)'],
      borderWidth: 1,
    },
    {
      label: 'Fee Paid',
      data: [10, 15, 2, 3, 2, 1],
      backgroundColor: ['rgba(19, 166, 62, 0.8)'],
      borderColor: ['rgba(19, 166, 62, 1)'],
      borderWidth: 1,
    },
  ],
};

export const options: any = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};
