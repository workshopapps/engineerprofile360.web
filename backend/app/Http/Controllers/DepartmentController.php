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
        
    }

    // @dreywandowski --- get department by ID
    public function getDeptByID(string $departmentId)
    {
        
    }
}

