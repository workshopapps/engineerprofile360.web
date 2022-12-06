<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAssessment extends Model
{
    use HasFactory, Uuids;

    protected $fillable = [
        'id','employee_id','assessment_id',
        'org_id','userscore_id',
        'completed','total_questions',
        'correct_questions','result'
    ];

    public function assessment()    
    {  
        return $this->belongsTo(Assessment::class ,'assessment_id');
    }
}