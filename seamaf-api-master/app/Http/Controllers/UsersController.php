<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        foreach ($users as $user) {
            $user->carts;
        }

        return response()->json($users);
    }

    public function topUsers() {
        $users = User::all();    

        foreach ($users as $user) {
            $user->carts;

            foreach ($user['carts'] as $cart) {
                $user['total_price'] += $cart['total_price'];
                $user['total_orders'] += 1;
            }
        }

        $collection = collect($users);

        $sorted = $collection->sort(function($a, $b)  { 
            if ($a->total_price == $b->total_price) {
                if ($a->total_order == $b->total_order) {
                    return 0; 
                }
                return ($a->total_order > $b->total_order) ? -1 : 1;
            }
            return ($a->total_price > $b->total_price) ? -1 : 1; 
        });
                 
        $data = $sorted->takeUntil(function ($item) {
            return $item->carts->count() == 0;
        });

        $data = $data->values()->take(5);

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
