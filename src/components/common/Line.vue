<template>
  <LineChartGenerator
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import { mapState } from "vuex";
const houseStore = "houseStore";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "최근 거래가격 추이",
            backgroundColor: "#b3e5fc",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  computed: {
    ...mapState(houseStore, ["houseHistory"]),
  },

  created() {
    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];

    for (let i = 0; i < this.houseHistory.length; ++i) {
      const day = `${this.houseHistory[i].dealYear} / ${this.houseHistory[i].dealMonth}`;
      this.chartData.labels.push(day);
      this.chartData.datasets[0].data.push(this.houseHistory[i].dealAmount);
    }
  },

  // methods: {
  //   initData() {
  //     this.chartData.labels = [];
  //     this.chartData.datasets.data = [];

  //     for (let i = 0; i < this.houseHistory.length; ++i) {
  //       const day = `${this.houseHistory[i].dealYear}/${this.houseHistory[i].dealMonth}`;
  //       this.chartData.labels.push(day);
  //       this.chartData.datasets.data.push(this.houseHistory[i].dealAmount);
  //     }
  //   },
  // },
};
</script>
