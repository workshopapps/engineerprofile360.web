<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    use HasFactory, Uuids;

    /**
     * @var $fillable
     */
    protected $fillable = [
        'id',
        'name',
        'start_date',
        'start_time',
        'end_date',
        'end_time',
        'org_id',
        'department_id'
    ];

    public function assessment()
    {
        return $this->belongsTo(UserAssessment::class, 'assessment_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function userscore()
    {
        return $this->hasOne(UserScore::class, 'assessment_id');
    }
}