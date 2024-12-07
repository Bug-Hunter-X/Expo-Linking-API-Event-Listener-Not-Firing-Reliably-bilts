# Expo Linking API Event Listener Issue

This repository demonstrates a bug related to the Expo Linking API's `addEventListener` method.  The event listener is not consistently firing when deep links are opened, leading to unpredictable behavior in the application.

The `linkingBug.js` file contains code that reproduces the issue, while `linkingSolution.js` offers a potential solution.  This solution involves adding additional error handling and more robust event listening techniques.

## How to Reproduce

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the app using `expo start`.
4. Attempt to open a deep link targeting the application.  You may observe that the deep link is not consistently processed.

## Potential Solutions and Workarounds

The solution in `linkingSolution.js` explores several strategies: Improved error handling with `try...catch` blocks, utilizing `Linking.getInitialURL` to catch any deep links that launched the application and checking for multiple times using `setTimeout` before showing errors, and adding more comprehensive logging to help identify the root cause.