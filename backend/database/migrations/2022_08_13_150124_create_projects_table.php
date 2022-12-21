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
        Schema::create('projects', function (Blueprint $table) {
            $table->id('projectid');
            $table->string('projectname');
            $table->string('projecturl')->nullable();
            $table->string('domainname')->nullable();
            $table->string('projectimage1')->nullable();
            $table->string('projectimage2')->nullable();
            $table->string('projectimage3')->nullable();
            $table->string('projectimage4')->nullable();
            $table->string('projectimage5')->nullable();
            $table->string('projectimage6')->nullable();
            $table->string('projectimage7')->nullable();
            $table->string('projectimage8')->nullable();
            $table->string('projectimage9')->nullable();
            $table->string('projectimage10')->nullable();
            $table->string('languageused1')->nullable();
            $table->string('languageused2')->nullable();
            $table->string('languageused3')->nullable();
            $table->string('languageused4')->nullable();
            $table->string('languageused5')->nullable();
            $table->string('duration')->nullable();
            $table->string('description', 1000);
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
        Schema::dropIfExists('projects');
    }
};
