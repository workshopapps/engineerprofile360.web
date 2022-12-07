<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory, Uuids;

    protected $fillable = ['name', 'org_id'];

        /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function employee()    
    {  
        return $this->hasMany(Employee::class ,'department_id');
    }

    public function assessment()    
    {  
        return $this->hasMany(Assessment::class ,'department_id');
    }
}
