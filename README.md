## FoodieHub

This is a react-native app:

- Allows food tuckowner to register their trucks with their valid permits.
- Allows NYC truck owners to announce / pin point their trucks location in nyc map.
- Allows foodies to find local food trucks on the map.
- Allows foodies to creat account and review food trucks
- Allows foodies and truck owners to exchange copoun codes.

## git

- master: "production" branch; will have code you feel comfortable releasign to public
- dev: development branch; will have "stable" code that has latest featuers; best branch for developers to branch from
- testing: will have code attempting to be merged into main project; will often have broken code unit merg fixed, at which point testiung is merged into dev
- feature/bugfix: will likely have code from single developer focusing on specific/bugfix; used by developer to check-in own code ofter without risk.

## To Run the Project From "Master" Branch

**Download**
- Open terminal on a local directory
- git clone <SSH/HTTP>

**Setup**
- Open terminal on the "FoodieHub" folder
- run `npm install`

**Extra Setup**
<br />If the project isn't able to run after `npm install`, run the code as follow:

- run `npm install react-navigation --legacy-peer-deps`
- run `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- run `npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps`
- run `npm install react-navigation-tabs --legacy-peer-deps`
- add the line `plugins: ["react-native-reanimated/plugin"],` into `babel.config.js` file
- restart the app and clear the cache with `expo r -c`

For reason why running the code above, check: `https://docs.google.com/document/d/1AFmmyHnqGRYdf1Vef3pqIcs756I1jWJDsXL2WL8CWz0/edit`

