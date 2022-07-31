<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\Billable;

class Account extends Model
{
    use HasFactory, Billable;

    protected $fillable = [
        'trial_ends_at'
    ];

    protected $casts = [
        'trial_ends_at' => 'datetime'
    ];
}
