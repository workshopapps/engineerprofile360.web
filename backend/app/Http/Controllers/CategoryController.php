<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCategoryRequest;
use Exception;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Create a new Category.
     *
     * Create Category
     * @param CategoryRequest $request
     *
     * @return JsonResponse
     */
    public function createCategory(CategoryRequest $request): JsonResponse
    {
        $data = $request->all();

        try {
            //this checks if category already exists for the current user
            $categoryExists = Category::where('name', $data['name'])->where('org_id', $data['org_id'])->first();

            if($categoryExists){
                return $this->sendResponse(true, "category already exists", "name already exists.", null, Response::HTTP_BAD_REQUEST);
            }

            $category = Category::create($data);

            return $this->sendResponse(false, null, "Category successfully created.", $category, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Category could not be created', $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

	public function updateCategory(UpdateCategoryRequest $request, $orgId, $categorId): JsonResponse
    {
        $updatedData = $request->all();
        try {

            $category = Category::where('id', $categorId)->where('org_id', $orgId)->first();

            $categoryExists = Category::where('name', $updatedData['name'])->where('org_id', $category->org_id)->first();

            if($categoryExists){
                return $this->sendResponse(true, "category already exists", "name already exists", null, Response::HTTP_BAD_REQUEST);
            }

            if(!$category){
                return $this->sendResponse(true, "Category does not exist", "Category not found for this user", null, Response::HTTP_NOT_FOUND);
            }

            $updatedCategory = $category->update($updatedData);

            return $this->sendResponse(false, null, 'Category updated successfully', $updatedCategory, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Could not fetch category ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteCategory($categoryId, $orgId): JsonResponse
    {
        try {

            $category = Category::where('id', $categoryId)->where('org_id', $orgId)->first();

            if(!$category){
                return $this->sendResponse(true, "Category does not exist", "Category not found for this user", null, Response::HTTP_NOT_FOUND);
            }

            $category->delete();

            return $this->sendResponse(false, null, 'Category deleted successfully', null, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Could not fetch category ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCategoryById($orgId, $categoryId): JsonResponse
    {
        try {
            $category = Category::where('id', $categoryId)->where('org_id', $orgId)->first();

            if (!$category) {
                return $this->sendResponse(
                    true,
                    'Category not found',
                    'Category does not exist',
                    null,
                    Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(
                true,
                null,
                'Category',
                $category,
                Response::HTTP_OK
            );
        } catch (Exception $e) {
            return $this->sendResponse(true,"Error fetching category", $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get company's categories
     * @param string $orgId
     *
     * @return JsonResponse
    */
    public function getCompanyCategories( $id ) : JsonResponse
    {
        try{
            $categories = Category::where('org_id', $id)->paginate(10);

            return $this->sendResponse(
                true,
                null,
                'Categories',
                $categories,
                Response::HTTP_OK
            );
        } catch (Exception $e) {
            return $this->sendResponse(true,"Error fetching category", $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}