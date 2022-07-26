<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'name',
        'uuid'
    ];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }

    public function shareLinks()
    {
        return $this->hasMany(ShareLink::class);
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
