# Spindl_APL

"Spindl_APL" is a platform for connecting job seekers with employers offering internships. The application allows users to create accounts to access their personal booking details in the dashboard. Administrators can view all users and bookings in their customized dashboard view. This project was created in Visual Studio Community 2022 as an ASP.NET Core app with React and Vite, as described in this tutorial: https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022. The back end part was developed in Visual Studio, and the front end layout was built in Visual Studio Code. Please note that running the application requires both Visual Studio and Visual Studio Code, which can be installed from here: 
https://code.visualstudio.com/download 
https://visualstudio.microsoft.com/vs/

VISUAL STUDIO:
The default data is provided by a database seeding file, so in order to access the data, the back end code must be running in Visual Studio before the front end part of the project is started. The SQL Server Object Explorer in Visual Studio shows what has been stored in the data tables. Select View > Server Explorer to access them. Expand the folders to locate the data tables associated with the application. 

Before running the application, delete all files in the Migration folder and open the Package Manager window. Write "add-migration Initial" and wait for the command to finish. Write "Update-Database" to complete the process. If any of these commands result in error messages, try deleting the data tables before writing the commands again. A successful execution of the commands will replace the deleted data tables and the files that were removed from the Migrations folder.

Now the application is ready to run. When Swagger starts up, backend data is passed to the frontend solution through the API. If running https projects returns error messages, try these commands in the Command Prompt: "dotnet dev-certs https --clean", "dotnet dev-certs https --trust". Install the new certificates and run the application.

VISUAL STUDIO CODE:
After installing Visual Studio Code, install the LiveServer extension. This application was built and tested using the LiveServer developed by Ritwicki Dey. Open the React part of the application in Visual Studio Code, activate the Terminal window, and go to the "spindl_apl.client" folder. This is where the node modules must be installed before the application can be started. Write "npm install" and wait for the installation to finish. Write "npm run dev" and wait for Vite to start up. Open a new tab in the browser and go to "https://localhost:5173/". The page might have to be reloaded once. 
