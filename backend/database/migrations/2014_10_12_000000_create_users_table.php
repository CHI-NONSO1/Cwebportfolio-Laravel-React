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
        Schema::create('users', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('firstname');
            $table->string('middlename')->nullable();
            $table->string('lastname');
            $table->string('password');
            $table->string('email');
            $table->foreignUuid('portfolioadminid')->unique();
            $table->string('phoneno')->nullable();
            $table->string('login_token')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('position')->nullable();
            $table->text('image')->nullable();
            $table->timestamp('blocked_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
