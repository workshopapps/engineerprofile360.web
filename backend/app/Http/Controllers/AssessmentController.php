<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AssessmentController extends Controller
{

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

    public function update(Request $request, $id){
        try {
            // $user = auth('sanctum')->user()->id;
            $this->validate($request, [
                'name'             =>'required',
                'start_date'       =>'required',
                'start_time'       =>'required',
            ]);
            $assessment = Assessment::findorFail($id);
            if( !$assessment) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $assessment->name = $request->input['name'];
            $assessment->start_date = $request->input['start_date'];
            $assessment->start_date = $request->input['start_date'];
            $assessment->save();
            return response()->json([
                'status'   => 'Assessment Successfully Updated',
                'Data'      => $assessment
            ]);
        } catch (Exception $e) {
            return $this->errorResponse('Assessment not fetched', $e->getMessage());
        }




    }
}

