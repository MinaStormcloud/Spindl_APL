# Spindl_APL

"Spindl_APL" is a platform for connecting job seekers with employers offering internships. The application has a responsive design to accommodate smartphones and tablets, as well as laptops and desktop computers. "Spindl_APL" allows users to create accounts to access their personal booking details in the dashboard. Administrators can view all users and bookings in their customized dashboard view. This project was created in Visual Studio Community 2022 as an ASP.NET Core app with React and Vite, as described in this tutorial: https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022. 

The back end part was developed in Visual Studio, and the front end layout was built in Visual Studio Code. Please note that running the application requires both Visual Studio and Visual Studio Code.

VISUAL STUDIO:
Install Visual Studio: https://visualstudio.microsoft.com/vs/.

Before running the application, delete all files in the Migration folder and open the Package Manager window. Write "add-migration Initial" and wait for the command to finish. Write "Update-Database" to complete the process. If any of these commands result in error messages, try deleting the data tables before writing the commands again. A successful execution of the commands will replace the deleted data tables and the files that were removed from the Migrations folder.

Now the application is ready to run. When Swagger starts up, backend data is passed to the frontend solution through the API. If running https projects returns error messages, try these commands in the Command Prompt: "dotnet dev-certs https --clean", "dotnet dev-certs https --trust". Install the new certificates and run the application.

The default data is provided by a database seeding file, so in order to access the data, the back end code must be running in Visual Studio before the front end part of the project is started. The SQL Server Object Explorer in Visual Studio shows what has been stored in the data tables. Select View > Server Explorer to access them. Expand the folders to locate the data tables associated with the application. 

VISUAL STUDIO CODE:
Install Visual Studio Code: https://code.visualstudio.com/download. 

After installing Visual Studio Code, install the LiveServer extension. This application was built and tested using the LiveServer developed by Ritwicki Dey. Open the React part of the application in Visual Studio Code, activate the Terminal window, and go to the "spindl_apl.client" folder. This is where the node modules must be installed before the application can be started. Write "npm install" and wait for the installation to finish. Write "npm run dev" and wait for Vite to start up. Open a new tab in the browser and go to "https://localhost:5173/". The page might have to be reloaded once. 

THE CODE: The "spindl_apl.client" folder represents the front end part of the project. All front end updates shall be made in Visual Studio Code, and the "spindl_apl.client/src/App.jsx" file is the hub of the front end application. This is where all page references must be listed in order for the pages to be accessible when the application is up and running, and "App.jsx" contains some helpful comments. Pages are added or updated in the "spindl_apl.client/src/pages" folder. Each page type has its own subfolder here, and the "dashboard" folder contains its own set of subfolders representing each user type. For example changes impacting the admin view shall be made in one or more files in the admin folder. Please note that the different dashboard pages have their own customized side menu. All side menu files share the same css file, and they are available in the "spindl_apl.client/src/dashboard-components/sidemenu" folder. The dashboard css files are located in the "spindl_apl.client/src/dashboard-components/dashboard-css" folder.

General css settings are available in "spindl_apl.client/src/index.css", and the basic front end layout comes from "spindl_apl.client/src/Layout.jsx". Changes to the footer, the hero section, the navigation bar and the search bar shall be made in the files inside the subfolders in "spindl_apl.client/src/components". Each component type has its own css file, and the navigation bar also has a dropdown menu for small screens. The search bars on the home page share the same search icon, which is available in the "spindl_apl.client/src/assets/images" folder. Please note that all other images featured on the pages are links to free unsplash.com photos shared by various artists.
