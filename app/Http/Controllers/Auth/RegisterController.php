<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    protected $redirectTo = '/home';

    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }

    // protected function validator(array $data)
    // {
    //     return Validator::make($data, [
    //         'name' => ['required', 'string', 'max:255'],
    //         'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
    //         'password' => ['required', 'string', 'min:8', 'confirmed'],
    //     ]);
    // }

    // protected function create(array $data)
    // {
    //     return User::create([
    //         'name' => $data['name'],
    //         'email' => $data['email'],
    //         'password' => Hash::make($data['password']),
    //     ]);
    // }

    // public function register(Request $request)
    // {
    //     $this->validator($request->all())->validate();

    //     $user = $this->create($request->all());

    //     return response()->json($user, 201);
    // }

    // public function register(Request $request)
    // {
    //     // Validace vstupů
    //     $validator = Validator::make($request->all(), [
    //         'first_name' => 'required|string|max:255',
    //         'last_name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:users',
    //         'password' => 'required|string|min:6|confirmed',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors(), 400);
    //     }

    //     // Vytvoření nového uživatele
    //     $user = User::create([
    //         'first_name' => $request->first_name,
    //         'last_name' => $request->last_name,

    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     // Vrácení odpovědi s novým uživatelem
    //     return response()->json(['user' => $user], 201);
    // }
}
