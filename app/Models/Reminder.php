<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Reminder extends Model
{
    use HasFactory, HasRecursiveRelationships;

    protected $fillable = [
        'account_id',
        'user_id',
        'client_id',
        'reminder_date',
        'reminder_message'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function user()
    {
        return $this->belongsToMany(User::class);
    }

}
