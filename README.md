# Image Carousel

This exercise practices working with props, defaultProps, state, and simple click events in React.

## Part 1: Smoke and Snapshot tests

Write one smoke and one snapshot test each for the Card and Carousel components.

## Part 2: Bug! Left arrow

The left and right arrow do the same thing: move to the next image in the image array.

1. Write a test that checks when on the second image, clicking the left arrow will move to the first image.
2. Fix the app to pass the test.

## Part 3: Bug! Exhausting the image array

If you’re on the last image and try to move forward, or if you’re on the first image and try to move backward, you get an error.

1. Hide the left arrow on the first image and the right arrow on the last.
2. Write a test to check that the left arrow is missing when you’re on the first image, and that the right arrow is missing when you’re on the last image.
3. Fix the app to pass the test.

# Further Study: Coin Flip

Create a coin flipping counter.

The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

> Break your app up into at least two separate components!

## Tests

At least test that there’s no coin image when the page loads, and that the text below the coin updates properly when the coin lands on heads or tails.

- Testing random output can be tricky, since it’s unpredictable. Fortunately, Jest comes with functionality to mock any function you like, including Math.random. One way to handle it is with code like this:

```
beforeEach(function() {
jest
.spyOn(Math, "random")
.mockReturnValueOnce(0.25)
.mockReturnValueOnce(0.75);
});

afterEach(function() {
Math.random.mockRestore();
});
```

With this code, Jest will ensure that the first call to Math.random() returns 0.25, and the second call will return 0.75. In this way you can make random output completely predictable within your tests.
