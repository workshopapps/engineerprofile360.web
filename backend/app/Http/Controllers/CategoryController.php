<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{

    public function createCategory(Request $request): JsonResponse
    {
        try {
            $name = $request->name;

            if (!isset($name)) {
                return $this->sendResponse(true, "expected a valid category name, but got none",
                    "category name is missing.", null, Response::HTTP_NOT_FOUND);
            }

            $uid = $request->user["id"];
            $id = Str::uuid();

            $restCategory = Category::where("name", $name);

            if ($restCategory->count() > 0) {
                return $this->sendResponse(true,
                    "category name already exists", "name already exists.", null,
                    Response::HTTP_NOT_FOUND);
            }
            // category data
            $data = [
                "id" => $id,
                "name" => $name,
                "org_id" => $uid
            ];

            Category::create($data);

            return $this->sendResponse(false, null, "category created.", $data,
                Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->sendResponse(true, 'something went wrong creating category'. $e->getMessage(),
                "category not created", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function updateCategory(Request $request, $category_id): JsonResponse
    {
        try {
            $name = $request->name;

            if (empty($name)) {
                return $this->sendResponse(true, "expected a valid category 'name'  but got none",
                    "category name is missing.", null, Response::HTTP_NOT_FOUND);
            }

            if (empty($category_id)) {
                return $this->sendResponse(true, "expected a valid category 'id'  but got none",
                    "category id is missing.", null, Response::HTTP_NOT_FOUND);
            }

            $uid = $request->user["id"];
            $updatedName = $name;
            $category = Category::where('id', $category_id);

            // check if it same user who's trying to update category
            $org_id = $category->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to update category",
                    "unauthorised.", null, Response::HTTP_NOT_FOUND);
            }

            if ($category->count() == 0) {
                return $this->sendResponse(true, "category doesn't exists",
                    "category not found.", null, Response::HTTP_NOT_FOUND);
            }

            $category->where("org_id", $uid)->update(array("name" => $updatedName));

            return $this->sendResponse(false, null, 'category updated successfully',
                $updatedName, Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong updating category " . $e->getMessage(),
                'failed updating category.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function deleteCategory(Request $request, $category_id): JsonResponse
    {
        try {
            if (empty($category_id)) {
                return $this->sendResponse(true, "expected a valid category 'id'  but got none",
                    "category id is missing.", null, Response::HTTP_NOT_FOUND);
            }

            $uid = $request->user["id"];
            $category = Category::where('id', $category_id);

            // check if it same user who's trying to update category
            $org_id = $category->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to delete category",
                    "unauthorised.", $uid, Response::HTTP_NOT_FOUND);
            }

            if ($category->count() == 0) {
                return $this->sendResponse(true, "category doesn't exists",
                    "category not found.", null, Response::HTTP_NOT_FOUND);
            }

            $category->where("org_id", $uid)->delete();

            return $this->sendResponse(false, null, 'Category deleted successfully',
                null, Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong deleting category " . $e->getMessage(),
                'failed deleting category.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function getCategoriesByCompanyId(Request $request): JsonResponse
    {
        try {
            $uid = $request->user["id"];
            $allCategories = Category::where("org_id", $uid)->withCount("questions")->get();

            if ($allCategories->count() == 0) {
                return $this->sendResponse(true, "No category found",
                    "category not found.", null, Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(false, null, 'All categories', $allCategories,
                Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong fetching categories " . $e->getMessage(),
                'failed fetching categories.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function getCategoryById(string $category_id): JsonResponse
    {
        try {
            $category = Category::find($category_id);
            if (!$category) return $this->sendResponse(true, 'Category not found',
                'category does not exists', $category, Response::HTTP_NOT_FOUND);

            return $this->sendResponse(false, null, "Category found",
                $category, Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong fetching categories ". $e->getMessage(),
                "Error fetching category", null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
