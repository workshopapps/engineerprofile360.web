<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assessment;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AssessmentController extends Controller
{
    

    // @dreywandowski ---- delete an assessment
    public function deleteAss($ass_id): JsonResponse{
        try{
        $response = Assessment::findorFail($ass_id); 
        }
        catch(ModelNotFoundException $e){
            return $this->errorResponse(
                'no records found for id '.$ass_id,
                'Record not found',
                Response::HTTP_NOT_FOUND
            );
        }
        $response->delete();   
        return $this->successResponse(
            true,
            'deleted successfully',
            'this has been deleted',
            Response::HTTP_OK
        );
    }
    /////////////////////////////////////////////////////
}