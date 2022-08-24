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

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code', 25);
            $table->string('name', 200);
            $table->string('description', 1000);
            $table->integer('category_id');
            $table->integer('price');
            $table->integer('is_top')->default(0);
            $table->integer('on_sale')->default(0);
            $table->timestamps();

            // $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
