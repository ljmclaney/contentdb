<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id',
        'account_id',
        'name',
        'sort_order'
    ];

    public function fields()
    {
        return $this->hasMany(Field::class);
    }
}
