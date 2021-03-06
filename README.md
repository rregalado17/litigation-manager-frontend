Litigation Manager - frontend
Installation: To use the Litigation Manager App, in terminal ... -git clone https://github.com/rregalado17/litigation-manager-frontend -cd litigation-manager-frontend -yarn install -yarn start to view in browser

*** Rails API Backend in connection to frontend ***Installation: To use the Litigation Manager App, in terminal ... -git clone https://github.com/rregalado17/litigation-manager-backend -cd litigation-manager-backend -bundle install -rake db:migrate -rake db:seed -thin start -p 3001 --ssl -open https://localhost:3000/api/v1/lawyers in browser to be able to view json data

Description: Litigation Manager is a Rails api and React-Redux CRUD web application that allows the user to manager their create litigation managers to monitor, browse other litigations from other lawyers and update information. 

Contributing Bug reports and pull requests are welcome on GitHub at https://github.com/rregalado17/litigation-manager-frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License The gem is available as open source under the terms of the MIT License. 

Code of Conduct Everyone interacting in the Litigation Manager project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

yarn eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

yarn build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify