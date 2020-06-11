---
layout: single
title: "Why I wish I knew Bayes Theorem"
categories:
    - SciTech
tags:
    - Data Science
    - Mathematics
    - Probability 


header:
    # image: /images/posts/univai/title.jpg
    teaser: https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/bae.png   # Shrink image to 575 width
# classes: wide
author_profile: true

---




> And how you may benefit from knowing it

**Bayes theorem** — The confusing relation you may vaguely remember from high school probability class that made you think, *“When am I going to use any of this in real life?”*

![](https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/bae.png){: .align-center}

This blog post is my about my painful and confusing medical journey to fix my breathing difficulties, and finally finding answers to bothering questions, thanks to a simple but powerful math equation.

To tell you that, I must tell you how I developed a breathing problem at the first place, what I did to try and fix it, and finally how that simple math equation *could have* helped me decide better.

So let’s begin with a quick rewind to the year 2017, a year when I was rocking in my first job after college as a project manager at Cisco Systems, having learned business-level french in 6 months and achieved a promotion after my very first year.

Despite my professional successes, my health was declining, as the city I was living in, Bangalore, usually known as the **city of rivers**, saw a record increase in pollution, warming and water contamination. Such a worsening state of the city had a negative effect on me, as simple jogs around my neighbourhood left me with a perpetually stuffed nose and frequent breathing difficulties leading to headaches and sleepless nights.

![](https://static.toiimg.com/thumb/52405697.cms?resizemode=4&width=400){: .align-center}

<p style="text-align: center;font-style: oblique">City of <b>frothing</b> lakes</p>

All this took a turn for the worse at the end of the year, as I woke up one Sunday morning, not being able to breathe at all\! But the worst was yet to come, as a routine visit to the emergency room at a nearby hospital, became the start of a nightmare when instead of my regular nasal spray prescriptions, the emergency physician suggested that I should consider a nasal correction surgery to aide my breathing.

At the time, this seemed like the **holy grail** solution, and as a bachelor of engineering, it made complete sense to me\! 

*If the nasal canal is choked, why not just steam roll through it and make space for air?*

So with that idea, as my company prepared for an end of year shutdown in December, I met the first Otolaryngologist I could find and described to him my troubles. We quickly agreed upon the said surgical intervention (called Septoplasty)

As a part of my *research, a* quick search on realself.com suggested that **91%** of those operated upon, approved the surgery, which was quite impressive.  
So within two days, I was in a hospital gown, ready for surgery\! 

At that time, it fit perfectly. A surgery with a recovery time for 5 days, and I’d be all set to go back to Bangalore and rock 2018\!

20/20 hindsight, has me wondering how the hell did a take it so lightly?

**Post Surgery**

The surgery, apparently, was a success (in the words of the doctor, obviously), but I had a huge stuffing in my nose, which made it difficult for me to make any judgement.   

<figure style="width:300px;" class="align-center">
  <img src="https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/stuffednose.jpg" alt="">
    <figcaption style="text-align:center">I will survive!</figcaption>
</figure> 


I spent the next two days breathing from my mouth, and finally after painfully waiting for what seemed like a decade, my nose was cleared and ready to pump air\!

But, like the returns promised on the next *hotshot stock* I didn’t feel like I gained anything at all. My questions and concerns were politely ignored, and the doctor said it usually takes about 4 weeks for full breathing function to resume.   
Okay No Problem\!   
And just like that, four weeks of the new year passed away, but with my optimism waning with each passing day.   
The response by my surgeon remained the same. “It takes time”, and after some time, I stopped getting any responses from him.

So I waited, but my symptoms exacerbated. I can’t explain what happened, but I felt unusually fatigued, more breathless and with a general sense of malaise.

The trouble turned on its head in late February, as I just couldn’t sleep anymore. Google searches ended up being a rabbit hole, as I found **a good number** of people expressing similar issues, with no respite. The subjective responses ranged from hopelessness to anger, but with no directive to improve the situation.

Frankly speaking, one night, I broke down, but when I *tried* to cry, the tears made my breathless, and I couldn’t even cry anymore, and that’s when I lost it\!  
Something was wrong, and with not much changed in my life recently, it had to be the medical intervention, and I had to figure out how I could fix it.

So, I spent the next three months, meeting all sorts of doctors, with an honest attempt to find answers, but the trend appeared as though a doctor with a particular speciality, somehow diagnosed me with something he was specialised in\! (Kind of like the doctor’s edition of *"if you have a hammer, everything seems like a nail")*


I felt I was walking on the edge of ambiguity among medics, and I didn’t want to be the *life is so cruel* guy. I just wanted to breathe well and be happy, and not stress about the newly welcomed misery of my life (which was reminded to me with every breath)

So after months of medical consults, self study and pure frustration, I put aside my *search for answers* and spent the remaining part of the year, and the years ahead, in doing whatever I could, to take my mind off this issue.

That search for a *distraction* somehow resulted in an increased interest in mathematics of data science. In sifting through those concepts, I came across a simple concept all the way from high school, but which underpins major principles in machine learning, **Bayes Theorem.**  
In the most unusual case of “*finding your destiny on the path to avoid it*”, this little rule ended up giving me some answers to my enduring questions.

## Bayes Theorem

Before we go ahead, it warrants to give you a quick recap of what exactly Bayes Theorem talks about, which  pivots on something called **conditional probability**

For any events  𝐴  and  𝐵  with positive 
probabilities,

If $A$ and $B$ are events with $P(B)\gt0$,
then the conditional probability of $A$ given $B$, denoted by $P(A| B)$, is defined as

$$P(A|B) = \frac{P(A\cap B)}{P(B)}$$

If the above is clear, the road to Bayes Theorem is just one stop away.

First, let's shuffle the equation to get: 

$$P(A \cap B) = P(B) P(A|B)$$

<p style="text-align: center;">And similarly</p>

$$P(A \cap B) = P(A) P(B|A)$$

<p style="text-align: center;">Hence</p>

$$P(B) P(A|B)= P(A) P(B|A)$$

And from the above, Bayes Theorem is another simple shuffle from the left numerator to the denominator

$$P(A|B) = \frac{P(B|A) P(A)}{P(B)}.$$

Often it is difficult to know the *unconditional probability* of event $B$ but we can compute it easily using the Law of Total Probability.

Let  𝐴1,…,𝐴𝑛  be a partition of the sample space  𝑆  (i.e., the  𝐴𝑖  are disjoint events and their union is  𝑆 ), with  𝑃(𝐴𝑖)>0  for all  𝑖 . Then:

$$P(B) = \sum_{i=1}^n P(B|A_i) P(A_i)$$

If the above concepts are still unclear, I suggest you read this excellent blog post([Bayes Rule and Serological Testing](https://covid19.posts.ai/2020/04/04/bayes-rule-and-serological-testing.html)) by Harvard professor and Univ.Ai founder [Dr. Rahul Dave](https://www.linkedin.com/in/dr-rahul-dave-0115364)

It requires no prior knowledge of the concepts and uses a real life case study of covid-19 serological testing to make Bayes Theorem comprehensible. 

## Hindsight 2020 but foresight Legally Blind?

Back to my story.

So now, powered with Bayes theorem, let’s fast forward to the night of **10th June 2020**, the night I was ready to tackle the question from three years ago. 

*“If roughly 90% of people were happy with the surgery, how come I landed in the wretched 10%? Why me\!”*

Time to employ conditional probability and Bayes theorem.


According to popular online reviews, approximately 90% of responders were happy with the outcome. (We assume that this is a true representation of all patients undergoing this particular surgery)

### What makes me different from the other patients?

Out of the several medics I visited, one was a pulmonologist, who magically concluded that I was asthmatic (although I had no discernible history of asthma before the operation, and I was an [active sportsperson](https://www.bits-pilani.ac.in/Uploads/Goa_Upload/Goa_Media/Times-of-India_10-03-2014.pdf) throughout university)

He based his theory on an IgG test, which showed values that were abnormally high in my case. This test is a sign of a heavy allergic reaction in the body, but the test cannot determine what causes the allergy.

The asthma was a stretch, but it was clear that I had significant allergies.  

Later, it became clear that many people with symptoms like my own are regular candidates for Septoplasty, for similar issues of breathing difficulties.

The other significant group of people opting for Septoplasty are those with significant nasal deviations, leading to breathe difficulties.  

This is surprisingly not uncommon for people of the Indian subcontinent, with doctors claiming that 90% of Indians have some form of nasal deviation. (Check yourself in the mirror, your nose may be crooked too)

So we have two significant categories of surgery opters, i.e. people with allergies, and people with deviations.

To simplify the argument, let’s term people with deviations as those not having allergies, and so post-surgery, we have four categories, i.e. combinations of Unhappy/Happy, and Allergic/Not Allergic

Below is an *Emoji Matrix* that conveys the ideas.

![](https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/RelationsOnly.png)

$H$ and $NH$ are the *Happy* and the *Not Happy* groups
and $A$ and $NA$ are the *Allergic* and *Not Allergic* group

In terms of probability, my problem is to find the odds of having a satisfactory result, given that I belong to the Allergic class. i.e.
$$P(Happy|Allergic)$$

Employing Bayes theorem we get


$$P(Happy|Allergic) = \frac{P(Allergic/Happy)*P(Happy)}{P(Allergic)}$$

Using *Law of Total Probability* from above, we can calculate the denominator as a sum of conditional probabilities.

$$P(Happy|Allergic) = \frac{P(Allergic/Happy)*P(Happy)}{P(Allergic/Happy)*P(Happy) + P(Allergic/NotHappy)*P(NotHappy)}$$
<br></br>
Now, $P(Happy)$ we know from realself.com and $P(Allergic|Happy)$ can be approximated from the subjective reviews.

Taking $P(Allergic|Happy)= 10\%$ and $P(Allergic|NotHappy)= 90\%$ 

(as very few of those with happy reviews had allergies, and most of the unhappy reviewers showed signs of allergic pre-conditions)

With those values, our *Emoji Matrix* now looks like this:

![](https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/EmojiMatrix.png)

Now, we can answer the relavent question,

$$P(Happy|Allergy) = \frac{9}{9+9} = 50\%$$

So the odds of a **happy** outcome, given that I was allergic was just about **50%** \!\!\!

Now, I underscore that several assumptions were made in the lead up to this figure, which ought to be well researched and studied further.

However, without doubt, the figure reveals how misleading the original conclusion of 91% happiness was.

At **91%** it seems a sure bargain and a no-brainer to undergo surgery. Odds look really good.

But at roughly 50%?

Would I be willing to risk a medical intervention, on a sensory receptor that is responsible for a breath every other second, on just about **50%** chance of satisfaction\!?\! Will I place my odds of medical 
misery on a flip of a coin? **Absolutely not**\!

If I had such information, I’d rather be compelled to try every other possible non-invasive remedy, from yoga to a trip to the Himalayas, before taking such a leap of faith, and gamble on life-long repercussions. 

Despite the gross approximations, while writing this post, I came across this research study from [National Center for Biotechnology Information](https://pubmed.ncbi.nlm.nih.gov/19936374/) on the effects of allergies on septoplasty outcomes.

Alarmingly, the results of this detailed study had a similar conclusion to the one we made above!

[![](https://raw.githubusercontent.com/hargun3045/blog-dump/master/bayes-images/allergy.png)](https://pubmed.ncbi.nlm.nih.gov/19936374/)



### Parting thoughts

As the say, in hindsight there is clarity, but Bayes theorem gives solid lessons for the future as well. 
* **Unconditional** probabilities such as *surgery success rates*, or *mortality rates* of infections, are all a facade, and mask too much information to be of serious use.   
* It’s essential to at least try to make some ***conditional*** estimates, and carefully examine how the odds change for your specific condition **before** you take a decision.
* A second unbiased opinion, is conditional probability in action. Call it a Bayesian blessing, because you can feel more confident about your conclusions.

So next time, before you consider a hair transplant, botox or lasik surgery, and feel empowered by the stats on some website like [realself.com](realself.com), or [doconline.com](doconline.com), take a moment to ask yourself,   
***“Do these general statistics apply to me?”*** 

And if you don’t have a definitive answer, call a friend who scored an A grade in Stats 101 before you make a decision, or ask your mom, she knows better than Bayes.

For more news and views, stay tuned to GenSecTimes.
