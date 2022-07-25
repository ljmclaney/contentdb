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
        Schema::create('fields', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('page_id');
            $table->string('type');
            $table->string('label')->nullable();
            $table->longText('instructions')->nullable();
            $table->longText('settings')->nullable();
            $table->longText('json_content')->nullable();
            $table->longText('html_content')->nullable();
            $table->unsignedInteger('sort_order');
            $table->string('uuid');
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
        Schema::dropIfExists('fields');
    }
};
