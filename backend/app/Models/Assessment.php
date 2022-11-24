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
        'id', 'name', 'start_date', 'start_time', 'org_id'
    ];
}
