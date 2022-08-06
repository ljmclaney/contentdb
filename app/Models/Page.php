<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

class Page extends Model
{
    use HasFactory, HasRecursiveRelationships, SoftDeletes;

    protected $fillable = [
        'account_id',
        'project_id',
        'name',
        'parent_id'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function fields()
    {
        return $this->hasMany(Field::class);
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
