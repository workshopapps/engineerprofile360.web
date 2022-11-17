## Backend API Routes

This documentation throw more lights on how each routes are to be developed.

> Please note, all request coming into our backend server must be prefixed with `/api/v1/...`

This can be accomplished using the `prifix` method available in laravel.

### Route grouping.

We would be making use of the standard route versioning in laravel to comeup with the below output

`/api/v1/...`

This can be accomplished using the following code below.

```php

Route::prifix("v1")->group(function () {
    
    // every other routes method goes here

});
```

Below are the endpoints which would be used when adding any features.

**UsersControllers**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
| `allUsers()`  | `GET /api/v1/users/all` |`JWT`| `N/A` |
| `byId()`      | `GET /api/v1/user/{id}` |`JWT`|  `user_id`  |
| `getVerifiedUserById()` | `GET /api/v1/user/verified/{id}` | `JWT` | `user_id` |

**CompaniesControllers**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`allCompanyInfo()`| `GET/api/v1/company/all` |`JWT`| `N/A` |
|`byCompanyId()`| `GET /api/v1/company/{id}` |`JWT`|  `user_id`  |
|`updateCompInfo()` | `PUT /api/v1/company/update` | `JWT` | `org_id,org_name,org_mail,org_logo` |

**EmployeeController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`addEmpManually()`| `POST /api/v1/employee/add?type=manual` |`JWT`| `username,full_name,email` |
|`addEmpCSV()`| `POST /api/v1/employee/add?type=csv` |`JWT`| `base64 file` |
|`byUserId()`| `GET /api/v1/employee/get/{user_id}` |`JWT`|  `user_id`  |
|`byCompId()`| `GET /api/v1/employee/get/{org_id}` |`JWT`|  `org_id`  |
|`updateEmpInfo()` | `PUT /api/v1/employee/update` | `JWT` | `name,email,full_name,profile_image` |

**AssessmentController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`create()`| `POST /api/v1/assessment/create` |`JWT`| `name,start_date,start_time` |
|`updateAss()`| `PUT /api/v1/assessment/update/{id}` |`JWT`|  `name,start_date,start_time`  |
|`getAssByOrgId()` | `GET /api/v1/assessment/get/{org_id}` | `JWT` | `org_id` |
|`deleteAss()` | `DELETE /api/v1/assessment/delete/{ass_id}` | `JWT` | `ass_id` |

**CategoriesController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`create()`| `POST /api/v1/categories/create` |`JWT`| `name,assessment_id` |
|`getCategories()`| `GET /api/v1/categories/get/{ass_id}` |`JWT`|  `ass_id`  |
|`updateCategory()` | `PUT /api/v1/categories/update/{cat_id}` | `JWT` | `category_id` |
|`deleteCategory()` | `DELETE /api/v1/categories/delete/{cat_id}` | `JWT` | `category_id` |


**QuestionsController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`addManually()`| `POST /api/v1/questions/add?type=manual` |`JWT`| `category_id, category, question,wrong_answers, correct_answers, option, timeframe,is_multiple_answer` |
|`getQuestByOrgId()`| `GET /api/v1/questions/get/{org_id}` |`JWT`|  `org_id`  |
|`getQuestByAssId()`| `GET /api/v1/questions/get/{ass_id}` |`JWT`|  `ass_id`  |
|`getQuestByCatId()`| `GET /api/v1/questions/get/{cat_id}` |`JWT`|  `cat_id`  |
|`updateQuestion()` | `PUT /api/v1/questions/update/{quest_id}/{ass_id}` | `JWT` | `question_id, assessment_id, category_id, category, question,wrong_answers, correct_answers, option, timeframe,is_multiple_answer` |

**UsersScoreController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`addUserScore()`| `POST /api/v1/userScore/create` |`JWT`| `[question_id, assessment_id, category_id, category, question,wrong_answers, correct_answers, option, timeframe,is_multiple_answer]` |
|`getUserScoreByUserId()`| `GET /api/v1/userScore/get/{user_id}` |`JWT`|  `user_id`  |
|`getUserScoreByAss()`| `GET /api/v1/userScore/get/{ass_id}` |`JWT`|  `asS_id`  |

**AuthenticationController**

| Class Methods        | Method / Endpoints    | Auth  | Payload |
| ------------- |:-------------:| -----:| -----:
|`login()`| `POST /api/v1/auth/login` |`N/A`| `email,password` |
|`register()`| `POST /api/v1/auth/register` |`N/A`|  `full_name,username,email,password`  |
|`emailVerification()`| `POST /api/v1/auth/verified/` |`N/A`|  `ass_id`  |
|`setEmployeePassword()`| `PUT /api/v1/auth/employee/update/` |`N/A`|  `email,password`  |
|`resetPassword()`| `POST /api/v1/auth/password/reset/` |`N/A`|  `email`  |
|`requestResetPassword()`| `POST /api/v1/auth/password/reset/{hash_pwd}` |`N/A`|  `hash_pwd`  |
