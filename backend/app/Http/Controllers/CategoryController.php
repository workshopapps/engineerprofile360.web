<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCategory(CategoryRequest $request)
    {
        $data = $request->all();
        try{
            Category::create($data);
            return $this->successResponse(true, 'Category created', Response::HTTP_CREATED);
        }  catch (Exception $e) {
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
            return $this->successResponse(true, 'Category updated successfully', $category);
        }  catch (Exception $e) {
            return $this->errorResponse('Category not fetched', $e->getMessage());
        }
    }
    public function deleteCategory($cat_id){
        $cat = new Category();
        $msg= "";
        $code = "";
        $error = false;
        $data = array();

        if(empty($cat_id)){
            $msg= "Please enter Category id!";
            $code = 400;   //bad request
            $error = true;
            $data = null;
        }else{
            $findId = $cat::find($cat_id);
            $result = $findId->delete();
            
            if($result){
                $msg= "Category with Id: ".$cat_id. " was deleted successfully!";
                $code = 200;
                $error = false;
                $data = ["category_id" => $cat_id];
            }else{
                $msg= "Oops!, Category with Id: ".$cat_id. " failed to delete!";
                $code = 404;
                $error = true;
                $data = ["category_id" => $cat_id];
            }
        }

        $response = [
			"error" => $error,
			"code" => $code,
			"message" => $msg,
			"data" => $data
		];
	    return json_encode($response);


    }
}
