<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoriesController extends Controller
{
    public function updateCategory(Request $request, $category_id) {
        // validate category name
        $request->validate([
            'name' => 'required'
        ]);

        // Get category by id
        $category = Category::find($category_id);

        $category->name = $request->name;

        $category->save();
        // success response
        return $this->successResponse(
            true,
            'Category Updated Successfully',
            $category,
            Response::HTTP_OK
        );

    }
}
