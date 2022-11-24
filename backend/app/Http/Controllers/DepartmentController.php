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

        try{
            $department = Department::create($data);

            return $this->sendResponse(false, null, 'Department created successfully', $department, Response::HTTP_CREATED);

        } catch (Exception $e) {
            $this->sendResponse(true, 'Error creating the department', $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // @dreywandowski --- get department by ID
    public function getDeptByID(string $departmentId)
    {
        try{
            $department = Department::find($departmentId);

            if( !$department) {
                return $this->sendResponse(
                    true,
                    'Fetch department by ID failed',
                    'Department does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(false,null, "department retrieved sucessfully", $department, Response::HTTP_OK);

        } catch (Exception $e) {
            $this->sendResponse(true, 'Error fetching the departments', $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    
}

