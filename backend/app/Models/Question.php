<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use Uuids;
    use HasFactory;
    protected $guarded = [];
    /**
     * @var $fillable
     */
    protected $fillable = [
        'options',
        'timeframe',
        'correct_answers',
        'is_multiple_answers',
        'category_id',
        'assessment_id',
        'company_id',
        'question_id'
    ];

    protected $casts = [
        'options' => 'array',
        'correct_answers' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}