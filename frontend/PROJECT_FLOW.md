# Project Overview For The _Engineer 360_ Task

> This entire overview is written to drive your mind to understanding how the project works and it isn't intended to display anything relating to hands on code, however, this will give you a good insight when building the app

## Introduction

> This is an overview to brief you on how the project's requirement.


The **Engineer 360** task is a project focused on companies being able to test the strenghts and skills of their employees by giving assessment to their employees.

The performance of each employee will be displayed in a **_spider web chart_** or a **_radar chart_**.

## Project Flow

* The _User_ as a **_Company_**
* The _User_ as an **_Employee_**

### The _User_ as a **_Company_**

* The user as a company is whoever creates an account with the available auth pages on the platform

* This user automatically becomes the _super admin_ of the company 

* This user has the following rights 

  * **Add / Edit & Delete / Deactivate Employees** -

    * Creates an employee profile and sends a notification via email to the employee

  * **Create / Edit / Delete or Deactivate Assessment where necessary** - 

    * **After creation of assessment, the _super admin_ chooses to add questions via a **CSV file** or via **form input** and then chooses categories for each question

  * **Send Assessment to employees** - 

    * Can send assessment to all employees or selected employees

    * A link to the assessment is sent to the employee to take the assessment

  * **Can see the progress of the employee on a spider web chart by viewing the profile of the employee**

### The _User_ as an **_Employee_**


* This user gets added to the system by the user registered as s company

* This user becomes an employee of whatever company adds him/her

* This user can carry out the following activities

  * **Identifies as an employee to a company**

    * This user gets added to the system by a unique registration link sent by the company when a profile is created for him/her.

    * After successful registration, user chooses to accept the profile created for him or her and can also reject the profile with a feedback as to why it was rejected

  * **User is able to see list of assessment that has been created for him or her and can take these assessment, not just once, but until the assessment has been marked as deactivated**

  * **User can view his or her progress in the form of a _spider web chart_ or _radar chart_**

  * **User is able to edit his or her profile, however this will require approval from the admin to take effect (**an extra feature likely to be added**)**

## Other things to note in the flow

- Any user registering or siginin in with the public auth pages (ex. `www.example.com.login` or `www.example.com/register`) is doing so as a company and not as an employee.

- An employee gets a unique registration link with a unique signature for monitoring the link, if the unique signature is invalid, a `404 not found` page is returned. If the unique signature has been expired, i.e the user has successfully registered the account, it returns an error page also, stating that the link has expired. 
This is to prevent other users from using the same link for registration, and if the link is valid, the user or employee is asked to set a password from the account