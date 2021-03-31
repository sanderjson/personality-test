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
    dragula([valueBank], {})
      .on("dragend", createDatasetRank)
      .on('drag', (el) =>  {
        el.classList.add('drag-hover-style')
      })
      .on('drop', (el) => {
        el.classList.remove('drag-hover-style')
      })
  });
</script>

<style>
  .value-bank {
    overscroll-behavior-y: contain;
  }
  .value {
    touch-action: none;
    cursor: pointer;
  }
  :global(.drag-hover-style) {
    background: #4299e1;
  }
</style>

<Wrapper>

  <header class="header pt-8">
    <Title text={`Question ${$currentTestQuestion + 1} / ${testLength}`} />
    <div class="mt-3">
      <Paragraph>
        <strong>Identify which phrase most accurately describe you.</strong>
        Move the text by drag and drop, place the most important phrases at the
        top.
      </Paragraph>
    </div>
  </header>

  <div class="mt-8 md:mt-16">
    <div
      class="value-bank mt-3 md:mt-5 border-2 max-w-md mx-auto md:max-w-3xl rounded-sm"
      bind:this={valueBank}>
      {#each questionValues as val}
        <div
          data-personality-type={val.value}
          data-personality-rank={0}
          class="value flex h-20 px-4 items-center content-center mx-auto
          bg-gray-100 transition-colors ease duration-150">
          <div class="flex ml-3 md:ml-5 lg:ml-8 mr-5 md:mr-8 lg:mr-12">
            <Star />
            <Star />
            <Star />
          </div>
          <Title text={val.description} />
        </div>
      {/each}
    </div>
  </div>

  <div class="my-8 md:my-16">
    <div
      class="mt-3 py-4 md:mt-5 md:py-8 lg:py-12 mx-auto max-w-md md:max-w-3xl
      rounded-sm text-center">
      <Button onClick={questionSubmit} text="Next Question" />
    </div>
  </div>

</Wrapper>
