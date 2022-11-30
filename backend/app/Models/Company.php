<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory, Uuids;

    protected $guarded = ['id'];

    /**
     * @var $fillable
    */
    protected $fillable = [];

    public function interviews()
    {
        return $this->belongsTo(Interview::class, 'company_id');
    }    
   
}
