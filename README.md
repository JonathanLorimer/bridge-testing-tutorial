# Bridge Testing React Tutorial

## Getting Started

```
git clone git@github.com:JonathanLorimer/bridge-testing-tutorial.git && cd bridge-testing-tutorial
npm install
npm run test
a
```

> click a after `npm run test` to have jest run the entire test suite in interactive mode

## The Minimum You Need To Know to Get Started

#### Some Helpful Friends

💻 - **Cody the Computer:** Cody will tell you where you should insert your own code in the exercises  
ℹ️ - **Informative Ines:** Ines will tell you what you are supposed to do in a particular section  
💡 - **Landry the Lighbulb:** Landry is here to give you helpful hints about how to accomplish a task

#### Exercises

The exercises are organized from 1 - 3 and build on eachother, the goal of each exercise is explained inside the code, and usually has something to do with the title.

You shouldn't have to change any of the react code, just the tests.

## A Little More Information

The tests have all been given failing assertions by default, so it is your job to make them pass!

`npm run test` will put you in interactive mode by default, so whenever you make a change to a file the test suite will re-run

if you only want to execute the test for a certain file, within jests interactive mode, hit `p` and type in the name of the file you want to test.

Additionally, you might notice that I have used `describe` and `it` blocks in a specific way, so that they form sentences when read out in the test suite. This is generally considered good practice.

#### Exercises in Depth

1. This exercise covers the common pattern of snapshot testing a react component. Just as a note, snapshots are created the first time you run the test suite after expecting to match a snapshot. All the snapshots will exist in the `snapshots` folder that will be created in the directory the test exists in.

2. This exercise is supposed to demonstrate the use of snapshots to assert over the shape of a javascript datastructure (Array or Object) without having to mock out the expected result manually. It is very easy to get into the slippery slope of snapshoting everything so I recommend just using snapshots for two purposes:
   - A cheap low assurance test that covers the general shape of a component
   - Automatically mocking out the shape of nested data-structures instead of doing it manually

> NOTE: As your test suite grows snapshots become very fragile and will fail frequently, this will lead to fellow developers updating them without checking what the changes are, this defeats the whole purpose of snapshot tests.

3. This exercise demonstrates a great use case for enzyme; shallow rendering to get a handle on component methods.
