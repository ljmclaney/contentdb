<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;

class TeamMemberController extends Controller
{
    public function index() {

        $account = Account::where('id', auth()->user()->account->id)
            ->get();
    }
}
