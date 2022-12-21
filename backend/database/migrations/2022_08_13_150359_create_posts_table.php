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
        Schema::create('posts', function (Blueprint $table) {
            $table->id('postid')->unique();
            $table->string('author', 50);
            $table->string('heading');
            $table->string('post', 2000);
            $table->string('category', 55);
            $table->string('image', 55)->nullable();
            $table->string('video', 55)->nullable();
            $table->string('link_post', 55)->nullable();
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
        Schema::dropIfExists('posts');
    }
};
