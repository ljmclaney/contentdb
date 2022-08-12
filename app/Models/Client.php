<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Client extends Model
{
    use HasFactory, HasRecursiveRelationships;

    protected $fillable = [
        'account_id',
        'name',
        'email',
        'uuid',
        'password'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function reminders()
    {
        return $this->belongsToMany(Reminder::class);
    }

}
