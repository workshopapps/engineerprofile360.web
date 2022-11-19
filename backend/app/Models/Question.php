<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory, Uuids;

    protected $fillable = [
        'question_id',
        'options',
        'timeframe',
        'correct_answers',
        'is_multiple_answers',
        'category_id',
        'assessment_id',
    ];

    protected $guarded = [];

}
