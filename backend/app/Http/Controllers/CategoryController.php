<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCategory(CategoryRequest $request)
    {

        $payload = json_decode($request->getContent(), true);

        $data = $request->all();
        try{
            Category::create($data);
            return $this->successResponse(true, 'Category created', Response::HTTP_CREATED);
        }  catch (\Exception $e) {
            return $this->errorResponse('Category not created', $e->getMessage());
        }
    }

    public function updateCategory(CategoryRequest $request, $category_id) 
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
            return $this->successResponse(true, 'Category updated successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->errorResponse('Category not fetched', $e->getMessage());
        }
    }

    public function deleteCategory($categoryId) 
    {
        try{
            // Get category by id
            $category = Category::find($categoryId);

            if( !$category ) {
                return $this->errorResponse(
                    'Category does not exist',
                    'Category not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $category->delete();

            // success response
            return $this->successResponse(true, 'Category deleted successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->errorResponse('Category not fetched', $e->getMessage());
        }
    }
}
