<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RestrictedProject extends Model
{

    protected $fillable = [
        'account_id',
        'user_id',
        'project_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

}
