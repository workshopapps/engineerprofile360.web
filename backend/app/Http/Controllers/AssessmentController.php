<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use App\Http\Requests\AssessmentRequest;
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
    public function deleteAss($ass_id): JsonResponse
    {
        try{
            $assessment = Assessment::findorFail($ass_id);

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

    public function updateAssessment(Request $request, $id){
        try {
            // $user = auth('sanctum')->user()->id;
            $this->validate($request, [
                'name'             =>'required',
                'start_date'       =>'required',
                'start_time'       =>'required',
            ]);

            $assessment = Assessment::findorFail($id);
            if( !$assessment ) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $assessment->name = $request->input('name');
            $assessment->start_date = $request->input('start_date');
            $assessment->start_date = $request->input('start_date');
            $assessment->save();

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
                return $this->errorResponse('No Companies assessments yet!', $e->getMessage());
            }

            return $this->successResponse(true, "All Company assessments", [
                    "data" => [
                    'assessments' => $assessments,
                    ]
                ]);

        } catch (Exception $e) {
            return $this->errorResponse('Company assessments not found', $e->getMessage());
        }

    }
}

