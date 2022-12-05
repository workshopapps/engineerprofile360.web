<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserScore extends Model
{
    use HasFactory, Uuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ["assessment_id", "employee_id", "passed_questions", "categories"];

    /**
     * The attributes that are hidden.
     *
     * @var array<int, string>
     */
    protected $hidden = ['hash', 'raw_password', 'reftoken'];
}