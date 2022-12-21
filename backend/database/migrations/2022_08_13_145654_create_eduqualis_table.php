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
        Schema::create('eduqualis', function (Blueprint $table) {
            $table->id('eduqualid');
            $table->string('qualiobtained');
            $table->string('institution');
            $table->string('startdate');
            $table->string('enddate');
            $table->string('country');
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
        Schema::dropIfExists('eduqualis');
    }
};
