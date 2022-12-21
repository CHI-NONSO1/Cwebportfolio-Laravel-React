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
        Schema::create('replies', function (Blueprint $table) {
            $table->id('replyid');
            $table->string('name', 55);
            $table->string('email');
            $table->string('reply', 2000);
            $table->string('image', 55)->nullable();
            $table->string('video', 55)->nullable();
            $table->string('link_post', 55)->nullable();
            $table->unsignedBigInteger('commentid');
            $table->unsignedBigInteger('postid');
            $table->foreign('commentid')->references('commentid')->on('comments')
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
        Schema::dropIfExists('replies');
    }
};
