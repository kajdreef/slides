name: inverse
layout: true
class: center, middle, inverse
---
# Hierarchical Abstraction of Execution Traces for Program Comprehension

## Yang Feng
### Kaj Dreef, James A. Jones, and Arie van Deursen
---
layout: false

# Outline
1. Introduction
2. Motivation
3. Approach
5. Evaluation
6. Discussion
7. Conclusion

<!-- ---
template: inverse

# Introduction -->

---

## Introduction
+ Software comprehension is essential while performing maintenance tasks

+ Understanding runtime behavior is complex because execution traces:
    1. are long, *i.e.,* 1.000.000's of events;
    2. contain many low-level details;
    3. contain no abstractions.

+ Previous work focused on:
    + Visualizing traces
    + Discover phases in the execution


<!-- ---
template: inverse

# Motivation -->

---

## Motivation

+ Challenge 1: Information overload

+ Challenge 2: Behaviors Contain Sub-Behaviors

+ Challenge 3: Incomprehensible Execution Traces

<!-- ---

template: inverse

# Approach
## -- Sage -- -->

---

## Sage
+ **Goal**: *Hierarchically abstracting an execution trace into high-level phases.*

--

+ Approach:
  1. Data Collection & Phase Detection
  2. Model Building & Execution Abstraction

![:scale 90%](images/framework.jpg)

---

.left-column[
## Sage
#### Data Collection

]
.right-column[

+ Dynamic Instrumenter (<a href="https://github.com/spideruci/blinky">Blinky</a>)

+ Collect **only** method-invocation enter events

+ Each method-invocation event is captured as a triple of:
    + Execution ID
    + Method Signature
    + Call depth
]

???



---
.left-column[
## Sage
#### Data Collection
#### Phase Detection
]
.right-column[
Simplified steps of the phase detection:
  1. Input of phase detection is an execution trace

  <p>
      <img src="images/datastructure/execution-trace.png" style="width: 80%"></img>
  </p>
]

???

---
count: false
.left-column[
## Sage
#### Data Collection
#### Phase Detection
]
.right-column[
Simplified steps of the phase detection:
  1. Input of phase detection is an execution trace

  <p>
      <img src="images/datastructure/calltree.pdf.jpg" style="width: 95%"></img>
  </p>
]

???

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
]
.right-column[
Simplified steps of the phase detection:
  1. Input of phase detection is an execution trace

  2. Use the call depth to locate the phase boundaries
  <p>
      <img src="images/datastructure/phases.pdf.jpg" style="width: 100%"></img>
  </p>
]
???

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
]
.right-column[
Simplified steps of the phase detection:
  1. Input of phase detection is an execution trace

  2. Use the call depth to locate the phase boundaries

  3.  Finally, the result is a preliminary phase tree
  <p>
      <img src="images/datastructure/tree-structure.pdf.jpg" style="width: 50%"></img>
  </p>
]
---
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### Model Building
]
.right-column[
**Goal**: *Train model to quickly abstract future execution traces.*

]

---
count:false
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### Model Building
]
.right-column[
**Goal**: *Train model to quickly abstract future execution traces.*

+ **Input**: A set of preliminary phase trees

+ **Approach**: 
    1. Duplicate detection
    2. Phase clustering (Agglomerative clustering)
    3. Frequent pattern mining
    4. Semantic labeling (using TF-IDF)

+ **Output**: A model, which can be seen as a dictionary of recurrent phases.
]


---
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### Model Building
#### Execution Abstraction
]
.right-column[
+ At this moment we have:

    + an execution trace
    + a model containing the recurrent phases

]

---
count: false
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### Model Building
#### Execution Abstraction
]
.right-column[
+ At this moment we have:
    + an execution trace
    + a model containing the recurrent phases

+ Abstracting an execution trace needs steps:
    1. Phase detection
    2. Duplicate detection
    3. Apply the model
    4. If necessary, reapply labeling on phases that are not in the model.
]

<!--- EVALUATION....--->
<!-- ---
template: inverse
# Evaluation -->

---

.left-column[
## Evaluation
#### Research Questions
]
.right-column[

**RQ1**: *To what extent does SAGE alleviate the information overload challenge?*


**RQ2**: *Does the hierarchical phase abstraction provide substantially different levels of granularities of behavior?*


**RQ3**: *To what extent are the labeled phases of our approach com- prehensible for developers?*

]
---

.left-column[
## Evaluation
#### Research Questions
#### Methodology
]
.right-column[
1. Quantitative (**RQ1** and **RQ2**):

    + Three projects: *NanoXML*, *Javac*, and *Jedit*.
        1. Determine the reduction in number of phases for each step of the process
        2. Determine number of phases at each level.
]

---
count: false
.left-column[
## Evaluation
#### Research Questions
#### Methodology
]
.right-column[
1. Quantitative (**RQ1** and **RQ2**):
    + Three projects: *NanoXML*, *Javac*, and *Jedit*.
        1. Determine the reduction in number of phases for each step of the process
        2. Determine number of phases at each level.

2. User study (**RQ3**):
    + One project: *Jedit*
    + Compute set of labels for 9 high-level behaviors
    + Let users determine the correct behavior based on the given labels

]

---
count: false
.left-column[
## Evaluation
#### Research Questions
#### Methodology
]
.right-column[
1. Quantitative (**RQ1** and **RQ2**):
    + Three projects: *NanoXML*, *Javac*, and *Jedit*.
        1. Determine the reduction in number of phases for each step of the process
        2. Determine number of phases at each level.

2. User study (**RQ3**):
    + One project: *Jedit*
    + Compute set of labels for 9 high-level behaviors
    + Let users determine the correct behavior based on the given labels

3. Case study (**RQ1**, **RQ2**, and **RQ3**):
    + Abstracted execution trace of *Javac*
    + Present how *Sage* can help program comprehension.
]

---
.left-column[
## Evaluation
#### Research Questions
#### Methodology
#### 1. Quantitative
]
.right-column[

**RQ1**: *To what extent does SAGE alleviate the information overload challenge?*

<div>
  <img style="width: 90%;" src="images/evaluation/size-abstraction.png"></img>
</div>

<p style="text-align:center">Javac phase distribution:</p>
  <img src="images/evaluation/javac-phase-distribution.png" style="width: 90%"></img>
]

---

.left-column[
## Evaluation
#### Research Questions
#### Methodology
#### 1. Quantitative
]
.right-column[

**RQ2**: *Does the hierarchical phase abstraction provide substantially different levels of granularities of behavior?*

<p style="text-align:center">Javac phase distribution:</p>
  <img src="images/evaluation/javac-phase-distribution.png" style="width: 90%"></img>
]

---
count: false
.left-column[
## Evaluation
#### Research Questions
#### Methodology
#### 1. Quantitative
#### 2. User Study
]
.right-column[
**RQ3**: *Are the derived labels sufficiently meaningful?*

<img style="width: 90%" src="images/evaluation/user-study.png"></img>
]

---

count: false
.left-column[
## Evaluation
#### Research Questions
#### Methodology
#### 1. Quantitative
#### 2. User Study
#### 3. Case Study
]
.right-column[
**RQ3**: *Are the derived labels sufficiently meaningful?*

<img style="width: 100%" src="images/visualisation-hierarchical.jpg"></img>
]

<!-- ---
template: inverse

# Discussion -->

---
## Discussion

#### 1. Addressing Information Overload
  + Execution traces contain millions of events
  + Sage output in the tens of phases

--

#### 2. Addressing Behavior Subsumption
  + Sage output provides multiple levels of granularity

--

#### 3. Addressing Comprehensibility of Execution Traces
  + Average behavior identification accuracy of 70%

<!--- Conclusion....--->
<!-- ---
template: inverse
# Conclusion -->

---

## Conclusion
+ We introduced:
    + *Sage*: Hierarchically abstracts an execution trace.

+ The **quantitative evaluation** revealed us that *Sage* can successfully abstract the execution trace and reduce the amount of data to be inspected.


+ The **user study** showed us that for most functionalities the users were able to achieve a 70% accuracy.


+ The **case study** demonstrates *Sage* ability to reveal the primary behavior phases within a large execution.


<!------------------------------------------------------------------------
FINISHED PRESENTATION All further slides are extra slides for the defense
-------------------------------------------------------------------------->

---
template: inverse
count: false

# Extra Slides!

---
count: false

.left-column[
## SageVis
#### Data Structure
]
.right-column[
<div style="display:inline-block; width:100%">
    <p style="text-align:center"><b>Only Phase Detection</b></p>
    <img style="display: block; width:40%; margin: auto;" src="images/datastructure/hierarchical-structure.pdf.jpg"></img>
</div>

<div style="display:inline-block; width:49%">
    <p style="text-align:center"><b>FPM</b></p>
    <img style="display: block; width:100%; margin: auto;" src="images/datastructure/hierarchical-structure-fpm.pdf.jpg"></img>
</div>

<div style="display:inline-block; width:49%">
    <p style="text-align:center"><b>FPM with boundaries</b></p>
    <img style="display: block; width:80%; margin: auto;" src="images/datastructure/hierarchical-structure-fpm-boundaries.pdf.jpg"></img>
</div>

]

---
count: false
.left-column[
## Evaluation
#### Computational Efficiency
]
.right-column[

**RQ4**: *What is the computational efficiency of each abstraction step of Sage*?

<p style="text-align: center;">Size abstraction for each step of the training procedure in seconds</p>
![:scale 100%;display:block;margin:auto; ](images/evaluation/computational/steps.png)

<p style="text-align: center;">Abstraction time cost in seconds</p>
![:scale 30%;display:block;margin:auto; ](images/evaluation/computational/abstraction.png)
]

---
count:false
## Example: Duplicate Detection and Clustering

<img src="images/datastructure/DCT2PhaseTree.pdf.jpg" style="width: 100%"></img>


---
count:false
## NanoXML distribution

<div style="display:inline-block; width:100%">
    <img style="display: block; width:100%; margin: auto;" src="images/evaluation/nanoxml-phase-distribution.png"></img>
</div>

---
count:false
## JEdit distribution

<div style="display:inline-block; width:100%">
    <img style="display: block; width:100%; margin: auto;" src="images/evaluation/jedit-phase-distribution.png"></img>
</div>
---
count:false
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
]
.right-column[
#### Algorithm: Main loop

<img src="images/algorithm/algorithm1.png" style="width: 65%"></img>
]

---
count:false
.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 1: Initial trace - Push to history stack
<img src="images/example/steps/1.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 2: Push to history stack
<img src="images/example/steps/2.jpg" style="width: 100%"></img>
]


---
count: false


.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 3: Push to history stack
<img src="images/example/steps/3.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 4: Push to history stack
<img src="images/example/steps/4.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 5: Stagnation!
<img src="images/example/steps/5.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 6: Push to history stack
<img src="images/example/steps/6.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 7: Stagnation!
<img src="images/example/steps/7.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 8: Stagnation!
<img src="images/example/steps/8.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Step 9: End of trace -> Stagnation!
<img src="images/example/steps/9.jpg" style="width: 100%"></img>
]

---
count: false

.left-column[
## Sage
#### Data Collection
#### Phase Detection
#### <li style="text-indent: 10%"> Algorithm</li>
#### <li style="text-indent: 10%"> Example</li>
]
.right-column[
## Finally: Preliminary Phase Tree
<img src="images/example/steps/final.jpg" style="width: 70%"></img>
]

---
count: false

## Future work

### - Overall

+ Multithreaded support
+ Evaluate *Sage* and *SageVis* on larger systems

### - Visualization

+ Dynamically Inferred State Machine
