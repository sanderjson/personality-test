<script>
  import { testIsActive } from "../stores.js";
  import Wrapper from "./Wrapper.svelte";
  import TitleLarge from "../elements/TitleLarge.svelte";
  import Paragraph from "../elements/Paragraph.svelte";
  import Button from "../elements/Button.svelte";
  import ImageGroup from "../elements/ImageGroup.svelte";
  import TitleSmall from "../elements/TitleSmall.svelte";

  const takeTest = () => {
    testIsActive.set(true);
  };
</script>

<Wrapper>

  <header class="pt-16">
    <TitleLarge text={['Two Minute', 'Personality Test']} hero={true} />
  </header>

  <div class="mt-8 md:mt-16">
    <!-- <TitleSmall text="Four Types" min={false} /> -->
    <div
      class="mt-3 py-4 d:mt-5 md:py-8 lg:py-12 max-w-md mx-auto
      md:max-w-3xl rounded-sm">
      <ImageGroup links={false} />
    </div>
  </div>

  <div class="mt-8 md:mt-16">
    <TitleSmall text="About" min={false} />
    <Paragraph>
      This is a short personality test to help you identiy your communication
      style. The test is based on the work of Dr. Gary Smalley and Dr. John
      Trent. This simple test may help provide insightful information into your
      personality and personal relationships.
    </Paragraph>
  </div>

  <div class="my-8 md:my-16">
    <div
      class="mt-3 py-4 md:mt-5 md:py-8 lg:py-12 mx-auto max-w-md
      md:max-w-3xl rounded-sm text-center">
      <Button onClick={takeTest} text="Take the Test" />
    </div>
  </div>

</Wrapper>
