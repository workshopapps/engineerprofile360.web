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
    protected $fillable = ["id", "name", "org_id"];


    public function questions()
    {
        return $this->hasMany(Question::class, 'category_id');
    }
}