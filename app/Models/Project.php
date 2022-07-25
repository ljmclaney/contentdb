<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'name'
    ];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }
}
