<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AssessmentController extends Controller
{

    
  public function create_assessment(Request $request)
  {
     $result = $request->validate([
      'user_id' => 'required',
      'name' => 'required',
      'start_date' => 'required',
      'start_time' => 'required',
     ]);

     if ($result) {
      try {
          $data = file_get_contents("php://input");
         $assessment = new Assessment();
         $assessment->user_id = $data->user_id;
         $assessment->name = $data->name;
         $assessment->start_date = $data->start_date;
         $assessment->start_time = $data->start_time;
         $assessment->save();
         return $this->successResponse(true, 'Assessment created successfully', Response::HTTP_CREATED);
        
         } catch (Exception $e) {
          return $this->errorResponse('Assessment could not be created', $e->getMessage());
         }
         
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

