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
        Schema::create('biodatas', function (Blueprint $table) {
            $table->id('biodataid');
            $table->string('sex');
            $table->string('dob');
            $table->string('soo')->nullable();
            $table->string('marital');
            $table->string('impairment');
            $table->string('religion');
            $table->string('nationality');
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
        Schema::dropIfExists('biodatas');
    }
};
