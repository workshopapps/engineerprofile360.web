<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function createCategory(Request $request)
    {

        try{
            $payload = json_decode($request->getContent(), true);
    
            
            if(!isset($payload["name"])){
                return $this->sendResponse(true, "expected a valid category 'name  but got none", "category name is missing.", null, 400);
            }
            
            $uid = $request->user["id"];
            $id = Str::uuid();
            $name = $payload["name"];
            
            $restCategory = Category::where("name", $name);

            if($restCategory->count() > 0){
                return $this->sendResponse(true, "category name already exists", "name already exists.", null, 400);
            }

            // category data
            $data = [
                "id"=> $id,
                "name"=>$name,
                "org_id"=> $uid
            ];

            Category::create($data);

            return $this->sendResponse(false,null, "category created.", $data, 200);
        }  catch (\Exception $e) {
            return $this->sendResponse(true,'something went wrong creating category', $e->getMessage(), null, 500);
        }
    }

    public function updateCategory(Request $request, $category_id) 
    {
        try{
            $payload = json_decode($request->getContent(), true);

            if(!isset($payload["name"]) || empty($payload["name"])){
                return $this->sendResponse(true, "expected a valid category 'name'  but got none", "category name is missing.", null, 400);
            }

            if(!isset($category_id) || empty($category_id)){
                return $this->sendResponse(true, "expected a valid category 'id'  but got none", "category id is missing.", null, 400);
            }


            $uid = $request->user["id"];
            $updatedName = $payload["name"];
            $category = Category::where('id',$category_id)->where("org_id", $uid);

            if($category->count() == 0 ) {
                return $this->sendResponse(true, "category doesnt exists", "category not found.", null, 404);
            }

            // check if it same user who's trying to update category
            $org_id = $category->first()["org_id"];

            if($org_id !== $uid){
                return $this->sendResponse(true, "not authorised to update categiry", "unauthorised.", null, 404);
            }


            $category->update(array("name"=> $updatedName));

            return $this->sendResponse(false, null, 'Category updated successfully', $updatedName, Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse(true,"something went wrong updating category ".$e->getMessage(),'failed updating category.',null,500);
        }
    }

    public function deleteCategory(Request $request, $category_id) 
    {
        try{
            if(!isset($category_id) || empty($category_id)){
                return $this->sendResponse(true, "expected a valid category 'id'  but got none", "category id is missing.", null, 400);
            }


            $uid = $request->user["id"];
            $category = Category::where('id',$category_id)->where("org_id", $uid);

            if($category->count() == 0 ) {
                return $this->sendResponse(true, "category doesnt exists", "category not found.", null, 404);
            }

            // check if it same user who's trying to update category
            $org_id = $category->first()["org_id"];

            if($org_id !== $uid){
                return $this->sendResponse(true, "not authorised to delete category", "unauthorised.", null, 404);
            }


            $category->delete();

            return $this->sendResponse(false, null, 'Category deleted successfully', null, Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse(true,"something went wrong deleting category ".$e->getMessage(),'failed deleting category.',null,500);
        }
    }

    public function getCategoriesByOrgId(Request $request){
        try {
            $uid = $request->user["id"];
            $allCategories = Category::where("org_id", $uid)->get();

            return $this->sendResponse(false, null, 'All categories', $allCategories, Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse(true,"something went wrong fetching categories ".$e->getMessage(),'failed fetching categories.',null,500);
        }
    }

    public function getByAssessmentId(string $assessmentId): JsonResponse
    {
        try{
            $category = Category::find($assessmentId);
            if (!$category) return $this->errorResponse('Category not found', true, Response::HTTP_NOT_FOUND);
            return $this->successResponse(true, 'Successful', $category, Response::HTTP_OK);
        }
        catch(Exception $e)
        {
            return $this->errorResponse("Error fetching category", $e->getMessage());
        }
    }
}
