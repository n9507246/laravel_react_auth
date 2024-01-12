<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh', 'registration', 'me']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(\App\Http\Requests\AuthLoginRequest $request)
    {
        $credentials= $request->only('email', 'password');
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['errors' => ['email' => ['Неверное имя пользователя или пароль']]], 422);
        }
        return $this->respondWithToken($token);
    }

    public function registration(\App\Http\Requests\AuthRegistrationRequest $request){
        $data = $request->only('name', 'email', 'password');
        $user = \App\Models\User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => \Hash::make($data['password'])
        ]);
        $token = auth()->tokenById($user->id);
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}