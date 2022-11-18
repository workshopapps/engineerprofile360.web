<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    public function updateCategory(UpdateCategoryRequest $request, $category_id) 
    {
        try{
            $updatedData = $request->all();

            // Get category by id
            $category = Category::find($category_id);

            if( !$category ) {
                return $this->errorResponse(
                    'Category does not exist',
                    'Category not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $category->update($updatedData);

            // success response
            return $this->successResponse(true, 'Category updated successfully', $category);
        }  catch (Exception $e) {
            return $this->errorResponse('Category not fetched', $e->getMessage());
        }
    }
}
