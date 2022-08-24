<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [LoginController::class, 'login']);

Route::get('list-users', [UsersController::class, 'index']);
Route::get('top-users', [UsersController::class, 'topUsers']);

Route::prefix('products')->group(function () {
    Route::get('/', [ProductsController::class, 'index']);
    Route::get('last-product',[ProductsController::class,'lastProducts']);
    Route::get('relate-products/{category_id}', [ProductsController::class, 'relateProducts']);
    Route::get('search/{keyword}', [ProductsController::class, 'search']);
    Route::post('add', [ProductsController::class, 'store']);
    Route::delete('/{id}', [ProductsController::class, 'destroy']);
    Route::patch('/{id}', [ProductsController::class, 'update']);
});

Route::prefix('categories')->group(function () {
    Route::get('/', [CategoriesController::class, 'index']);
    Route::post('add', [CategoriesController::class, 'store']);
    Route::delete('/{id}', [CategoriesController::class, 'destroy']);
    Route::patch('/{id}', [CategoriesController::class, 'update']);
});

Route::prefix('carts')->group(function () {
    Route::get('/', [CartsController::class, 'index']);
    Route::get('add', [CartsController::class, 'store']);
    Route::get('last-orders', [CartsController::class, 'latestOrders']);
    Route::patch('/{id}', [CartsController::class, 'update']);
    Route::delete('/{id}', [CartsController::class, 'destroy']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::post('/change-pass', [AuthController::class, 'changePassWord']);    
});
