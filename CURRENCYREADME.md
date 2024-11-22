# Currency Converter App

This is a currency converter app built with **React Native**. It allows users to convert one currency to another by entering an amount and selecting source and target currencies. The app fetches live exchange rate data from the **Frankfurter API**.

---

## Project Overview

The Currency Converter app:

- Allows users to input an amount.
- Lets users select the source and target currencies from dropdown lists.
- Fetches live currency exchange rates from the **Frankfurter API**.
- Displays the converted amount.
- Provides a "swap currencies" button to switch between source and target currencies.

---

## Installation Instructions

Follow these steps to set up and run the app on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Currency_Converter.git

2. **Navigate to the project folder:**

cd Currency_Converter

3. **Install dependencies:**
    # using npm
    npm install

    # OR using yarn
    yarn install


You can use either npm or yarn to install dependencies.

4. **Set up your environment:**

Ensure that your environment is properly set up to run React Native apps by following the official React Native Environment Setup instructions.

# Running the App
After the dependencies are installed and your environment is set up, follow these steps to run the app.

For Android:
Make sure you have an Android emulator running or a device connected.
npm run android, or
npm run android

For iOS (Mac only):
Ensure you have Xcode and an iOS simulator set up.

Run the following command to start the app on iOS:
npm run ios

yarn ios


# Features
Currency Conversion: Converts the amount from one currency to another.
Live Exchange Rates: Fetches real-time exchange rates from the Frankfurter API.
Currency Dropdown: Select source and target currencies from dropdown menus.
Swap Currencies: Button to swap source and target currencies.

# Technology Stack
React Native: A framework for building native mobile apps using JavaScript and React.
DropDownPicker: A dropdown component for selecting currencies.
Frankfurter API: Provides real-time exchange rate data.
ActivityIndicator: Displays a loading spinner when fetching data.
React Navigation: (if used in future versions for navigation between screens).

# License
This project is licensed under the MIT License.


# Example Usage:
Enter an amount (e.g., 100).
Select a source currency (e.g., USD).
Select a target currency (e.g., EUR).
Press "Convert" to see the converted amount.
You can swap the source and target currencies using the "⇅" button.