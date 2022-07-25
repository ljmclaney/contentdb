<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'project_id',
        'name'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
