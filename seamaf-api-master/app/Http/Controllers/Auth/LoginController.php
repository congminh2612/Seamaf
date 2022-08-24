<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)
            ->where('password', $request->password)
            ->first();

        $token = $user->createToken('token-name', ['server:update'])->plainTextToken;

        if (!$user) {
            return response()->json(
                [
                    'message' => 'Invalid username or password'
                ]
            );
        } else {
            $user['accessToken'] = $token;
            $user['type_token'] = 'Bearer';
        }

        return response()->json($user);
    }
}
