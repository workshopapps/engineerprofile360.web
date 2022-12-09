<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Exception;
use App\Http\Requests\AddDepartmentRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;


class DepartmentController extends Controller
{
    public function addDepartment(AddDepartmentRequest $request)
    {
        $data = $request->all();

        try {
             //this checks if category already exists for the current user
             $departmentExists = Department::where('name', $data['name'])->where('org_id', $data['org_id'])->first();

             if($departmentExists){
                 return $this->sendResponse(true, "department already exists", "name already exists.", null, Response::HTTP_BAD_REQUEST);
             }

            $department = Department::create($data);

            return $this->sendResponse(false, null, 'Department created successfully', $department, Response::HTTP_CREATED);
        } catch (Exception $e) {
            $this->sendResponse(true, 'Error creating the department', $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // @dreywandowski --- get department by ID
    public function getDeptByID(string $departmentId)
    {
        try {
            $department = Department::where("id", $departmentId)->withCount('employee')->withCount('assessment')->get();

            if (!$department) {
                return $this->sendResponse(
                    true,
                    'Fetch department by ID failed',
                    'Department does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(false, null, "department retrieved sucessfully", $department, Response::HTTP_OK);
        } catch (Exception $e) {
            $this->sendResponse(true, 'Error fetching the departments', $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get all departments created by an Organization
     *
     * @param  string  $id
     * @return Response
     */
    public function getDeptByOrgID(string $id)
    {
        try {
            $department = Department::where("org_id", $id)->withCount('employee')->withCount('assessment')->latest()->get();
            return $this->sendResponse(false, null, "Successful", $department, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching the departments", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Edit/Update department by id.
     *
     * @return \Illuminate\Http\Response
     */

    public function updateDepartment(Request $request, $id)
    {
        try {
            $data = $request->all();

            $department = Department::find($id);

            $checkDepartment = Department::where("id", $id)->exists();

            if (!$checkDepartment) {
                $department = [];
                return $this->sendResponse(true, null, 'This department does\'nt exists', $department, Response::HTTP_NOT_FOUND);
            }

            $department->update($data);

            return $this->sendResponse(false, null, 'Department Updated Successfully', $department, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Delete department by id.
     *
     * @return \Illuminate\Http\Response
     */

    public function deleteDepartment($id): JsonResponse
    {
        try {
            $department = Department::find($id);
            $checkDepartment = Department::where('id', $id)->exists();

            if (!$checkDepartment) {
                $department = [];
                return $this->sendResponse(true, null, 'This department does\'nt exists', $department, Response::HTTP_NOT_FOUND);
            }

            $department->delete();

            return $this->sendResponse(false, null, 'Department deleted successfully', $department, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
        }
    }
}