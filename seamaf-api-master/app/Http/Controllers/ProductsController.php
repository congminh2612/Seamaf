<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Images;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Products::all();

        foreach ($products as $product) {
            $product->images;
        }

        return response()->json($products);
    }

    public function lastProducts(){
        $lastProducts=Products::where('is_top','>','0')->get();

        foreach ($lastProducts as $product) {
            $product->images;
        }
        return response()->json($lastProducts);
    }

    public function relateProducts($category_id)
    {
        $relateProducts = Products::where('category_id', $category_id)->get();

        foreach ($relateProducts as $product) {
            $product->images;
        }

        return response()->json($relateProducts);
    }

    public function search($keyword)
    {

        if (isset($keyword)) {
            $products = Products::where('name', 'LIKE', '%' . $keyword . '%')
                ->orWhere('code', 'LIKE', '%' . $keyword . '%')
                ->get();

            foreach ($products as $product) {
                $product->images;
            }
        }

        return response()->json($products);
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
        $newProduct = Products::create(
            [
                'code' => $request->code,
                'name' =>  $request->name,
                'description' =>  $request->description,
                'category_id' => $request->type,
                'quantity' => $request->quantity,
                'price' => $request->price,
                'is_top' => $request->on_top ? $request->on_top : 0
            ]
        );

        foreach ($request->images as $image) {
            Images::create([
                'product_id' => $newProduct->id,
                'path' => $image
            ]);
        }

        $products = Products::all();

        foreach ($products as $product) {
            $product->images;
        }

        return response()->json($products);
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
        $product = Products::find($id);
        // dd($product);

        if(isset($product)) {
            // dd($request->code);
            // $product->update([
            //     'code' => $request->code ? $request->code : $product->code,
            //     'name' => $request->name ? $request->name : $product->name,
            //     'description' => $request->description ? $request->description : $product->description,
            //     'category_id' => $request->type ? $request->type : $product->category_id,
            //     'price' => $request->price ? $request->price : $product->price,
            //     'is_top' => $request->is_top ? $request->is_top : $product->is_top,
            // ]);

            $product->update([
                'code' => $request->code,
                'name' => $request->name,
                'description' => $request->description,
                'category_id' => $request->type,
                'price' => $request->price,
                'is_top' => $request->on_top ? 10 : 0,
            ]);
            // dd($request->images);
            Images::where('product_id', $id)->delete();
            
            if ($request->images) {
                foreach ($request->images as $image) {
                    Images::create([
                        'product_id' => $id,
                        'path' => $image
                    ]);
                }
            } 
        } 

        $products = Products::all();

        foreach ($products as $product) {
            $product->images;
        }

        return response()->json($products);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Products::find($id);

        if (isset($product->images)) {
            Images::where('product_id', $product->id)->delete();
        }

        $product->delete();

        $products = Products::all();
        
        foreach ($products as $product) {
            $product->images;
        }

        return response()->json($products);
    }
}
