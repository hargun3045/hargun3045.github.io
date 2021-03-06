---
layout: single
title: "Star Wars: The Corona strikes back!"
categories:
    - SciTech
tags:
    - Data Science
    - CoVID-19


header:
    # image: /images/posts/univai/title.jpg
    teaser: /images/posts/univai/title.jpg    # Shrink image to 575 width
# classes: wide
author_profile: true

---



> In a galaxy, far, far away... A virus returns for revenge

Covid-19, or popularly known as the Coronavirus has taken the world by storm, sending people worldwide into self-isolation and global stocks down the drain.   
Herculean efforts are being taken by government agencies around to contain the spread, although we’re in no shortage of ‘creative minds’ deploying ‘alternative’ methods to tackle the problem.

Here’s just a taste.

[![](/images/posts/univai/image1.jpeg)](https://www.youtube.com/watch?v=4dPd708Sk98)

It's an exhausting exercise to follow all the related news, take necessary precautions and track all new cases.

So for this post, let’s try to forget the bone-chilling present of infections, sickness and deaths, and extend our imaginations to look into the far future, a new, futuristic world.


It’s the year 2050, and you can drive a Tesla on Mars (only at a discount price of 3 million bitcoin)

![](/images/posts/univai/tesla.jpg)

COVID-19 is a thing of the past, when millions of people were saved either by a new vaccination developed by an Israeli scientists or by simply chanting **Go Corona, Corona Go** in unison.

But quietly, an ‘antigenic drift’ has taken place, and a Chinese man eating ‘martian bat-soup’ in the ‘Sea of Tranquility’ has no idea he is going to be patient zero of **COVID-49**. History repeats itself, a new strain, with the same symptoms has caused another pandemic.

![](/images/posts/univai/image2.jpeg)

But this time we have a more serious problem\! Almost all doctors died tackling the COVID-19.  
Well, not all are dead, but those who didn’t die are now data scientists because *‘the pay is just so good\!’* while the rest are dentists, which really doesn’t count. We just don’t have enough medics to tackle a fresh outbreak.

With an influx of patients and limited ICU beds, the limited healthcare workers have to decide, which among the thousands people standing outside hospitals should get care first.

## Enter Big Brother — Healthcare edition

A doctor turned data scientist turned bitcoin miner has an idea\! 

With artificial intelligence now pervasively used to decide on almost all problems, from [job interview results](https://www.insidehighered.com/news/2019/11/04/ai-assessed-job-interviewing-grows-colleges-try-prepare-students) to how much refund you'll for your [grocery delivery complaint](https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/milk-delivery-startup-milkbasket-to-expand-its-engineering-team-five-fold-in-9-months/articleshow/65759985.cms?from=mdr), why not build a system that decides if you need ‘urgent’ medical attention or not?

Since everything about this outbreak is the same, except that we have no vaccination against it yet, all we need is a dataset, and we’re done\!   
And guess what, a quick search on twitter reveals just exactly this type of dataset. 

[![](/images/posts/univai/image3.png)](https://twitter.com/kdpsinghlab/status/1239416911668092928)

It says for ‘**educational purpose only**’ but who cares? It’s not like we’re writing a research paper, we’re building a limited liability company\!

## Building the ‘Deep Mind’

What we want the system to do is to intake a set of parameters, and give out an answer, ‘High Urgency’ or ‘Low Urgency’. 

If the answer is the former, we give the patient an ICU bed, and if it’s not, we’ll ask them to go home (or force them, depending if you’re on Communist Mars or Democratic Europa)

Jokes apart, building a deep learning model has become really easy using a high level python library called fastai, below is an extract of how’s its done.

### Building a classifier using the [fastai](https://www.fast.ai/) library 

```python
from fastai.tabular import *
```

```python
df.head(3)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ID</th>
      <th>age</th>
      <th>sex</th>
      <th>cough</th>
      <th>fever</th>
      <th>chills</th>
      <th>sore_throat</th>
      <th>headache</th>
      <th>fatigue</th>
      <th>urgency_of_admission</th>
      <th>...</th>
      <th>province</th>
      <th>country</th>
      <th>latitude</th>
      <th>longitude</th>
      <th>geo_resolution</th>
      <th>date_onset_symptoms</th>
      <th>date_admission_hospital</th>
      <th>date_confirmation</th>
      <th>date_death_or_discharge</th>
      <th>source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>1</td>
      <td>30.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Low</td>
      <td>...</td>
      <td>Anhui</td>
      <td>China</td>
      <td>31.646960</td>
      <td>117.716600</td>
      <td>admin3</td>
      <td>2020-01-18</td>
      <td>2020-01-20</td>
      <td>2020-01-22</td>
      <td>NaN</td>
      <td>http://ah.people.com.cn/GB/n2/2020/0127/c35826...</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>47.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Low</td>
      <td>...</td>
      <td>Anhui</td>
      <td>China</td>
      <td>31.778630</td>
      <td>117.331900</td>
      <td>admin3</td>
      <td>2020-01-10</td>
      <td>2020-01-21</td>
      <td>2020-01-23</td>
      <td>NaN</td>
      <td>http://ah.people.com.cn/GB/n2/2020/0127/c35826...</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3</td>
      <td>49.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Low</td>
      <td>...</td>
      <td>Anhui</td>
      <td>China</td>
      <td>31.828313</td>
      <td>117.224844</td>
      <td>point</td>
      <td>2020-01-15</td>
      <td>2020-01-20</td>
      <td>2020-01-23</td>
      <td>NaN</td>
      <td>http://ah.people.com.cn/GB/n2/2020/0127/c35826...</td>
    </tr>
  </tbody>
</table>
<p>3 rows × 23 columns</p>
</div>



### Independent variable

This is the value we want to predict

```python
y_col = 'urgency_of_admission'
```

### Dependent variable

The values on which we can make a prediciton

```python
cat_names = ['sex', 'cough', 'fever', 'chills', 'sore_throat', 'headache', 'fatigue']
```

```python
cont_names = ['age']
```

```python
data = (TabularList.from_df(df, path=path, cat_names=cat_names, cont_names=cont_names, procs = procs)
         .split_by_idx(list(range(660,861)))
         .label_from_df(cols=y_col)
         .add_test(test)
         .databunch()   )
```

```python
data.show_batch(rows=10)
```


<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>sex</th>
      <th>cough</th>
      <th>fever</th>
      <th>chills</th>
      <th>sore_throat</th>
      <th>headache</th>
      <th>fatigue</th>
      <th>age_na</th>
      <th>age</th>
      <th>target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>male</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>-1.3107</td>
      <td>High</td>
    </tr>
    <tr>
      <td>male</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>-1.1236</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>1.2461</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>female</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>0.4354</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>-0.0635</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>1.5579</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>1.7449</td>
      <td>High</td>
    </tr>
    <tr>
      <td>female</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>0.5601</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>female</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>False</td>
      <td>-0.7495</td>
      <td>Low</td>
    </tr>
    <tr>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>False</td>
      <td>-0.9989</td>
      <td>Low</td>
    </tr>
  </tbody>
</table>


### Training the deep learning model

Here we build our machine learning model that will learn from the dataset to classify between patients

```python
learn = tabular_learner(data, layers = [200,100], metrics = accuracy)
```

```python
learn.fit(5, 1e-2)

{Accuracy:83.85}
```
And we're done! Our model is roughly 84% accurate on a test set. Let's use that to make some predictions.


### Making predictions

```
testdf[testdf.predictions == 'High'][['predictions','age','sex','cough','fever','chills','sore_throat','headache']].iloc[:13]
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>predictions</th>
      <th>age</th>
      <th>sex</th>
      <th>cough</th>
      <th>fever</th>
      <th>chills</th>
      <th>sore_throat</th>
      <th>headache</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>666</td>
      <td>High</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>680</td>
      <td>High</td>
      <td>50.0</td>
      <td>male</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>701</td>
      <td>High</td>
      <td>60.0</td>
      <td>male</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>703</td>
      <td>High</td>
      <td>18.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>712</td>
      <td>High</td>
      <td>0.0</td>
      <td>male</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>731</td>
      <td>High</td>
      <td>20.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>733</td>
      <td>High</td>
      <td>NaN</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>743</td>
      <td>High</td>
      <td>20.0</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>746</td>
      <td>High</td>
      <td>NaN</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>747</td>
      <td>High</td>
      <td>NaN</td>
      <td>male</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>760</td>
      <td>High</td>
      <td>12.0</td>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>762</td>
      <td>High</td>
      <td>18.0</td>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>771</td>
      <td>High</td>
      <td>20.0</td>
      <td>female</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>
</div>

It’s quite peculiar that if you’re someone with reporting symptoms of sore throat and chills, you’re likely to be sent back home\!


## Visualising the dataset

Now the author clearly mentioned that the dataset is flawed at best. But let’s go ahead and make some visualisations to see what’s wrong, and why our model has sent all people with ‘sore throat and chills’ back home.



![](/images/posts/univai/output_2_0.png)

The above graph shows that the mean age of people classified under **High Urgency** is *lower* than those under **Low Urgency** which clearly is against established study that [older age people are at greater risk](https://www.vox.com/2020/3/12/21173783/coronavirus-death-age-covid-19-elderly-seniors?__c=1)



![](/images/posts/univai/output_3_0.png)

The dataset is less revealing on the gender of the patients, and in fact correctly shows higher hospitalisation of men above the age of 80 than women.


![](/images/posts/univai/output_4_0.png)

But the biggest reveal is in the above graph as it shows the percentage of hospitalisations for patients of different symptoms.

According to the dataset, those with **sore throat** and **chills** have significantly lower than average 'High Urgency' hospitalisations, and this is what our model ended up learning; If someone shows these two symptoms, *send them back home*!

But from a medical stand point, it's preposterous to assume such a criteria. Our model errs because the data is poor. It won't matter if it's a deep learning model, or a simple linear regression.

## Concluding remarks

A closer look at the data suggests (as mentioned by the author) that it has severe limitations. Building a model with even 99%+ accuracy on such a dataset is a dangerous exercise if it is used to make actual decisions.

But instead imagine we had a dataset that on observing, gave every good reason of its validity. Should a deep learning system replace qualified medical professionals to make such a decision?

The obvious answer is **No**.

But in the actual case of covid-19, there is a severe crunch of medics who are overworked and fatigued each day as the count rises. See [this post](https://www.nbcnews.com/health/health-care/who-gets-ventilator-hospitals-facing-coronavirus-surge-are-preparing-life-n1162721) on how difficult it is getting for them to decide which patients should get care first.

Perhaps the best option is to not reach such a stage that requires such an expedient solution. 
I believe that we can’t afford to ‘automate’ a decision-making process on matters of life and death.

**So how do we avoid stressing our healthcare system?**  

Wash your hands frequently, don’t get infected and go out and don't infect ‘at-risk’ people. 

And for a thorough instruction, look no further than these policemen from Kerala, taking matters in their own ‘hands’ and shaking some booty too\!

[![](/images/posts/univai/image4.jpeg)](https://www.youtube.com/watch?v=Nun2xJdY68E)

For more news and views, stay tuned to GenSecTimes.
