<?php

namespace App\Http\Controllers;

use App\Models\UserAssessment;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserAssessmentController extends Controller
{
    //delete userassessment
    public function deleteuserassessment(Request $request, $id)
    {

    }

    public function getAssessmentByID(Request $request, $id)
    {
        try
        {
            // check if assessment exists
            $assessmentexist = UserAssessment::where('id', $id)->exists();

            if($assessmentexist) {

                $useraccessment = UserAssessment::find($id);

                return $this->sendResponse(true, null, 'Assessment Details',$useraccessment,Response::HTTP_OK);

            }

            return $this->sendResponse(true, null, 'No Assessment Exists for the given Id', [], Response::HTTP_NOT_FOUND);

        }catch (Exception $e)
        {
            Log::error("UserAssessment Error", array("details" => $e->getMessage()));

            return $this->sendResponse(false, null, "Unable to fetch assessment at this time",Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }


}
