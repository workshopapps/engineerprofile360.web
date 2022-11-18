<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCategory(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string',],
            'assessment_id' => ['required'],
        ]);

        try {
            $category = Category::create([
                'name' => $request->name,
                'assessment_id' => $request->assessment_id
            ]);

            return $this->successResponse(true, 'Category created successfully', $category, 201);
        } catch (Exception $e) {
            return $this->errorResponse('Category could not be created', $e->getMessage());
        }



    }
}
