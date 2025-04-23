# Welcome to Your Expo App 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Prerequisites

To get started, ensure you have the following installed and configured:

* **Expo Go:** Install the Expo Go app on your physical device. Refer to the installation guide at [https://expo.dev/go](https://expo.dev/go).
* **Node.js (LTS version):** Download and install the latest LTS version from [https://nodejs.org/en](https://nodejs.org/en). We recommend using Node.js version **22.2.0**.
* **npm:** Node Package Manager is included with Node.js. We have used **npm version 10.8.1**.
* **Code Editor:** Install your preferred code editor or IDE (e.g., VS Code).
* **Operating System:** macOS, Linux, or Windows (with PowerShell and WSL2 recommended for a smoother experience). Ensure you have a terminal window open.
* **EAS Account:** If you don't have an Expo Application Services (EAS) account, create one at [https://expo.dev/signup](https://expo.dev/signup). This is required for building and deploying your app.
* **EAS CLI:** Install the EAS command-line interface globally using the following command:

    ```bash
    npm install -g eas-cli
    ```
* **Initialize EAS:** Navigate to your project directory in the terminal and run the following command to initialize and link your project to EAS:

    ```bash
    eas init
    ```

    You can refer to this link for further steps: [https://docs.expo.dev/tutorial/eas/configure-development-build/](https://docs.expo.dev/tutorial/eas/configure-development-build/)
* **Login to EAS:** Log in to your EAS account in the terminal using the command:

    ```bash
    eas login
    ```

    Enter your email or username and password when prompted.

## Getting Started

Follow these steps to run your Expo app:

1.  **Install Dependencies:** Navigate to your project directory in the terminal and install the required npm packages:

    ```bash
    npm install
    ```

2.  **Start the App:** Start the Expo development server:

    ```bash
    npx expo start
    ```

3.  **Switch to Expo Go:** Once the development server starts, you'll see options in your terminal. Press the **'S' key** to switch to using the Expo Go app. You should see a message like: `Using "Expo Go"`.

    ![Expo Go Switch Image](https://github.com/user-attachments/assets/37ae0b38-c971-4170-bb94-5325f70231a1)

4.  **Open the App on Your Device:** Scan the **QR code** displayed in your terminal or browser using the Expo Go app on your physical device.
    * **Android:** Open the Expo Go app and select the "Scan QR code" option.
    * **iOS:** Use the default Camera app to scan the QR code.

Good luck and happy coding!
