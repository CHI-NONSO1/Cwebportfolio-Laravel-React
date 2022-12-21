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
        Schema::create('skills', function (Blueprint $table) {
            $table->id('skillid');
            $table->string('skillname1');
            $table->string('skillname2');
            $table->string('skillname3');
            $table->string('skillname4');
            $table->string('skillname5');
            $table->string('skillname6')->nullable();
            $table->string('skillname7')->nullable();
            $table->string('skillname8')->nullable();
            $table->string('skillname9')->nullable();
            $table->string('skillname10')->nullable();
            $table->string('portfolioid');
            $table->foreign('portfolioid')->references('portfolioadminid')->on('users')
                ->onDelete('cascade');
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
        Schema::dropIfExists('skills');
    }
};
