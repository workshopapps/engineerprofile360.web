<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Exception;
use App\Http\Requests\AddDepartmentRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class DepartmentController extends Controller
{
    // @dreywandowski --- add department
    public function addDepartment(AddDepartmentRequest $request)
    {
        $data = $request->all();

        try {
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
            $department = Department::find($departmentId);

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
     * Get all departments created by an Organisation
     *
     * @param  string  $id
     * @return Response
     */
    public function getDeptByOrgID(string $id)
    {
        try {
            $department = Department::where("org_id", $id);
            if (!$department->first()) return $this->sendResponse(true, "Not found", "Department not found", Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Successful", $department->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching the departments", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function updateDepartment(AddDepartmentRequest $request, $id)
    {
        try {
            $updateDepartment  = $request->all();

            $department = Department::find($id);
            $checkDepartment = Department::where('id', $id)->exists();

            if (!$checkDepartment) {
                $checkDepartment = [];
                return $this->sendResponse(true, null, 'This department does\'nt exists', $checkDepartment, Response::HTTP_NOT_FOUND);
            }

            $department->update($updateDepartment);

            return $this->sendResponse(false, null, 'Department Updated Successfully', $department, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
        }
    }

    public function deleteDepartment($id)
    {
        try {
            $department = Department::find($id);
            $checkDepartment = Department::where('id', $id)->exists();

            if (!$checkDepartment) {
                $checkDepartment = [];
                return $this->sendResponse(true, null, 'This department does\'nt exists', $checkDepartment, Response::HTTP_NOT_FOUND);
            }

            $department->delete();

            return $this->sendResponse(false, null, 'Department deleted successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
        }
    }
}