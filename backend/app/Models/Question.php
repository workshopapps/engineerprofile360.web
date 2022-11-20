<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory, Uuids;
    protected $guarded = [];
    /**
     * @var $fillable
    */
    protected $fillable = [
        'questiion_id', 'assessment_id', 'category_id', 'is_multiple_answers',
        'correct_answers', 'timeframe', 'options'
    ];
}
