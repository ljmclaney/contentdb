<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'page_id',
        'section_id',
        'type',
        'uuid',
        'label',
        'instructions',
        'settings',
        'html_content',
        'json_content',
        'sort_order'
    ];

    protected $casts = [
        'settings' => 'json',
        'json_content' => 'json'
    ];
}
