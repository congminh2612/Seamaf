<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Carts;
use App\Models\Products;
use App\Models\User;
use DB;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $carts = Carts::all();

        foreach ($carts as $cart) {
            $cart->user;
            $cart->product;
        }

        return response()->json($carts);
    }

    public function latestOrders()
    {
        $carts = Carts::orderBy('updated_at', 'DESC')->take(5)->get();

        foreach ($carts as $cart) {
            $cart->user;
            $cart->product;
        }

        return response()->json($carts);
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
        $carts = Carts::where('product_id', $request->product_id)
            ->where('user_id', $request->user_id)
            ->get();

        if ($carts->count() > 0) {
            Carts::where('product_id', $request->product_id)
                ->where('user_id', $request->user_id)
                ->update([
                    'quantity' => $request->quantity + $carts[0]['quantity'],
                    'total_price' => $request->total_price + $carts[0]['total_price']
                ]);
        } else {
            Carts::create(
                [
                    'product_id' => $request->product_id,
                    'user_id' =>  $request->user_id,
                    'quantity' => $request->quantity,
                    'total_price' => $request->total_price,
                    'status' => $request->status
                ]
            );
        }

        return response()->json(Carts::all());
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
        $cart = Carts::find($id);

        if (isset($cart)) {
            $cart->update([
                'user_id' => $request->user_id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
                'status' => $request->status,
            ]);
        }

        $carts = Carts::all();

        foreach ($carts as $cart) {
            $cart->user;
            $cart->product;
        }

        return response()->json($carts);
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
        $cart = Carts::find($id);

        if (isset($cart)) {
            $cart->delete();
        }

        $carts = Carts::all();

        foreach ($carts as $cart) {
            $cart->user;
            $cart->product;
        }

        return response()->json($carts);
    }
}
