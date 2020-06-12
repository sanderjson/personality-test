<script>
  import { onMount } from "svelte";
  import dragula from "dragula";
  import "dragula/dist/dragula.min.css";
  import {
    currentTestQuestion,
    testIsComplete,
    testIsActive,
    testScore
  } from "../stores.js";
  import Wrapper from "./Wrapper.svelte";
  import Paragraph from "../elements/Paragraph.svelte";
  import Button from "../elements/Button.svelte";
  import Star from "../elements/Star.svelte";
  import Title from "../elements/Title.svelte";

  export let questionValues;
  export let testLength;

  let valueBank;
  let answerBank;
  // for star styles
  let value;
  let pos;

  const setNextQuestion = () => {
    currentTestQuestion.update(i => i + 1);
  };

  const scoreTest = () => {
    testIsComplete.set(true);
  };

  const validateData = () => {
    // convert nodelist to an array
    let nodes = [...valueBank.childNodes];
    const questionScore = nodes.map(el => el.dataset.personalityType);
    return questionScore;
  };

  const scoreQuestion = data => {
    let temp;
    let score = data.reduce((s, n, i) => {
      return {
        A: 3 - data.findIndex(el => el == "A"),
        B: 3 - data.findIndex(el => el == "B"),
        C: 3 - data.findIndex(el => el == "C"),
        D: 3 - data.findIndex(el => el == "D")
      };
    });
    return score;
  };

  const updateTestScore = score => {
    testScore.set({
      A: $testScore.A + score.A,
      B: $testScore.B + score.B,
      C: $testScore.C + score.C,
      D: $testScore.D + score.D
    });
  };

  const questionSubmit = () => {
    let data = validateData();
    let score = scoreQuestion(data);
    updateTestScore(score);
    // update scores
    if ($currentTestQuestion < testLength - 1) {
      setNextQuestion();
    } else {
      scoreTest();
    }
  };

  onMount(() => {
    let valueBankArray = [...valueBank.childNodes];

    const createDatasetRank = () => {
      valueBankArray = [...valueBank.childNodes];
      for (const [index, element] of valueBankArray.entries()) {
        element.dataset.personalityRank = 3 - index;
        let starGroup = element.childNodes[0];
        // stargroup has 5 child nodes - 3 svg and 2 text
        if (element.dataset.personalityRank == 3) {
          starGroup.childNodes[0].classList.add("active");
          starGroup.childNodes[2].classList.add("active");
          starGroup.childNodes[4].classList.add("active");
        } else if (element.dataset.personalityRank == 2) {
          starGroup.childNodes[0].classList.add("active");
          starGroup.childNodes[2].classList.add("active");
          starGroup.childNodes[4].classList.remove("active");
        } else if (element.dataset.personalityRank == 1) {
          starGroup.childNodes[0].classList.add("active");
          starGroup.childNodes[2].classList.remove("active");
          starGroup.childNodes[4].classList.remove("active");
        } else {
          starGroup.childNodes[0].classList.remove("active");
          starGroup.childNodes[2].classList.remove("active");
          starGroup.childNodes[4].classList.remove("active");
        }
      }
    };

    createDatasetRank();
    dragula([valueBank], {}).on("dragend", createDatasetRank);
  });
</script>

<style>
  .value {
    touch-action: none;
    cursor: pointer;
  }
</style>

<Wrapper>

  <header class="header pt-8">
    <Title
      title={{ top: `Question ${$currentTestQuestion + 1} / ${testLength}`, bot: '' }} />
    <div class="mt-3">
      <Paragraph>
        Identify which terms most accurately describe you. Reorder the terms by
        drag and drop. Move the most important terms to the top.
      </Paragraph>
    </div>
  </header>

  <div class="mt-8 border-2 rounded-sm" bind:this={valueBank}>
    {#each questionValues as val}
      <div
        data-personality-type={val.value}
        data-personality-rank={0}
        class="value flex h-20 px-4 items-center content-center bg-gray-100">
        <div class="flex">
          <Star />
          <Star />
          <Star />
        </div>
        <div
          class="text-2xl ml-8 tracking-tight leading-12 font-extrabold
          text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {val.description}
        </div>
      </div>
    {/each}
  </div>

  <div class="button-wrapper mt-8 mb-8 text-center">
    <Button onClick={questionSubmit} text="Next Question" />
  </div>

</Wrapper>
