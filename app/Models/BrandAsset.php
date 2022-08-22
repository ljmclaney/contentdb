<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BrandAsset extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'project_id',
        'name',
        'uuid',
        'file',
        'file_type'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
