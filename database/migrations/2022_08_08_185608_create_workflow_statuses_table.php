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
        Schema::create('workflow_statuses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('workflow_id');
            $table->string('name');
            $table->string('color')->nullable();
            $table->longText('notify_people')->nullable();
            $table->boolean('disable_editing')->default(false);
            $table->unsignedInteger('sort_order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workflow_statuses');
    }
};
