<script>
  import Button from "../elements/Button.svelte";
  import Bar from "svelte-chartjs/src/Bar.svelte";
  import Scatter from "svelte-chartjs/src/Scatter.svelte";

  const shareResults = () => {};

  let graphWidth = "0";
  let graphHeight = "0";

  let finalScore = { A: 54, B: 35, C: 16, D: 9 };
  let data = {
    labels: ["Lion", "Otter", "Golden Retriever", "Beaver"],
    datasets: [
      {
        label: "Score",
        data: [finalScore.A, finalScore.B, finalScore.C, finalScore.D],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
</script>

<style>
  .chart-container {
    max-width: 320px;
    margin: 0 auto;
  }
</style>

<h1>HERE ARE YOUR RESULTS</h1>
<div class="chart-container">
  <Bar {data} width={100} height={100} />
</div>
<div class="chart-container">
  <Scatter {data} width={100} height={100} />
</div>

<Button onClick={shareResults} text="Share Your Results" />
