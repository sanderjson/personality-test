<script>
  import { testScore } from "../stores.js";
  import Wrapper from "./Wrapper.svelte";
  import Paragraph from "../elements/Paragraph.svelte";
  import List from "../elements/List.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";
  import TitleLarge from "../elements/TitleLarge.svelte";
  import TitleSmall from "../elements/TitleSmall.svelte";
  import Number from "../elements/Number.svelte";
  import Progress from "../elements/Progress.svelte";
  import ImageGroup from "../elements/ImageGroup.svelte";
  import Image from "svelte-image";

  let lion = {
    name: "Lion",
    img: "lion.jpg",
    category: "A",
    strengths: [
      "goal-orientated",
      "strong",
      "direct",
      "produce results",
      "confident",
      "challenge others"
    ],
    environment: [
      "lots of projects",
      "awards on the wall",
      "large calendar",
      "formal arrangements"
    ],
    security: "Control",
    pace: "fast and decisive",
    needs: ["responsive environment", "effecient team"],
    irritations: [
      "wasted time",
      "being unprepared",
      "arguing",
      "blocking results"
    ],
    growth:
      "This personality likes to lead. He/she is a powerful leader who loves to be in the driver’s seat. The lion is a good decision maker and is very goal-oriented. He/she enjoys challenges, difficult assignments, and the opportunity for advancement. Lions are problem-solvers. They are rarely conversational.",
    dealingWithThem:
      " Avoid attacking their character, telling them what to do, presenting win-lose scenarios. Provide them with options, the freedom to act. Be efficient and competent. If you disagree – argue facts, not personal feelings. Be precise, time-disciplined, and well-organized. Do not waste their time. They don’t need a lot of information to make a decision.",
    weakness: ["argumentative", "too dictorial"],
    paragraph: [
      "This personality likes to lead. He/she is a powerful leader who loves to be in the driver’s seat. The lion is a good decision maker and is very goal-oriented. He/she enjoys challenges, difficult assignments, and the opportunity for advancement. Lions are problem-solvers. They are rarely conversational."
    ],
    quote: ["Let's do it now!"]
  };

  let beaver = {
    name: "Beaver",
    img: "beaver.jpg",
    category: "D",
    strengths: [
      "hard-working",
      "detailed",
      "accurate",
      "focused on quality",
      "high standards",
      "sense of order"
    ],
    environment: [
      "structured and organized",
      "charts and graphs",
      "functional decor",
      "formal seating arrangement"
    ],
    security: "preparation",
    pace: "slow and systematic",
    needs: ["A climate that describes and focuses on accuracy and preciseness"],
    irritations: [
      "unprepared and uniformed people",
      "lack of attention to detail",
      "surprises",
      "unpredictability"
    ],
    growth:
      "Make faster decisions, tolerate conflict, learn to compromise, adjust to change and disorganization. See the optimistic side of things. Learn to relax and don’t expect others to do things just like they do.",
    dealingWithThem:
      "Make faster decisions, tolerate conflict, learn to compromise, adjust to change and disorganization. See the optimistic side of things. Learn to relax and don’t expect others to do things just like they do.",
    weakness: ["unrealistic", "perfectionist"],
    paragraph: [
      "Beavers are very organized. They think that there is a right way to do everything, and they want to do it exactly that way. They are perfectionists. Beavers keep all the T’s crossed and the I’s dotted. They desire to solve everything and take their time to do it right. Beavers do not like sudden changes and often need reassurance."
    ],
    quote: ["Let's do some research"]
  };

  let otter = {
    name: "Otter",
    img: "otter.jpg",
    category: "B",
    strengths: ["motivator", "people-person", "open", "positive"],
    environment: [
      "cluttered",
      "awards and slogans on the wall",
      "personal pictures",
      "friendly"
    ],
    security: "flexibility",
    pace: "fast and spontaneous",
    needs: "collaborative environment",
    irritations: [
      "too many facts",
      "too much logic",
      "boring tasks",
      "same old approach",
      "routine",
      "being alone",
      "when people ignore their opinions"
    ],
    growth:
      "Otters are very social creatures. They are the life of the party. This personality loves people. They enjoy being popular and influencing and motivating others. Otters are sometimes hurt when others do not like them. They love to goof-off and are notorious for having messy rooms. Otters like to hurry to finish jobs. They are always ready to have fun and create a fun environment for others. They are energized by being around a lot of people.",
    dealingWithThem:
      "Avoid negativism, rejection, arguing. Be interested in them. Support their dreams, feelings, and opinions. Do not hurry the discussion – give them a chance to talk. Don’t deal with details. Put everything to them in writing. Everyone likes to spend time with Otters, except Beavers.",
    weakness: ["talks too much", "too easy going"],
    paragraph: [
      "Otters are very social creatures. They are the life of the party. This personality loves people. They enjoy being popular and influencing and motivating others. Otters are sometimes hurt when others do not like them. They love to goof-off and are notorious for having messy rooms. Otters like to hurry to finish jobs. They are always ready to have fun and create a fun environment for others. They are energized by being around a lot of people."
    ],
    quote: ["Trust me! It'll work out!"]
  };

  let goldenRetriever = {
    name: "Golden Retriever",
    img: "goldenRetriever.jpg",
    category: "C",
    strengths: [
      "accommodating",
      "calm",
      "affirming",
      "possess great compassion",
      "good listener"
    ],
    environment: [
      "family pictures",
      "slogans on the wall",
      "personal items",
      "relaxed and friendly decorations"
    ],
    security: "close relationships",
    pace: "slow and easy",
    needs: "environment that processes",
    irritations: [
      "push and aggressive behaviour",
      "insincerity",
      "being put on the spot",
      "disrupting the status quo"
    ],
    growth:
      "Golden Retrievers are great at making friends. They are very loyal. This personality type does not like big changes. They look for security and can be very sensitive. Retrievers are very caring and have deeprelationships. A Golden Retriever wants to be loved by everyone. He looks for appreciation and works best in a limited situation with a steady work pattern. They are known as peaceful leaders. They love to care for others and be cared for.",
    dealingWithThem:
      "Avoid conflict, sudden unplanned risky changes, overloading or confusing concepts. Give them assurances, reliability, and assistance in presenting to others. Be non-threatening and sincere. Show interest in their feelings. Don’t push. Assure them you will stand behind their decision.",
    weakness: ["indecisive", "indifferent"],
    paragraph: [
      "Golden Retrievers are great at making friends. They are very loyal. This personality type does not like big changes. They look for security and can be very sensitive. Retrievers are very caring and have deep relationships. A Golden Retriever wants to be loved by everyone. He looks for appreciation and works best in a limited situation with a steady work pattern. They are known as peaceful leaders. They love to care for others and be cared for."
    ],
    quote: ["One thing at a time"]
  };

  const shareResults = () => {};

  // let testScore = { A: 54, B: 35, C: 16, D: 9 };

  let types = [lion, beaver, otter, goldenRetriever];

  let result = Object.keys($testScore).reduce((a, b) =>
    $testScore[a] > $testScore[b] ? a : b
  );
  console.log(result);

  const getPersonalityType = value => {
    for (const type of types) {
      if (type.category === value) return type;
    }
  };

  let response = getPersonalityType(result);

  // for buttons at the bottom
  const switchActive = (index, type) => {
    response = types[index];
    window.scrollTo(0, 0);
    console.log(type);
  };
</script>

<style>
  :global(.img) {
    height: 100%;
    object-fit: cover;
  }
</style>

<Wrapper>

  <header class="header pt-8">
    <TitleLarge text={`The ${response.name}`} hero={false} />
    <!-- <div class="mt-3"> -->
    <div class="img-hero mt-3 rounded-sm">
      <Image placeholderClass="img" src={`static/${response.img}`} />
    </div>
  </header>

  <div class="mt-8">
    <TitleSmall text="Summary" min={false} />
    <Paragraph>{response.paragraph}</Paragraph>
  </div>

  <div class="mt-8">
    <TitleSmall text="Strengths" min={false} />
    <List list={response.strengths} />
  </div>

  <div class="mt-8">
    <TitleSmall text="Environment" min={false} />
    <List list={response.environment} />
  </div>

  <div class="mt-8">
    <TitleSmall text="Irritations" min={false} />
    <List list={response.irritations} />
  </div>

  <div class="mt-8">
    <TitleSmall text="Weaknesses" min={false} />
    <List list={response.weakness} />
  </div>

  <div class="mt-8">
    <TitleSmall text="Personal Growth" min={false} />
    <Paragraph>{response.growth}</Paragraph>
  </div>

  <div class="mt-8">
    <TitleSmall text="Working with Them" min={false} />
    <Paragraph>{response.dealingWithThem}</Paragraph>
  </div>

  <div class="button-wrapper mt-8 mb-8 text-center">
    <Button onClick={shareResults} text="Share Your Results" />
  </div>

  <div class="mt-8">
    <TitleSmall text="Your Results" min={false} />
    <div class="flex justify-evenly mt-3 py-4 border-2 rounded-sm">
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.A} />
        <Number num={(($testScore.A * 100) / 57).toFixed(0)} />
        <TitleSmall min={true} text={types[0].name} />
      </div>
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.D} />
        <Number num={(($testScore.D * 100) / 57).toFixed(0)} />
        <TitleSmall min={true} text={types[1].name} />
      </div>
      <div class="flex flex-col items-center text-center">

        <Progress value={$testScore.B} />
        <Number num={(($testScore.B * 100) / 57).toFixed(0)} />
        <TitleSmall min={true} text={types[2].name} />
      </div>
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.C} />
        <Number num={(($testScore.C * 100) / 57).toFixed(0)} />
        <TitleSmall min={true} text={types[3].name} />
      </div>
    </div>
  </div>

  <div class="mt-8 mb-8">
    <TitleSmall text="Other Types" min={false} />
    <div class="mt-3 py-4 border-2 rounded-sm">
      <ImageGroup {switchActive} links={true} />
    </div>
  </div>

</Wrapper>
