---
layout: single
title: "Data driven Dream analysis"
categories:
    - SciTech
tags:
    - Data Science
    - Dreams

header:
    image: /images/posts/dream/image15.jpeg
    teaser: /images/posts/dream/image15.jpeg       # Shrink image to 575 width
# classes: wide
author_profile: true

---
>Using data analytics tools to answer the question that intrigues us all, 'What is the meaning of my dreams?'

Hi\!   
My name is Hargun Oberoi, I am a mathematics graduate from India and having worked in the tech industry, like millions of people around the world, I’m grappling with what I can only describe as the biggest challenge of our century: A good night’s sleep.

Although I’ve been fairly active in [<span class="underline">sports</span>](https://timesofindia.indiatimes.com/city/goa/Maths-or-match-Hargun-is-game/articleshow/31757602.cms), the last few years have been difficult for my health, as I moved into a new city post-graduation, one choked with traffic, pollution, and all the stuff that makes any healthy lungs sick. 

![A car driving down a busy street filled with lots of traffic Description automatically generated](/images/posts/dream/image1.jpeg)

This led to a host of breathing difficulties which peaked in the year 2018.

It made me realise how much we take the simplest things in life for granted\! The epiphany aside, the biggest collateral fell squarely on my sleep and I would spend hours each night; at best, twisting and twirling, and at worst, gasping for air.

Doctors didn’t really seem to have much of an answer to this endemic, and the usual prescription would be an anti-histamine (or steroids).

This vicious cycle had a spiralling effect on my health; Lack of sleep meant regular medication, which affected my natural sleep cycle, leading to stronger doses. This went on for a while before I realised I had to do something about it.

That’s when I started the *‘**Rise Before Sunrise**’* project:  
A questionnaire of four simple sleep related questions, to be answered almost immediately after waking up.

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image2.png)

***How could this help?***  
If I couldn’t change my sleep cycle, I could at least try to see what went wrong, and if my troubles were getting worse; A sort of a thermometer for my sleep.

Fast forward to the end of 2019, I had amassed nearly two years worth of dream data\! With a little time and enough data on my hands, I decided to scope through it. Some of the more interesting finds are presented below.

**Litmus Test**

The basic data I captured had the following fields:

1.  Did I get up before sunrise? (Yes/No)

2.  What time did I wake up?

3.  What rating would I give my sleep?

4.  A description of what I could remember from my dream

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image3.png)

I *‘knew’* subjectively about my struggles and challenges, and changing sleep patterns because of a few lifestyle changes, but would the data reflect that knowledge? I decided to begin with a few basic questions to verify.

**Q1. How would my wake time compare between 2018 and 2019?**

I ‘*knew*’ that in 2019, I was waking up less erratically than 2018 because of a few lifestyle changes. So let’s start with a plot of the wake-up time.

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image4.jpeg)

The graph above is a bar plot with the x axis showing the wake up time and the y axis the percentage of days I woke up at that hour.

The graph above shows a lower sigma value (statistically representing variation in data) for 2019 as compared to 2018.  
It confirms that the ***variance*** of 2019 wakeup time is less than 2018.

So far so good\! Next question.

**Q.2: What about wake up time before and after August 2019?**

In August 2019, I decided to move out of my previous job. Ever since that change, I could sleep in a little late, if I didn’t feel well rested.  
***Was this obvious in the data representing my subsequent rising times? Let’s see.***

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image5.jpeg)

Wow\! Now that’s a lot more revealing. A quick look at the stats shows that although my average wake up hour was much more, the variance was again much lesser.

That made sense because I was consciously trying to create a morning schedule, and even on my worst days, I could get out of bed without being too miserable. Second test passed as well\!

**Q3. But what about the weekends before and after August?**

Weekday data may not be a true representation of one’s ‘actual’ wake up time. Ask any kid forced to wake up at 6 am to catch the school bus\!

But weekends often lets many of us rise as per our wish or convenience.  
After a few lifestyle changes post August, I felt confident that I was naturally rising more consistently, without alarms or my mom screaming in my ear.   
***So what does the plot say?***

![A picture containing screenshot Description automatically generated](/images/posts/dream/image6.jpeg)

Yes\! The wake-up time on average was fairly consistent, but there was a variance of an entire hour for weekends before and after August\! The data makes sense.

If the stats don’t make it clear, have a look at the two largest blue bars which are within the two largest red bars, confirming what I felt about my sleep cycle changes. I was rising more consistently post August, even on weekends.

**Dream Recall**

Time to ask more interesting questions. What about the actual content of my dreams?

I had noticed that on some days, I remembered a lot of my dream, and on the others, almost nothing. Was there a connection between the rating of my sleep (which I scored on 5) and the amount of dream recall?

I drew up a simple regression to see a connection, with the amount of text in y axis, and the dream score in the x axis.

![A screenshot of a computer Description automatically generated](/images/posts/dream/image7.jpeg)

Indeed, dream score showed some correlation with amount of recall.

To visualise more clearly, I decided to make a ***violin plot***. It’s a nice visualisation that lets you also imagine the spread of the points for a given y-value. i.e If it has a big belly for a given y-value, many points are identical.

![](/images/posts/dream/image8.jpeg)

Et voilà\! Can you guess the relationship of scores with amount of recall?

It appears that although high scores are not significantly associated with high recall, low scores seem to be strongly associated with a poor recall.

I decided to look for a study comparing dream recall and quality of sleep and the very first result on google was this [<span class="underline">research study</span>](https://www.ncbi.nlm.nih.gov/pubmed/22018568) conducted in 2011.

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image9.png)

Isn’t that amazing\! The quality of my sleep was somewhat associated with how well I could remember the dreams.

**Dream Sentiment Analysis**

So far I’ve only looked at objective features of my dreams, ie. wake-up time, sleep score, amount of recall, and while all such measures are important, I imagine it’s the subjective content of dreams that make them so fascinating.

The challenge of such a subject analysis is that I have more than 500 sleep entries to look into. So to deal with that, I had an idea.

Let’s imagine each dream as a ***movie***, say, Star Wars: Dream Wars\! and consider the dream entry as a ***review*** of that movie.  
Then, I could use a natural language model to ***classify*** the dream ***movie-review*** as a positive or a negative sentiment.

**And how would I do that?**  
Luckily, there are tools for just the task, like the Natural Language Toolkit library (<span class="underline">nltk</span>).  
NLTK has an IMDB dataset full of labeled movie reviews and some pretty good classifiers that can analyse a text and predict if a particular review has a positive or negative sentiment.

To explore the idea, I took a simple classifier ([<span class="underline">Naïve Bayes</span>](https://www.nltk.org/_modules/nltk/classify/naivebayes.html)) and trained it on the IMDB dataset. Then, I tried to predict the sentiment of a given dream. Below is a sample of how the output now looked like.

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image10.png)![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image11.png)An example of a hilarious positive dream — I guess I was watching a lot of Formula One racing![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image12.png)

Before I make any conclusions, I must admit that this method of *‘dream sentiment analysis*’ is highly misleading for the following reasons:

1.  ***Poor choice of classifier***  
    The classifier I’ve used (Naïve Bayes) does a very poor job in deriving meaning of sentences. It has no information of sentence structure, language modelling or meaning of words. It works well for movie reviews because certain words tend to be used often to describe a given sentiment.

2.  ***Inappropriate training examples***  
    Even if I had a good classifier, it wouldn’t have made that much of a difference because it was not trained on appropriate data.  
    The training must be done on data which is somewhat representative of the actual test cases but there doesn’t seem to be an obvious connection between the IMDB movie reviews and my dreams.

3.  ***What does the ‘goodness’ of a dream even mean?***  
    This a broader question. Suppose you had a super classifier, and a huge corpus of ‘dream data’ completely labeled like movie reviews. Could you trust it to classify a dream solely based on your word description of the events?

Unlike movies, that can have somewhat definitive measures of goodness like quality of acting, movie pace, and storyline, Dreams seem more about the *‘feel’* and the way we think about them is highly subject to personal interpretations.

Still, for the fun of it, below is a plot describing my wake-up time with the predicted sentiment of the dream.

![A screenshot of a cell phone Description automatically generated](/images/posts/dream/image13.jpeg)

It appears that my positive dreams had me sleep a little longer on average.   
Maybe the 10 mins extra led to happy ending to my dream?

My favourite plot, *‘The Violin’* gives a little more insight.  
It appears the belly of ‘negative’ dreams is obesely large around shorter dream recall, whereas positive dreams are more evenly spread across different lengths of dreams.

![A close up of a logo Description automatically generated](/images/posts/dream/image14.jpeg)

Perhaps, ‘negative’ sentiments made me want to recall less of the dream and ‘positive’ ones had me write some more

Instead of making wild, unverified conclusions, let me end my analysis on three surreal findings that made this exercise well worth my time.

1.  In the month of September last year, my sister gave birth to her firstborn, a daughter. But I dreamed of playing with my sister’s daughter almost two months before her birth. (without knowing the gender of the child)

2.  A quick search of all ‘[*<span class="underline">named entities</span>*](https://www.nltk.org/book/ch07.html)’ across my dreams in 2019 had almost every significant person and place of my life.  
    It seems as if my brain has a set of people and places, and it would shuffle them each night with a fairly recent theme to keep me entertained\!

3.  Below is a word-cloud of the most frequent words used in my dream entries of 2019.Apart from the commonly used words like ***‘dream’***, ***‘saw’*** & ***‘remember’***, ***‘mom’*** & ***‘dad’*** were quite high up the list.

![Dream Cloud 2019](/images/posts/dream/image15.jpeg)The 2019 Dream Cloud

*If you have questions, feel free to reach out to me at hargun3045@gmail.com*

*Thank you for reading and I wish you a year full of sweet dreams.*

*Project code on Github — [<span class="underline">https://github.com/hargun3045/DreamProject</span>](https://github.com/hargun3045/DreamProject)*
