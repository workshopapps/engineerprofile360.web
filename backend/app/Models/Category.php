<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Category extends Model
{
    use HasFactory, Uuids;

    /**
     * @var $fillable
    */
    protected $fillable = [
        'name',
        'assessment_id'
    ];

}
