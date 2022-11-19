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

    public function createAssessment(AssessmentRequest $request)
    {
        $data = $request->all();
        
        try{
            //$data = file_get_contents("php://input");
            Assessment::create($data);

            return $this->successResponse(true, 'Assessment created successfully', Response::HTTP_CREATED);

        } catch (Exception $e) {
            return $this->errorResponse('Assessment could not be created', $e->getMessage());
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
}

