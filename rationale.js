/* ============================================================================
   RATIONALE — the redesign's design decisions, written by its designer.
   Hand-written (build_dashboards.py never touches this file).

   Keyed by dashboard id. For each dashboard:
     problem    the designer's diagnosis of the Argon version (one or two sentences)
     approach   the redesign's idea in one sentence
     decisions  what the redesign changed:
       title      short name of the decision
       from / to  a few words each: how Argon did it → how the redesign does it (from is optional)
       why        one or two sentences of reasoning
       rubrics    criterion names (the text before the first " — " in the rubric) that check this
                  decision; shown as links to their rubric rows
       judgment   optional: what no rubric check measures. A decision with no rubrics is
                  shown as designer judgment.
   ========================================================================== */
window.RATIONALE = {
  'city-stats': {
    problem: 'It tried to show everything at once: 12 districts, four metrics, three cities, and a control bar so full it cut off the Reset button. Users didn’t know where to start, and the way back was hidden.',
    approach: 'Tell one story from left to right, with the 3D city as the way in.',
    decisions: [
      { title: 'One story, left to right',
        from: 'Everything on screen at once', to: 'Choose → explore → go deeper',
        why: 'Left: pick the city and see it in three numbers. Centre: explore the city. Right: dig into the metric and district you picked.',
        rubrics: ['It works', 'Layout and composition', 'Filter or drill-down', 'Technical polish'],
        judgment: 'The reading order itself' },
      { title: 'The 3D city is the way in',
        from: 'Values in a bar chart', to: 'Districts as buildings you click',
        why: 'Clicking a district flies the camera to it and the spotlight card answers at once. The bars became the buildings, changing height in real time, so values are easier to read.',
        rubrics: ['Motion and feedback'],
        judgment: 'Whether buildings read better than bars' },
    ],
  },

  'network-graph': {
    problem: 'It was made for people who already know graph theory: terms such as “modularity” and “average degree” appeared on the first screen.',
    approach: 'Follow the order in which a person thinks about their network, in plain language.',
    decisions: [
      { title: 'Ordered the way people think',
        from: 'Built for graph experts', to: 'State → see → understand',
        why: 'First “how is my network?”, then “I want to see it” (the graph, the largest panel), then “I want to understand it” (growth, distribution and top entities, below).',
        rubrics: ['Layout and composition'] },
      { title: 'One control panel',
        from: 'Controls crowded in the top bar', to: 'Filter · layers · appearance',
        why: 'All controls sit in one side panel in three groups, each with a short sentence saying what it does.',
        rubrics: ['It works', 'Technical polish'] },
      { title: 'Plain language',
        from: '“Modularity”, “average degree”', to: 'Entities, connections, communities',
        why: 'Technical vocabulary was replaced with words anyone can follow.',
        rubrics: ['Axes, units and legends'],
        judgment: 'Word choice' },
      { title: 'Timeline under the graph',
        from: 'Nodes popped in and out', to: 'The network changes where time is set',
        why: 'The user watches the network change in the same place where they control time.',
        rubrics: ['Patterns over time'] },
      { title: 'Dark theme, for a reason',
        to: 'Data colours stand out',
        why: 'With hundreds of points on screen, a dark background makes the data colours pop and is less tiring in long sessions.',
        rubrics: ['Large dataset', 'Color', 'Accessibility'],
        judgment: 'Eye strain in long sessions' },
    ],
  },

  'weather-trends': {
    problem: 'The prompt asked for a simple app; the model delivered a weather-station panel (UV index, pressure, dew point, 30-year average). Only one chart fit on screen, and nothing said it was the user’s location.',
    approach: 'Start from the phone’s Weather app: simple, personal, readable at a glance.',
    decisions: [
      { title: 'A pattern everyone knows',
        from: 'Weather-station readings', to: '“Good morning”, your city, today',
        why: 'Like the phone’s Weather app, the screen opens with a greeting, the user’s city and today’s weather up front. Nothing to learn.',
        rubrics: ['Local weather'],
        judgment: 'Familiarity with the phone app' },
      { title: 'The two charts that matter',
        from: 'One chart fits on screen', to: 'Temperature + rain, no scrolling',
        why: 'Temperature and rain sit together in the first view.',
        rubrics: ['Clean dashboard'] },
      { title: 'Subtitles that state the takeaway',
        from: 'Subtitles explain the controls', to: '“Take an umbrella”',
        why: 'Each chart’s subtitle gives the conclusion (“a little warmer through the week”, “take an umbrella”), so people know what to do without analysing the data.',
        rubrics: [] },
    ],
  },
};
