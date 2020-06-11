<script>
  import { testIsActive } from "../stores.js";
  import Wrapper from "./Wrapper.svelte";
  import TitleLarge from "../elements/TitleLarge.svelte";
  import Paragraph from "../elements/Paragraph.svelte";
  import Button from "../elements/Button.svelte";
  import ImageGroup from "../elements/ImageGroup.svelte";

  const takeTest = () => {
    testIsActive.set(true);
  };
</script>

<style>
  .img-group {
    height: min-content;
  }
</style>

<Wrapper>

  <header class="pt-16">
    <TitleLarge text={['Two Minute', 'Personality Test']} hero={true} />
  </header>

  <div>
    <ImageGroup links={false} />
  </div>

  <div class="mt-8">
    <Paragraph>
      This is a short personality test based on the personality types developed
      by Dr. Gary Smalley and Dr. John Trent.
    </Paragraph>
    <Paragraph>
      This test is simple, but may still provide insightful information into
      your personality and personal relationships.
    </Paragraph>
  </div>

  <div class="button-wrapper mt-8 mb-8 text-center">
    <Button onClick={takeTest} text="Take the Test" />
  </div>

</Wrapper>
