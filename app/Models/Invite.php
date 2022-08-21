<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invite extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'user_id',
        'sender_user_id',
        'uuid',
        'token',
        'email',
        'message',
        'role',
        'status',
        'projects'
    ];

    protected $casts = [
        'projects' => 'json'
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_user_id');
    }

    public function setRestrictedProjects(User $user, Account $account)
    {
        if (empty($this->projects)) {
            return true;
        }

        foreach ($this->projects as $projectID) {
            RestrictedProject::create([
                'account_id' => $account->id,
                'user_id' => $user->id,
                'project_id' => $projectID
            ]);
        }

        return true;
    }

}
