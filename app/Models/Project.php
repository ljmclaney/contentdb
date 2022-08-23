<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'account_id',
        'name',
        'uuid',
        'password'
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

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
