<script>
  import { onMount } from "svelte";
  import { testScore } from "../stores.js";
  import Wrapper from "./Wrapper.svelte";
  import Paragraph from "../elements/Paragraph.svelte";
  import Quote from "../elements/Quote.svelte";
  import List from "../elements/List.svelte";
  import Button from "../elements/Button.svelte";
  import Title from "../elements/Title.svelte";
  import TitleLarge from "../elements/TitleLarge.svelte";
  import TitleSmall from "../elements/TitleSmall.svelte";
  import Number from "../elements/Number.svelte";
  import Progress from "../elements/Progress.svelte";
  import ImageGroup from "../elements/ImageGroup.svelte";
  import Image from "svelte-image";
  import {
    Email,
    HackerNews,
    Reddit,
    LinkedIn,
    Pinterest,
    Telegram,
    Tumblr,
    Vk,
    WhatsApp,
    Xing,
    Facebook,
    Twitter
  } from "svelte-share-buttons-component";

  let url, title, desc;

  let lion = {
    name: "Lion",
    img: "lion",
    imgSrc: "photo by Kazuky Akayashi",
    imgDesc: "face of a proud lion",
    category: "A",
    strengths: ["results-driven", "direct", "confident", "challenges others"],
    keyPoints: [
      "feels safe with a sense of control",
      "likes a fast and decisive pace"
    ],

    environment: [
      "many projects on the go",
      "awards on display",
      "large calendar",
      "formal seating"
    ],
    security: "Control",
    pace: "fast and decisive",
    needs: ["responsive environment", "effecient team"],
    irritations: [
      "wasting time",
      "being unprepared",
      "arguing",
      "blocking results"
    ],
    growth:
      "Lions often need to learn that while they may win every verbal battle, they may lose the war and the prize of their family's and friends' hearts",
    dealingWithThem:
      "Avoid attacking their character, telling them what to do, or presenting win-lose scenarios. Provide them with options and the freedom to choose. Be efficient and competent. To make your point heard with a Lion, use facts not personal feelings. Be precise, timely and well-organized. Do not waste their time. They don’t need a lot of information to make a decision.",
    weakness: ["argumentative", "bossy"],
    summary: [
      "You identify most as the Lion. This personality type likes to command a room. They are a powerful leader who loves to be in the driver’s seat. The Lion is a strong decision maker and is very goal-oriented. They enjoy challenges, difficult assignments, and the opportunity for advancement. Lions are problem-solvers. They are rarely have time to chitchat."
    ],
    quote: ["I want to start right away"]
  };

  let beaver = {
    name: "Beaver",
    img: "beaver",
    imgSrc: "photo by Jon Sailer",
    imgDesc: "face of a clever beaver",
    category: "D",
    strengths: [
      "detailed",
      "focused on quality",
      "high standards",
      "sense of order"
    ],
    keyPoints: [
      "feels safe with preparation",
      "likes a slow and systematic pace"
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
      "unprepared people",
      "lack of attention to detail",
      "surprises",
      "unpredictability"
    ],
    growth:
      "Beavers often need to learn that it's OK to fail and to call for help when it's needed. This is especially true when life events become unpredictable",
    dealingWithThem:
      "Beavers do not like to be rushed, thrown into unpredictable situations, or dealing with unprepared people. They appreciate being able to take the time to make the best decision. They like to be informed, so try and offer them more details and explanations. Beavers may open up when talking about details and they appreciate technical knowledge.",
    weakness: ["unrealistic", "perfectionist"],
    summary: [
      "You identify most as the Beaver. Beavers are very organized. They think that there is a right way to do everything and they want to do it exactly that way. They are perfectionists. Beavers keep all the T’s crossed and the I’s dotted. They desire to solve everything and take their time to do it right. Beavers do not like sudden changes and often need reassurance in their work. "
    ],
    quote: ["First let's do some research"]
  };

  let otter = {
    name: "Otter",
    img: "otter",
    imgDesc: "face of a creative otter",
    imgSrc: "photo by Pixabay",
    category: "B",
    strengths: ["open", "can motivate other", "people-person", "positive"],
    keyPoints: [
      "feels safe with flexibility",
      "likes a fast and spontaneous pace"
    ],
    environment: [
      "cluttered",
      "awards and slogans on the wall",
      "personal pictures",
      "inviting space"
    ],
    security: "flexibility",
    pace: "fast and spontaneous",
    needs: "collaborative environment",
    irritations: [
      "boring tasks",
      "routine",
      "being alone",
      "when people ignore their opinions"
    ],
    growth:
      "Otters often need to learn that pleasing people and being a part of the crowd is not always the most important thing. Otters should also be aware of compulsive urges",
    dealingWithThem:
      "Otters don’t respond well to rejection, negativity or arguing to get a point across. Show interest in them – support their dreams, feelings, and opinions. Do not hurry the discussion and give them a chance to speak. Don’t deal with details. Put everything to them in writing. Everyone likes to spend time with Otters, except Beavers.",
    weakness: ["talks too much", "too easy going"],
    summary: [
      "You identify most as the Otter. Otters are very social creatures and they are the life of the party. They feed off of the energy from big groups of people. Being popular and influencing and motivating others pleases them. Otters are sometimes hurt when others do not like them. They love to goof-off and are notorious for having messy spaces. Otters like to hurry to finish jobs. They are always ready to have fun and create a fun environment for others. "
    ],
    quote: ["Trust me, it will all work out!"]
  };

  let goldenRetriever = {
    name: "Golden Retriever",
    img: "goldenRetriever",
    imgSrc: "photo by Helena Lopes",
    imgDesc: "face of a compassionate golden retriever",
    category: "C",
    strengths: [
      "accommodating",
      "possesses great compassion",
      "good listener",
      "calm"
    ],
    keyPoints: [
      "feels safe with close relationships",
      "likes a slow and easy pace"
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
      "pushy and aggressive behaviour",
      "insincerity",
      "being put on the spot",
      "disrupting the status quo"
    ],
    growth:
      "Golden Retrievers often need to learn that they may have a potential for codependency. Retrievers may enable a person's bad habits or an unhealthy relationship",
    dealingWithThem:
      "Golden Retrievers don’t like conflict, sudden unplanned risky changes, feeling overloaded or confused. Give them assurances, reliability, and assistance in presenting to others. Be non-threatening and sincere. Show interest in their feelings. Don’t push. Assure them you will stand behind their decision.",
    weakness: ["indecisive", "indifferent"],
    summary: [
      "You identify most as the Golden Retriever. Friendship and loyalty are very important to Retrievers. This personality type does not like big changes. They look for security and can be very sensitive. Retrievers are very caring and have deep relationships. A Golden Retriever wants to be loved by everyone. She/He looks for appreciation and works best in a limited situation with a steady work pattern. They are known as peaceful leaders. They love to care for others and be cared for."
    ],
    quote: ["Let's focus one thing at a time"]
  };

  const resetTest = () => {
    location.reload();
    window.scrollTo(0, 0);
  };

  let types = [lion, beaver, otter, goldenRetriever];

  let result = Object.keys($testScore).reduce((a, b) =>
    $testScore[a] > $testScore[b] ? a : b
  );

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
  };

  onMount(() => {
    // for social share
    // url = "https://pchynoweth.github.io/svelte-share-buttons-component/";
    url = "https://personality-test.now.sh/";
    // title = "Two Minute Personality Test";
    title = `My personality type is a ${response.name}, this means I am ${response.strengths[0]}, and ${response.strengths[1]}. Find out yours:`;
  });
</script>

<style>
  :global(.img) {
    height: 100%;
    max-height: 640px;
    object-fit: cover;
  }

  :global(.share-button) {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
  }
  :global(.share-button svg) {
    transform: scale(1.388);
  }
  @media only screen and (min-width: 768px) {
    :global(.share-button) {
      width: 64px;
      height: 64px;
    }
    :global(.share-button svg) {
      transform: scale(1.618);
    }
  }
</style>

<svelte:head>
  <meta name="description" content={desc} />
  <meta name="twitter:description" content={desc} />
</svelte:head>

<Wrapper>

  <header class="header pt-8">
    <TitleLarge text={`The ${response.name}`} hero={false} />
    <div class="img-hero mt-3 max-w-md mx-auto md:max-w-3xl h-full rounded-sm">
      <picture>
        <source
          srcset={`static/${response.img}768.jpg`}
          media="(min-width: 480px)" />
        <img
          src={`static/${response.img}480.jpg`}
          class="img w-full"
          alt={response.imgDesc} />
      </picture>
      <div class="pr-1 text-sm text-right text-gray-600">{response.imgSrc}</div>
    </div>
  </header>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Summary" min={false} />
    <Paragraph>{response.summary}</Paragraph>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Key Points" min={false} />
    <List list={response.keyPoints} />
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Quote" min={false} />
    <div
      class="mt-3 py-4 d:mt-5 md:py-8 lg:py-12 max-w-md mx-auto md:max-w-3xl
      rounded-sm">
      <Quote quote={response.quote} />
    </div>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Strengths" min={false} />
    <List list={response.strengths} />
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Environment" min={false} />
    <List list={response.environment} />
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Irritations" min={false} />
    <List list={response.irritations} />
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Weaknesses" min={false} />
    <List list={response.weakness} />
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Personal Growth" min={false} />
    <Paragraph>{response.growth}</Paragraph>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall
      text="Working with {response.name == 'Otter' ? 'an' : 'a'}
      {response.name}"
      min={false} />
    <Paragraph>{response.dealingWithThem}</Paragraph>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Share Your Results" min={false} />
    <div
      class="flex justify-evenly mt-3 py-4 d:mt-5 md:py-8 lg:py-12 border-2
      max-w-md mx-auto md:max-w-3xl rounded-sm text-center">
      <LinkedIn
        class="share-button"
        {title}
        {url}
        summary={desc}
        source={url} />
      <Twitter class="share-button" text={title} {url} />
      <WhatsApp class="share-button" text="{title} {url}" />
    </div>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Your Results" min={false} />
    <div
      class="flex justify-evenly mt-3 py-4 md:mt-5 md:py-8 lg:py-12 max-w-md
      mx-auto md:max-w-3xl border-2 rounded-sm">
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.A} />
        <Number num={`${(($testScore.A * 100) / 57).toFixed(0)}%`} />

        <TitleSmall min={true} text={types[0].name} />
      </div>
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.D} />
        <Number num={`${(($testScore.D * 100) / 57).toFixed(0)}%`} />

        <TitleSmall min={true} text={types[1].name} />
      </div>
      <div class="flex flex-col items-center text-center">

        <Progress value={$testScore.B} />
        <Number num={`${(($testScore.B * 100) / 57).toFixed(0)}%`} />
        <TitleSmall min={true} text={types[2].name} />
      </div>
      <div class="flex flex-col items-center text-center">
        <Progress value={$testScore.C} />
        <Number num={`${(($testScore.C * 100) / 57).toFixed(0)}%`} />

        <TitleSmall min={true} text={types[3].name} />
      </div>
    </div>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="Other Types" min={false} />
    <div
      class="mt-3 py-4 d:mt-5 md:py-8 lg:py-12 border-2 max-w-md mx-auto
      md:max-w-3xl rounded-sm">
      <ImageGroup {switchActive} activeType={response.name} links={true} />
    </div>
  </div>

  <div class="my-8 md:my-16">
    <TitleSmall text="Take the Test Again" min={false} />
    <div
      class="mt-3 py-4 md:mt-5 md:py-8 lg:py-12 border-2 mx-auto max-w-md
      md:max-w-3xl rounded-sm text-center">
      <Button onClick={resetTest} text="Reset Test" />
    </div>
  </div>

</Wrapper>
