<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

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
        return sendResponse(true, 200, "Category Updated Successfully", $category);

    }
}
