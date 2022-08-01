<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fields', function (Blueprint $table) {
            $table->index('section_id');
        });

        Schema::table('pages', function (Blueprint $table) {
            $table->index('account_id');
            $table->index(['account_id', 'project_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fields', function (Blueprint $table) {
            $table->dropIndex('section_id');
        });

        Schema::table('pages', function (Blueprint $table) {
            $table->dropIndex('account_id');
            $table->index(['account_id', 'project_id']);
        });
    }
};
