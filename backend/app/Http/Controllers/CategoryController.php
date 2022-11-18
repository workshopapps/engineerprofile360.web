<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCategory(Request $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'assessment_id' => $request->assessment_id
        ]);
        return response()->json([
            'data' => $category
        ], 201);

        // dd(' e de work');
    }
}
