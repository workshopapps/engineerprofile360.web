<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAssessment extends Model
{
    use HasFactory, Uuids;

    protected $fillable = [
     'employee_id','assessment_id',
     'org_id','userscore_id',
     'completed','total_questions',
     'correct_questions','result'
    ];
    
}