<script>
  import Question from "./Question.svelte";
  import { currentTestQuestion } from "../stores.js";

  const testBank = [
    [
      { description: "Likes control", value: "A" },
      { description: "Enthusiastic", value: "B" },
      { description: "Sensitive", value: "C" },
      { description: "Consistent", value: "D" }
    ],
    [
      { description: "Confident", value: "A" },
      { description: "Visionary", value: "B" },
      { description: "Calm", value: "C" },
      { description: "Reserved", value: "D" }
    ],
    [
      { description: "Firm", value: "A" },
      { description: "Energetic", value: "B" },
      { description: "Non-demanding", value: "C" },
      { description: "Practical", value: "D" }
    ],
    [
      { description: "Likes challenge", value: "A" },
      { description: "Promoter", value: "B" },
      { description: "Enjoys routine", value: "C" },
      { description: "Factual", value: "D" }
    ],
    [
      { description: "Problem solver", value: "A" },
      { description: "Mixes easily", value: "B" },
      { description: "Relational", value: "C" },
      { description: "Perfectionistic", value: "D" }
    ],
    [
      { description: "Bold", value: "A" },
      { description: "Fun-loving", value: "B" },
      { description: "Adaptable", value: "C" },
      { description: "Detailed", value: "D" }
    ],
    [
      { description: "Goal driven", value: "A" },
      { description: "Spontaneous", value: "B" },
      { description: "Thoughtful", value: "C" },
      { description: "Inquisitive", value: "D" }
    ],
    [
      { description: "Strong willed", value: "A" },
      { description: "Likes new ideas", value: "B" },
      { description: "Patient", value: "C" },
      { description: "Persistent", value: "D" }
    ],
    [
      { description: "Self-reliant", value: "A" },
      { description: "Optimistic", value: "B" },
      { description: "Good listener", value: "C" },
      { description: "Sensitive", value: "D" }
    ],
    [
      { description: "Persistent", value: "A" },
      { description: "Takes risk", value: "B" },
      { description: "Loyal", value: "C" },
      { description: "Accurate", value: "D" }
    ],
    [
      { description: "Takes charge", value: "A" },
      { description: "Motivator", value: "B" },
      { description: "Even-keeled", value: "C" },
      { description: "Controlled", value: "D" }
    ],
    [
      { description: "Determined", value: "A" },
      { description: "Very verbal", value: "B" },
      { description: "Gives in", value: "C" },
      { description: "Predictable", value: "D" }
    ],
    [
      { description: "Enterprising", value: "A" },
      { description: "Friendly", value: "B" },
      { description: "Indecisive", value: "C" },
      { description: "Orderly", value: "D" }
    ],
    [
      { description: "Competitive", value: "A" },
      { description: "Popular", value: "B" },
      { description: "Dislikes change", value: "C" },
      { description: "Conscientious", value: "D" }
    ],
    [
      { description: "Productive", value: "A" },
      { description: "Enjoys variety", value: "B" },
      { description: "Dry humor", value: "C" },
      { description: "Discerning", value: "D" }
    ],
    [
      { description: "Purposeful", value: "A" },
      { description: "Group orientated", value: "B" },
      { description: "Sympathetic", value: "C" },
      { description: "Analytical", value: "D" }
    ],
    [
      { description: "Adventurous", value: "A" },
      { description: "Initiator", value: "B" },
      { description: "Nurturing", value: "C" },
      { description: "Precise", value: "D" }
    ],
    [
      { description: "Independent", value: "A" },
      { description: "Inpirational", value: "B" },
      { description: "Tolerant", value: "C" },
      { description: "Schedueled", value: "D" }
    ],
    [
      { description: "Action orientated", value: "A" },
      { description: "Likes change", value: "B" },
      { description: "Peace maker", value: "C" },
      { description: "Deliberate", value: "D" }
    ]
  ];
</script>

<Question
  questionValues={testBank[$currentTestQuestion]}
  testLength={testBank.length} />
