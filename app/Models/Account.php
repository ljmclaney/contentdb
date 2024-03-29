<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laratrust\Models\LaratrustTeam;
use Laravel\Cashier\Billable;

class Account extends LaratrustTeam
{
    use HasFactory, Billable;

    protected $fillable = [
        'trial_ends_at',
        'name'
    ];

    protected $casts = [
        'trial_ends_at' => 'datetime'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }

}
