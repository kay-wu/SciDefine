# SciDefine
Google extension to identify &amp; define scientific abbreviations. Created for TOHacks 2019.

**Inspiration**
We both read papers in biology/medicine for our coursework and still find it difficult to read the heavy jargon without a lot of time and effort. It made us think about how people without a science background would be even more isolated from these essential discoveries. Through progress in implementing tools like these, we believe that cutting-edge scientific research could benefit members of society more directly and immediately than ever before, helping us all move past pressing issues such as climate change and the anti-vaccination movement.

**What it does**
SciDefine is a Google extension that recognizes, highlights, and shows long forms of biological abbreviations present in open access scientific journals.

**How we built it**
We used a Java implementation of the Schwartz-Hearst algorithm to process text from the paper and create a dictionary of abbreviations. The definitions were added to the DOM via JavaScript to generate interactive, responsive tooltips.

**Challenges we ran into**
We attempted to produce a fully-functional extension that would show our modifications directly on the journal article using AJAX in Javascript, but were unable to finish this in the limited time frame.

**Accomplishments that we're proud of**
This was our first hack-a-thon and despite not having much of a coding background, we are proud of creating something from start to finish.

**What we learned**
We've both taken theory-based classes in CS before, but we learned over the course of this event that applying your skills towards real projects is a different and very rewarding experience.

**What's next for SciDefine**
We will try to include one-sentence summaries of each term (sourced from Wikipedia or a similar database) in the tooltips. We are also planning to refine the Java implementation of the algorithm to prevent erroneous results.
