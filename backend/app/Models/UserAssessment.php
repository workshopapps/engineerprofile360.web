<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAssessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
     'employee_id','assessment_id',
     'org_id','userscore_id',
     'completed','total_questions',
     'correct_questions','result'
    ];

}
