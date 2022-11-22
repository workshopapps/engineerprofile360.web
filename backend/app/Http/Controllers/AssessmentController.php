<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use App\Http\Requests\AssessmentRequest;
use App\Http\Requests\UpdateAssessmentRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AssessmentController extends Controller
{
    public function sendResponse(
        bool $errorState = true,
        string $error = null,
        string $message = 'OK',
        $data = null,
        int $code = 200
    ): JsonResponse {
        return response()->json([
            'errorState' => $errorState,
            'error' => ucfirst($error),
            'message' => ucfirst($message),
            'data' => $data,
        ], $code);
    }

    public function createAssessment(AssessmentRequest $request)
    {
        $data = $request->all();
        
        try{
            //$data = file_get_contents("php://input");
            Assessment::create($data);

            return $this->sendResponse(false,null, 'Assessment created successfully',null, 201);

        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Assessment could not be created',null, 400);
        }
    }

    // @dreywandowski ---- delete an assessment
    public function deleteAssessment($assessmentId): JsonResponse
    {
        try{
            $assessment = Assessment::findorFail($assessmentId);

            if( !$assessment) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $assessment->delete();

            return $this->successResponse(true, 'Assessment deleted successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Assessment not fetched', $e->getMessage());
        }

    }

    public function updateAssessment(UpdateAssessmentRequest $request, $assessmentId)
    {
        try{
             // $user = auth('sanctum')->user()->id;
            $updatedData = $request->all();
           
            $assessment = Assessment::find($assessmentId);

            if( !$assessment ) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $assessment->update($updatedData);
            return $this->successResponse(true, 'Assessment updated successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Assessment not fetched', $e->getMessage());
        }

    }


    // @juddee ---- get organization assessments 
    public function getAssByOrgId(Request $request, $organization_id)
    {
        try{
            $assessments = Assessment::where('org_id',$organization_id)->get();
            if(!$assessments) 
            {
                $assessments = []; 
            }

            return $this->successResponse(true, "Organisation assessments", $assessments, Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->errorResponse('Company assessments not found', $e->getMessage());
        }

    }
}

