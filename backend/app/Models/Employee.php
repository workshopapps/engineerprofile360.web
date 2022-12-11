<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory, Uuids;

    //role-incase 

    /**
     * @var $fillable
     */
    protected $fillable = [
        'email', 'fullname', 'username', 'hash', 'image',
        'address', 'phone_number',
        'occupation', 'reftoken', 'role', 'org_id','department_id'
    ];

    protected $hidden = ['hash', 'reftoken', "raw_password"];

    public function assessment()
    {
        return $this->hasMany(UserAssessment::class, 'employee_id');
    }

    public function completed_assessment()
    {
        return $this->hasMany(UserAssessment::class, 'employee_id')->where("completed", 1);
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function userscore()
    {
        return $this->HasMany(UserScore::class, 'employee_id');
    }
}