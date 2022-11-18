## Backend API Routes

This documentation throw more lights on how each routes are to be developed.
### Note:
Run `php artisan key:generate` and `php artisan jwt:secret` before testing out the authentication


> Please note, all response sent to the client must follow the below convention..

```js

    {
        "error": false,
        "code": 200,
        "message": "some message here",
        "data": null || [] || {}
    }

```

Mean while, a utility function has been created for this task and can be found in the `/util` folder.


Below are the endpoints which would be used when adding any features.

**UsersControllers**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
| `allUsers()`  | `GET /api/users/all` |`JWT`| `N/A` |
| `byId()`      | `GET /api/user/{id}` |`N/A`|  `user_id`  |
| `getVerifiedUserById()` | `GET /api/user/verified/{id}` | `JWT` | `user_id` |

**CompaniesControllers**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`allCompanyInfo()`| `GET/api/company/all` |`JWT`| `N/A` |
|`byCompanyId()`| `GET /api/company/{id}` |`JWT`|  `user_id`  |
|`updateCompInfo()` | `PUT /api/company/update` | `JWT` | `org_id,org_name,org_mail,org_logo` |

**EmployeeController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`addEmpManually()`| `POST /api/employee/add?type=manual` |`JWT`| `username,full_name,email` |
|`addEmpCSV()`| `POST /api/employee/add?type=csv` |`JWT`| `base64 file` |
|`byUserId()`| `GET /api/employee/get/{user_id}` |`JWT`|  `user_id`  |
|`byCompId()`| `GET /api/employee/get/{org_id}` |`JWT`|  `org_id`  |
|`updateEmpInfo()` | `PUT /api/employee/update` | `JWT` | `name,email,full_name,profile_image` |

**AssessmentController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`create()`| `POST /api/assessment/create` |`JWT`| `name,start_date,start_time` |
|`updateAss()`| `PUT /api/assessment/update/{id}` |`JWT`|  `name,start_date,start_time`  |
|`getAssByOrgId()` | `GET /api/assessment/get/{org_id}` | `JWT` | `org_id` |
|`deleteAss()` | `DELETE /api/assessment/delete/{ass_id}` | `JWT` | `ass_id` |

**CategoriesController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`create()`| `POST /api/categories/create` |`JWT`| `name,assessment_id` |
|`getCategories()`| `GET /api/categories/get/{ass_id}` |`JWT`|  `ass_id`  |
|`updateCategory()` | `PUT /api/categories/update/{cat_id}` | `JWT` | `category_id` |
|`deleteCategory()` | `DELETE /api/categories/delete/{cat_id}` | `JWT` | `category_id` |


**QuestionsController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`addManually()`| `POST /api/questions/add?type=manual` |`JWT`| `category_id, category, question,wrong_answers, correct_answers, option, timeframe,is_multiple_answer` |
|`getQuestByOrgId()`| `GET /api/questions/get/{org_id}` |`JWT`|  `org_id`  |
|`getQuestByAssId()`| `GET /api/questions/get/{ass_id}` |`JWT`|  `ass_id`  |
|`getQuestByCatId()`| `GET /api/questions/get/{cat_id}` |`JWT`|  `cat_id`  |
|`updateQuestion()` | `PUT /api/questions/update/{quest_id}/{ass_id}` | `JWT` | `question_id, assessment_id, category_id, category, question,wrong_answers, correct_answers, option, timeframe,is_multiple_answer` |

**UsersScoreController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`store()`| `POST /api/userScore/create` |`JWT`| `[assessment_id, employee_id, categories, passed_questions]` |
|`getScores()`| `GET /api/userScore/employee/{employee_id}` |`JWT`|  `employee_id`  |
|`getScores()`| `GET /api/userScore/assessment/{assessment_id}` |`JWT`|  `ass_id`  |
|`getScores()`| `GET /api/userScore/{employee_id}/{ass_id}` |`JWT`|  `employee_id, ass_id`  |

**AuthenticationController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`login()`| `POST /api/auth/login` |`N/A`| `email,password` |
|`register()`| `POST /api/auth/register` |`N/A`|  `full_name,username,email,password`  |
|`emailVerification()`| `POST /api/auth/verified/` |`N/A`|  `ass_id`  |
|`setEmployeePassword()`| `PUT /api/auth/employee/update/` |`N/A`|  `email,password`  |
|`resetPassword()`| `POST /api/auth/password/reset/` |`N/A`|  `email`  |
|`requestResetPassword()`| `POST /api/auth/password/reset/{hash_pwd}` |`N/A`|  `hash_pwd`  |
