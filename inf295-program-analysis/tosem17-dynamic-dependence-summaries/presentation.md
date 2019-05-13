# Dynamic Dependence Summaries
#### Authors: Vijay Krishna Palepu, Guoqing Xu, James A. Jones

----

## Quick Recap (1): Definitions

+ **Static Analysis**: Analyzes the source code of the program.
+ **Dynamic Analysis**: Analyzes program while running.
+ **Instrummention**: A way to log executions that happen during runtime.
+ [**Blinky**](https://github.com/spideruci/blinky): An instrumentation tool for Java

----

## Quick Recap (2): Static vs Dynamic

| **Static Analysis**             | **Dynamic Analysis**                          |
|---------------------------------|-----------------------------------------------|
| Source Code                     | Running software                              |
| Less precise                    | More precise                                  |
| Observe all possible executions | Limited to observed executions during runtime |

----

## Quick Recap (3): Dynamic Analysis Challenges

1. Execution traces from even small executions can become massive (1.000.000+ lines)
    + How to decrease the execution trace size w/o losing valuable data?
    + How to extract valuable information from them?

2. Instrumentation causes major runtime overhead
    + How to decrease the overhead?

----

## Introduction (1)

+ Modern Software Systems are build upon other libraries, APIs, etc.
+ One of the Challenges of component reuse: 
    + Analysis tasks become increasingly expensive as the extent and depth of component reuse increases.

    + In a perfect world, we do a complete and exhaustive analysis where all underlying components are taken into account.
    + ... However, not realistic, because computationally expensive.

----

## Introduction (2)

+ **Static Analysis** &rarr; Summary-based Program Analysis
+ **Dynamic Analysis** &rarr; ??

----

## Idea: Dynamic Dependence Summaries (1)

> "Dynamically compute dependence summary metadata that will characterize and capture external efffects of reused components for a modern object-oriented language, where we treat each method as a component unto itself."

----

## Idea: Dynamic Dependence Summaries (2)

Summary-based approach to dynamic dependence analysis leads to:
1. Reduced execution trace size.
2. Reduced trace recording times.
3. Reduced dependence analysis time.

----


## Pilot Study: 
#### Possible gains of summarizing the Java Standard Library

| Tool   | # instructions | # rt.jar instructions | Possible win |
|--------|----------------|-----------------------|--------------|
| Bloat  | 396x10^6       | 239x10^6              | 60%          |
| Jython | 1,734x10^6     | 1658x10^6             | 95%          |
| FOP    | 110x10^6       | 57x10^6               | 51%          |
| PMD    | 18x10^6        | 9x10^6                | 50%          |

+ On avergage nearly 65%

----

## Why do we care?

+ Dynamic Dependence Analysis forms the basis of a variety of dynamic analysis techniques:
    + [Dynamic Program Slicing](https://www.cs.columbia.edu/~junfeng/08fa-e6998/sched/readings/slicing.pdf)
    + [Tainting-based Information Flow Analysis](http://web.cs.ucla.edu/~harryxu/papers/xu-tosem15.pdf)
    + [Potential Parallelism Detection](http://web.cse.ohio-state.edu/~pouchet.2/doc/pldi-article.12.pdf)

+ *Summary-based Dynamic Dependence Analysis* can improve the efficiency (space/time) for all such techniques.

----

#### Dynamic Dependence Summaries...
## Why not reuse the static ones?

+ Static Summaries are more conservative than Dynamic Summaries
    + e.g., Dynamic Dispatch, access individual array elements...

----

## Challenges

1. Defining Dependence Summaries with Objects

2. Abstracting Concrete Summaries

    <!-- 1. Abstracting Concrete Array Accesses -->
3. Accounting for Varying Method Behavior

    <!-- 1. Accounting for Polymophic Methods
    2. Accounting for Divergent Control Flow -->
4. Reusing Dynamic Dependence Summaries

----

## Using Dynamic Dependence Summaries for Dynamic Dependence Analysis

Phase 1: Summary Generation using Representative Executions.
Phase 2: Summary APplication in Dependence Analysis.
Phase 3: Dependence Graph Computation and Use.

----

## Instrumentation: Blinky

Goal: Generation of a detailed trace that records the execution of each instruction in the program and the heap/stack location it accesses.

+ Instrumentation is done on the fly (during runtime)
+ Uses ASM (i.e., Java Bytecode Manipulation Framework)


----

## Evaluation


----

## Results:

+ 13 x speedup with the use of dynamic dependence summaries.
+ with an accuracy of 90%.

----

## Threats to Validity


----

## Limitations and Future Work


----

## Related Work


----

## Recap

+ Summary-based Dynamic Analysis approach


----


## Pilot Study: 
#### Possible gains of summarizing the Java Standard Library

| Tool   | # instructions | # rt.jar instructions | Possible win |
|--------|----------------|-----------------------|--------------|
| Bloat  | 396x10^6       | 239x10^6              | 60%          |
| Jython | 1,734x10^6     | 1658x10^6             | 95%          |
| FOP    | 110x10^6       | 57x10^6               | 51%          |
| PMD    | 18x10^6        | 9x10^6                | 50%          |