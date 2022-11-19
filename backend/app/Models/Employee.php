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
        'occupation', 'reftoken', 'role', 'org_id'
    ];
}
