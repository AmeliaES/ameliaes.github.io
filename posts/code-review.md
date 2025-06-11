---
title: "Code Review in Academia Workshop"
date: 2025-03-14
header:
    teaser: /assets/img/code-review_summary.png
---

![Summary photo of code review workshop](/assets/img/code-review_summary.png)

Yesterday we held a workshop on how to do code review in academia. We started with an engaging introductory presentation that involved audience discussion and participation, covering the fundamentals of code review including what it is, the benefits, how to prepare your code for review and how to review someone else’s code.

If you search online for code review practices there’s a lot of material on how this is done in industry, such as software development. There’s less emphasis on how code review is done in academia. Therefore, we first explored how code review is done in industry to see what methods might be suitable to apply to coding scenarios in academia.

We considered how coding in industry is often quite different to how coding is done in academia. In industry, typically developers work in teams on shared code bases, often with formal coding backgrounds like computer science. Code changes are usually reviewed by a colleague before merging into the clean, working copy via a pull request. This ensures mistakes in the code are more likely to be spotted increasing the quality of the code. However, in academia we code slightly differently, many are self-taught from non-computing backgrounds. Typically, one code base is worked on by only one researcher and usually none of this code gets reviewed! Further, each code base equates to a research output, usually a publication. So, if there are mistakes in the code, there may be mistakes in the results, which could lead to retracted publications.

Coding in isolation like this often means it can be whole scripts that need reviewing, rather than regular changes made to an existing code base. Additionally, it would mean the reviewer is probably not very familiar with the code and project being reviewed – highlighting how important it is to include good comments and documentation when preparing your code to be reviewed. Researchers new to coding may also not yet be familiar with technicalities such as git and pull requests – which although are fundamental to good coding practices, may initially form barriers to doing code review for these individuals. We talked about a slightly more accessible approach used by the [Oxford Code Review Network](https://github.com/OxfordCodeReviewNet/forum), where code you want to be reviewed could be posted as a GitHub issue. As an example of this I posted the “answers” from the practical session, where we simulated a code review, as a GitHub issue (eg. [https://github.com/AmeliaES/code-review-workshop/issues/2](https://github.com/AmeliaES/code-review-workshop/issues/2)).

The main point I wanted to stress is reviewing the code is more important than the tools used to review. Therefore, the practical part of this workshop focused less on the tools used for reviewing, such as how to do a pull request, and instead focused on the contents of a good quality review. This involved pairing up and reviewing two different code scripts in either R or Python. Attendees had a suggested checklist, discussed in the introductory presentation, as a starting point of things to look for when reviewing code. They spent 15 minutes to review each script, and after each review we spent 10 minutes on a whole-room discussion, sharing what each group had found.

We used [“padlet”](https://padlet.com/edmondsonstaita/code-review-in-academia-workshop-ymihytjxa6jollw2) to keep track of discussions throughout the workshop. This is an online whiteboard for people to post comments, questions and resources in one place. This meant there was a place for people to post their comments/questions as an alternative to speaking out in front of everyone.

| ![Screenshot of the padlet showing discussions from one of the code review exercises.](/assets/img/code-review_padlet.png) |
| :------------------------------------------------------------------------------------------------------------------------: |
|                   _Screenshot of the padlet showing discussions from one of the code review exercises._                    |

All the materials used during this workshop are reuseable and on GitHub [(https://github.com/AmeliaES/code-review-workshop)](https://github.com/AmeliaES/code-review-workshop) under an MIT licence. In summary, it was a fantastic first event for this series, with some excellent discussions and participation from our attendees on code review in academia.

Finally, I would like to thank my colleagues [Emily Ball](https://edwebprofiles.ed.ac.uk/profile/emilyball) and [Hannah Casey](https://edwebprofiles.ed.ac.uk/profile/hannah-casey) for helping me prepare for this event (and to Emily for helping out on the day), your time and feedback was always greatly appreciated. I'd also like to thank my colleague [Mark Adams](https://edwebprofiles.ed.ac.uk/profile/dr-mark-james-adams) for taking photos at the event, his continued support with coding club and coding expertise from which I have learnt a lot. We would also like to thank our funder, Amy Orben, for the [Improving Researcher Community Builder Award](https://www.orben.group/improving-research-community-builder-award). We won this award to expand a coding club I set up at the start of my PhD for our research group. We currently meet monthly to discuss coding problems, share resources and learn from each other. We are using this funding to host an additional series of special, in-person coding club sessions for the wider research community. For this event we used the funds for catering from the wonderful [Blue Sky Catering](https://www.blueskycatering.co.uk/). This event was hosted at [The Bayes Centre](https://bayes-centre.ed.ac.uk/).

| ![Event poster](/assets/img/code-review_poster.jpg) |
| :-------------------------------------------------: |
|               _Poster for the event._               |
